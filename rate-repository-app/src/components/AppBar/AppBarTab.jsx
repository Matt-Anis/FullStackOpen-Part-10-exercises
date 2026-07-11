import { Pressable } from 'react-native'
import Text from '../Text'

const AppBarTab = ({ children, onPress }) => (
  <Pressable onPress={onPress}>
    <Text fontWeight="bold" fontSize="xl">
      {children}
    </Text>
  </Pressable>
)

export default AppBarTab
