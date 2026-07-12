import ReviewCard from '../ReviewCard'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import theme from '../../theme'

const MyReviewsContainer = ({ reviews, loading }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
  console.log('data:', JSON.stringify(reviews, null, 2))

  const separator = () => <View style={{ height: 10 }} />

  return (
    <FlatList
      data={reviewNodes}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={separator}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ReviewCard review={item} />}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
})

export default MyReviewsContainer
