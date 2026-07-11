import { useMutation } from '@apollo/client/react'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }
    const { data } = await mutate({ variables: { credentials } })
    await authStorage.setAccessToken(data?.authenticate.accessToken)
    await apolloClient.resetStore()
    return data?.authenticate
  }

  return [signIn, result]
}

export default useSignIn
