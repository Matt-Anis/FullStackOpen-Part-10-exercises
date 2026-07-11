import { useQuery } from '@apollo/client/react'
import { ME } from '../graphql/queries'

const useCurrentUser = () => {
  const { data, loading, error } = useQuery(ME)
  return { currentUser: data?.me, loading, error }
}

export default useCurrentUser
