import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    rowGap: theme.spacing.small,
  },
})

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Text fontSize="lg" fontWeight="bold">
        Full name: {repo.fullName}
      </Text>

      <Text color="textSecondary" fontSize="sm">
        Description {repo.description}
      </Text>

      <Text color="primary" fontWeight="medium">
        Language: {repo.language}
      </Text>

      <Text color="textSecondary" fontSize="sm">
        ForksCount: {repo.forksCount}
      </Text>

      <Text color="textSecondary" fontSize="sm">
        Stars: {repo.stargazersCount}
      </Text>

      <Text fontWeight="bold" fontSize="lg">
        Rating: {repo.ratingAverage}
      </Text>

      <Text color="textSecondary" fontSize="sm">
        Reviews: {repo.reviewCount}
      </Text>
    </View>
  )
}

export default RepositoryItem
