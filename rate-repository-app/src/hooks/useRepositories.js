import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES, GET_REPOSITORY } from '../graphql/queries'

export const useRepositories = ({
  orderBy,
  orderDirection,
  searchKeyword,
} = {}) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: orderBy || 'CREATED_AT',
      orderDirection: orderDirection || 'DESC',
      searchKeyword: searchKeyword || '',
    },
    fetchPolicy: 'cache-and-network',
  })
  return { repositories: data?.repositories, loading, refetch }
}

export const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  })
  return { repository: data?.repository, loading, error }
}
