import { CREATE_REVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const review = {
      ownerName,
      repositoryName,
      rating: parseInt(rating),
      text,
    }

    const { data } = await mutate({
      variables: { review },
    })

    return data.createReview
  }

  return [createReview, result]
}

export default useCreateReview
