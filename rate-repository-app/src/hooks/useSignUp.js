import { useMutation } from '@apollo/client/react'
import { useNavigate } from 'react-router-native'
import { CREATE_USER } from '../graphql/mutations'
import useSignIn from './useSignIn'

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER)
  const navigate = useNavigate()
  const [signIn] = useSignIn()

  const signUp = async ({ username, password }) => {
    const { data } = await createUser({
      variables: { user: { username, password } },
    })
    if (data?.createUser) {
      const { accessToken } = await signIn({ username, password })
      if (accessToken) {
        navigate('/')
      }
    }
  }

  return [signUp, result]
}

export default useSignUp
