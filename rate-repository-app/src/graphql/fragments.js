import { gql } from '@apollo/client'

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`
export const AUTH_PAYLOAD = gql`
  fragment AuthenticateFields on AuthenticatePayload {
    accessToken
    expiresAt
    user {
      id
      username
    }
  }
`

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    username
  }
`
