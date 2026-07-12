import { Searchbar } from 'react-native-paper'
import theme from '../../theme'

const FilterSearchBar = ({ setSearchQuery, searchQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      theme={{
        colors: {
          elevation: {
            level3: theme.colors.bgPrimary, // background of the bar
          },
          onSurface: theme.colors.textPrimary, // text color
          onSurfaceVariant: theme.colors.textSecondary, // placeholder + icon color
          outline: theme.colors.border,
        },
      }}
    />
  )
}

export default FilterSearchBar
