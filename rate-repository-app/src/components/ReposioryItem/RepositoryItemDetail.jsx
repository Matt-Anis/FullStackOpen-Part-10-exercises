import { useQuery } from '@apollo/client/react'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../../graphql/queries'
import RepositoryItemCard from './RepositoryItemCard'
import { Linking, View, StyleSheet } from 'react-native'
import Button from '../Button'
import Text from '../Text'
import theme from '../../theme'

const RepositoryItemDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>

  const onPress = () => Linking.openURL(data.repository.url)

  return (
    <View style={{ padding: theme.spacing.md }}>
      <RepositoryItemCard repo={data.repository} />
      <Button onPress={onPress}>Open in GitHub</Button>
    </View>
  )
}

export default RepositoryItemDetail
