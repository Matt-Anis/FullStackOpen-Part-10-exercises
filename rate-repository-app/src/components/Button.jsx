import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

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

const Button = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.button, pressed && { opacity: 0.75 }]}
  >
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
)

export default Button
