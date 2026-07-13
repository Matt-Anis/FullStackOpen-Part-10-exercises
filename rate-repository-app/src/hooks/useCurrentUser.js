import { useQuery } from '@apollo/client/react'
import { ME, MY_REVIEWS } from '../graphql/queries'

const useCurrentUser = ({ includeReviews } = {}) => {
  const { data, loading, error } = useQuery(includeReviews ? MY_REVIEWS : ME, {
    fetchPolicy: 'cache-and-network',
  })
  return { currentUser: data?.me, loading, error }
}

export default useCurrentUser
