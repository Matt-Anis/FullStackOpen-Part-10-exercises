import useSignUp from '../../hooks/useSignUp'
import { useState } from 'react'
import SignUpForm from './SignUpForm'
import { useNavigate } from 'react-router-native'

const SignUpFormContainer = () => {
  const [signUp, result] = useSignUp()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp({ username, password })
      navigate('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return <SignUpForm onSubmit={onSubmit} result={result} error={error} />
}

export default SignUpFormContainer
