import { gql } from '@apollo/client'
import {
  REPOSITORY_FIELDS,
  USER_FIELDS,
  REPOSITORY_FIELDS_WITH_REVIEWS,
  REVIEW_FIELDS,
} from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
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
  query Me {
    me {
      ...UserFields
    }
  }
`

export const MY_REVIEWS = gql`
  ${REVIEW_FIELDS}
  query MyReviews {
    me {
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
`
