import { useQuery } from '@apollo/client/react'
import { ME, MY_REVIEWS } from '../graphql/queries'

const useCurrentUser = ({ includeReviews } = {}) => {
  console.log(
    'DEBUG: useCurrentUser called with includeReviews:',
    includeReviews,
  )
  const { data, loading, error } = useQuery(includeReviews ? MY_REVIEWS : ME, {
    fetchPolicy: 'cache-and-network',
  })
  return { currentUser: data?.me, loading, error }
}

export default useCurrentUser
