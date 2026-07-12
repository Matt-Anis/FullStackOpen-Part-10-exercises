import { FlatList, View, StyleSheet } from 'react-native'

import RepositoryItem from '../ReposioryItem'
import SortSelect from './SortSelect'

const styles = StyleSheet.create({
  separator: {
    padding: 8,
    rowGap: 8,
  },
  container: {
    padding: 16,
  },
})
const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories, filter, setFilter }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <>
      <SortSelect filter={filter} setFilter={setFilter} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repo={item} />}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
    </>
  )
}

export default RepositoryListContainer
