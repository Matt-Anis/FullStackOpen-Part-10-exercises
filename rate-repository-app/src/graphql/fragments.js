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

export const REPOSITORY_FIELDS_WITH_REVIEWS = gql`
  ${REPOSITORY_FIELDS}
  fragment RepositoryFieldsWithReviews on Repository {
    ...RepositoryFields
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
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
