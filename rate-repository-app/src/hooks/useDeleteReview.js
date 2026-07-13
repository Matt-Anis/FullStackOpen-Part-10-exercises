import { useMutation } from '@apollo/client/react'
import { DELETE_REVIEW } from '../graphql/mutations'
import { MY_REVIEWS } from '../graphql/queries'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      { query: MY_REVIEWS, variables: { includeReviews: true } },
    ],
  })

  const deleteReview = async (id) => {
    await mutate({
      variables: { id },
    })
  }

  return [deleteReview, result]
}

export default useDeleteReview
