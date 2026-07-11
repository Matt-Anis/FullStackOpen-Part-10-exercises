import { gql } from '@apollo/client'
import { AUTH_PAYLOAD } from './fragments'

export const SIGN_IN = gql`
  ${AUTH_PAYLOAD}
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      ...AuthenticateFields
    }
  }
`
