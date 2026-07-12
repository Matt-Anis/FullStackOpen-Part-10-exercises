import { gql } from '@apollo/client'
import {
  REPOSITORY_FIELDS,
  USER_FIELDS,
  REPOSITORY_FIELDS_WITH_REVIEWS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS_WITH_REVIEWS}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFieldsWithReviews
    }
  }
`

export const ME = gql`
  ${USER_FIELDS}
  query {
    me {
      ...UserFields
    }
  }
`
