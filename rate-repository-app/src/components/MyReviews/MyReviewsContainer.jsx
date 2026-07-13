import ReviewCard from '../ReviewCard'
import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native'
import theme from '../../theme'
import Button from '../Button'

const MyReviewsContainer = ({
  reviews,
  loading,
  openRepository,
  deleteReview,
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

  const separator = () => <View style={{ height: 10 }} />

  return (
    <View>
      <FlatList
        data={reviewNodes}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReviewCard review={item}>
            <Button
              onPress={() => openRepository(item.repositoryId)}
              style={styles.openRepoButton}
            >
              View Repository
            </Button>
            <Button
              onPress={() => deleteReview(item.id)}
              style={styles.deleteButton}
            >
              Delete Review
            </Button>
          </ReviewCard>
        )}
        contentContainerStyle={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  openRepoButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: theme.colors.danger,
  },
})

export default MyReviewsContainer
