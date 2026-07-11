import { View, StyleSheet, Image } from 'react-native'
import Text from '../Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    rowGap: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'stretch',
  },
  container: {
    rowGap: theme.spacing.md,
  },
  profile: {
    flexDirection: 'row',
    columnGap: theme.spacing.md,
    flex: 1,
  },
  description: {
    flexDirection: 'column',
    rowGap: theme.spacing.xs,
    flex: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    rowGap: 4,
  },
  statNumber: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold,
  },
})

const formatNumber = (number) => {
  if (number < 1000) return number
  return `${parseFloat((number / 1000).toFixed(1))}K`
}

const RepositoryItemHeader = ({ repo }) => (
  <View style={styles.profile}>
    <Image
      style={styles.profilePicture}
      source={{ uri: repo.ownerAvatarUrl }}
    />
    <View style={styles.description}>
      <Text
        fontSize="lg"
        fontWeight="bold"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {repo.fullName}
      </Text>
      <Text color="textSecondary" numberOfLines={2} ellipsizeMode="tail">
        {repo.description}
      </Text>
      <View style={styles.tag}>
        <Text fontSize="xs" color="white" fontWeight="bold">
          {repo.language}
        </Text>
      </View>
    </View>
  </View>
)

const StatItem = ({ value, label }) => (
  <View style={styles.statItem}>
    <Text fontWeight="bold" fontSize="lg">
      {formatNumber(value)}
    </Text>
    <Text color="textSecondary" fontSize="m">
      {label}
    </Text>
  </View>
)

const RepositoryItemStats = ({ repo }) => (
  <View style={styles.stats}>
    <StatItem value={repo.stargazersCount} label="Stars" />
    <StatItem value={repo.forksCount} label="Forks" />
    <StatItem value={repo.ratingAverage} label="Rating" />
    <StatItem value={repo.reviewCount} label="Reviews" />
  </View>
)

const RepositoryItem = ({ repo }) => (
  <View style={styles.card} testID="repositoryItem">
    <RepositoryItemHeader repo={repo} />
    <RepositoryItemStats repo={repo} />
  </View>
)

export default RepositoryItem
