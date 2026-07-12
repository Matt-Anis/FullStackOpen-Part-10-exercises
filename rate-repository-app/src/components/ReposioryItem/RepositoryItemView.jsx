import RepositoryItemCard from './RepositoryItemCard'
import RepositoryReviewCard from './RepositoryReviewCard'
import Button from '../Button'
import Text from '../Text'
import { FlatList, View, StyleSheet } from 'react-native'
import theme from '../../theme'

const RepositoryItemView = ({ repo, loading, onPress }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  const reviews = repo.reviews.edges.map((edge) => edge.node)
  const separator = () => <View style={{ height: 10 }} />

  return (
    <View style={styles.container}>
      <View>
        <RepositoryItemCard repo={repo} />
        <Button onPress={onPress}>Open in GitHub</Button>
      </View>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <RepositoryReviewCard review={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    gap: theme.spacing.md,
  },
  flatList: {
    gap: theme.spacing.md,
  },
})

export default RepositoryItemView
