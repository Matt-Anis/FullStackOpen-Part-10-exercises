import { useQuery } from '@apollo/client/react'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../../graphql/queries'
import RepositoryItemView from './RepositoryItemView'
import { Linking } from 'react-native'

const RepositoryItemDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  })

  const onPress = () => Linking.openURL(data.repository.url)

  return (
    <RepositoryItemView
      repo={data?.repository}
      onPress={onPress}
      loading={loading}
    />
  )
}

export default RepositoryItemDetail
