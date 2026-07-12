import { Link } from 'react-router-native'
import RepositoryItemCard from './RepositoryItemCard'

const RepositoryItem = ({ repo }) => (
  <Link to={`/repository/${repo.id}`}>
    <RepositoryItemCard repo={repo} />
  </Link>
)

export { default as RepositoryItemScreen } from './RepositoryItemScreen'
export default RepositoryItem
