import { gql } from '@apollo/client'
import { REPOSITORY_FIELDS, USER_FIELDS } from './fragments'

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

export const ME = gql`
  ${USER_FIELDS}
  query {
    me {
      ...UserFields
    }
  }
`
