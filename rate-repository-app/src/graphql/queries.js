import { gql } from '@apollo/client'
import {
  REPOSITORY_FIELDS,
  USER_FIELDS,
  REPOSITORY_FIELDS_WITH_REVIEWS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
