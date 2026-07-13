import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const Button = ({ children, onPress, style }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      style,
      pressed && { opacity: 0.75 },
    ]}
  >
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.button.primary.backgroundColor,
    borderRadius: theme.radii.md,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  buttonText: {
    color: theme.button.primary.color,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.semibold,
  },
})
export default Button
