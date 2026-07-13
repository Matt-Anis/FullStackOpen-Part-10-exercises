import { useRepositories } from '../../hooks/useRepositories'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [filter, setFilter] = useState('LatestCreated')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)

  const orderBy =
    filter === 'HighestRated' || filter === 'LowestRated'
      ? 'RATING_AVERAGE'
      : 'CREATED_AT'
  const orderDirection = filter === 'LowestRated' ? 'ASC' : 'DESC'

  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchQuery,
    first: 2,
  })

  return (
    <RepositoryListContainer
      repositories={repositories}
      filter={filter}
      setFilter={setFilter}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      onEndReached={fetchMore}
    />
  )
}

export default RepositoryList
