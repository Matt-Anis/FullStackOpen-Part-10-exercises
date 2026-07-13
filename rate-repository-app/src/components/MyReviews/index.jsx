import { useNavigate } from 'react-router-native'
import { Alert } from 'react-native'

import useCurrentUser from '../../hooks/useCurrentUser'
import useDeleteReview from '../../hooks/useDeleteReview'

import MyReviewsContainer from './MyReviewsContainer'

const MyReviews = () => {
  const navigate = useNavigate()

  const { currentUser, loading, error } = useCurrentUser({
    includeReviews: true,
  })

  const [deleteReview] = useDeleteReview()

  const handleDeleteReview = (reviewId) => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteReview(reviewId)
            } catch (e) {
              console.error('Error deleting review:', e)
            }
          },
        },
      ],
      { cancelable: true },
    )
  }
  const openRepository = (repositoryId) => {
    navigate(`/repository/${repositoryId}`)
  }

  return (
    <MyReviewsContainer
      reviews={currentUser?.reviews}
      loading={loading}
      error={error}
      openRepository={openRepository}
      deleteReview={handleDeleteReview}
    />
  )
}

export default MyReviews
