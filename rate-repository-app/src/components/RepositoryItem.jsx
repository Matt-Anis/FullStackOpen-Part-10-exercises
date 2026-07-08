import { Text, View } from 'react-native'

// {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },

const RepositoryItem = ({  repo }) => {
  return (
    <View>
      <Text>{repo.id}</Text>
      <Text>{ repo.fullName}</Text>
      <Text>{ repo.description}</Text>
      <Text>{ repo.language}</Text>
      <Text>{ repo.forksCount}</Text>
      <Text>{ repo.stargazersCount}</Text>
      <Text>{ repo.ratingAverage}</Text>
      <Text>{ repo.reviewCount}</Text>
      <Text>{ repo.ownerAvatarUrl}</Text>
    </View>
  )
}

export default RepositoryItem
