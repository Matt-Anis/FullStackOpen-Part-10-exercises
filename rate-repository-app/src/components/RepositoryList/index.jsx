import { useRepositories } from '../../hooks/useRepositories'
import { useState } from 'react'

import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [filter, setFilter] = useState('LatestCreated')

  const orderBy =
    filter === 'HighestRated' || filter === 'LowestRated'
      ? 'RATING_AVERAGE'
      : 'CREATED_AT'
  const orderDirection = filter === 'LowestRated' ? 'ASC' : 'DESC'

  const { repositories } = useRepositories({ orderBy, orderDirection })

  return (
    <RepositoryListContainer
      repositories={repositories}
      filter={filter}
      setFilter={setFilter}
    />
  )
}

export default RepositoryList
