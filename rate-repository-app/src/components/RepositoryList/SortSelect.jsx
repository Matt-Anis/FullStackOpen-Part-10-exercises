import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import theme from '../../theme'

const SortSelect = ({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={filter}
        onValueChange={(value) => setFilter(value)}
        mode="dropdown"
      >
        <Picker.Item label="Select an option..." value="" enabled={false} />
        <Picker.Item label="Latest repositories" value="LatestCreated" />
        <Picker.Item label="Highest rated repositories" value="HighestRated" />
        <Picker.Item label="Lowest rated repositories" value="LowestRated" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sm,
  },
})

export default SortSelect
