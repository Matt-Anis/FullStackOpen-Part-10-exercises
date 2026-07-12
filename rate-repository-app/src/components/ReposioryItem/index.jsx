import { Link } from 'react-router-native'
import RepositoryItemCard from './RepositoryItemCard'

const RepositoryItem = ({ repo }) => (
  <Link to={`/repository/${repo.id}`}>
    <RepositoryItemCard repo={repo} />
  </Link>
)

export { default as RepositoryItemDetail } from './RepositoryItemDetail'
export default RepositoryItem
