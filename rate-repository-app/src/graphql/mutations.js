import { gql } from '@apollo/client'
import { AUTH_PAYLOAD, USER_FIELDS } from './fragments'

export const SIGN_IN = gql`
  ${AUTH_PAYLOAD}
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      ...AuthenticateFields
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  ${USER_FIELDS}
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      ...UserFields
    }
  }
`
