import useCreateReview from '../../hooks/useCreateReview'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import ReviewForm from './ReviewForm'

const ReviewFormContainer = () => {
  const [createReview, result] = useCreateReview()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      })

      navigate(`/repository/${data.repositoryId}`)
    } catch (e) {
      setError(e.message)
    }
  }

  return <ReviewForm onSubmit={onSubmit} result={result} error={error} />
}

export default ReviewFormContainer
