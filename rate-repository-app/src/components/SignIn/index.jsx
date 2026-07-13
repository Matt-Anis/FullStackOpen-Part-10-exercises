import { useState } from 'react'
import useSignIn from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-native'
import LoginForm from './LoginForm'

const SignIn = () => {
  const navigate = useNavigate()
  const [signIn, result] = useSignIn()
  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    try {
      await signIn(data)
      navigate('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return <LoginForm result={result} onSubmit={onSubmit} error={error} />
}

export default SignIn
