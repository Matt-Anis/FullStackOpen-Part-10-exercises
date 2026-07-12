import { View, StyleSheet } from 'react-native'
import Text from '../Text'
import theme from '../../theme'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const RepositoryReviewCard = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.username}>{review.user.username}</Text>
          <Text style={styles.date}>{formatDate(review.createdAt)}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgPrimary,
    borderRadius: theme.radii.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.borderMuted,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  ratingContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
    flexShrink: 0,
  },
  ratingText: {
    color: theme.colors.textOnPrimary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
  },
  meta: {
    flex: 1,
    gap: 2,
  },
  username: {
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.textPrimary,
  },
  date: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  body: {
    paddingLeft: 44 + theme.spacing.md,
  },
  reviewText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
})

export default RepositoryReviewCard
