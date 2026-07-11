import { useMutation } from '@apollo/client/react'
import authStorage from '../utils/authStorage'
import { SIGN_IN } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }
    const { data } = await mutate({ variables: { credentials } })
    await authStorage.setAccessToken(data?.authenticate.accessToken)
    return data?.authenticate
  }

  return [signIn, result]
}

export default useSignIn
