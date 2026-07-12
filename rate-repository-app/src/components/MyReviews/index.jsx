import useCurrentUser from '../../hooks/useCurrentUser'
import MyReviewsContainer from './MyReviewsContainer'

const MyReviews = () => {
  const { currentUser, loading, error } = useCurrentUser({
    includeReviews: true,
  })

  console.log('data:', JSON.stringify(currentUser, null, 2))

  return (
    <MyReviewsContainer
      reviews={currentUser?.reviews}
      loading={loading}
      error={error}
    />
  )
}

export default MyReviews
