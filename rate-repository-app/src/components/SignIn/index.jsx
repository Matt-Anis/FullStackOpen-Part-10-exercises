import useSignIn from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-native'
import LoginForm from './LoginForm'

const SignIn = () => {
  const navigate = useNavigate()
  const [signIn, result] = useSignIn()

  const onSubmit = async (data) => {
    try {
      await signIn(data)
      navigate('/')
    } catch {
      console.log('Invalid credentials')
    }
  }

  return <LoginForm result={result} onSubmit={onSubmit} />
}

export default SignIn
