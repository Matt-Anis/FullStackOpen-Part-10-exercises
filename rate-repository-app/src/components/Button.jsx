import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: theme.button.default.backgroundColor,
    borderColor: theme.button.default.borderColor,
  },
  primary: {
    backgroundColor: theme.button.primary.backgroundColor,
    borderColor: theme.button.primary.borderColor,
  },
  danger: {
    backgroundColor: theme.button.danger.backgroundColor,
    borderColor: theme.button.danger.borderColor,
  },
  disabled: {
    backgroundColor: theme.button.disabled.backgroundColor,
    borderColor: theme.button.disabled.borderColor,
  },
})

const textColorMap = {
  default: 'textPrimary',
  primary: 'textOnPrimary',
  danger: 'textOnPrimary',
  disabled: 'textDisabled',
}

const Button = ({
  children,
  onPress,
  variant = 'default',
  disabled = false,
  style,
}) => {
  const activeVariant = disabled ? 'disabled' : variant

  return (
    <Pressable
      onPress={disabled ? null : onPress}
      style={({ pressed }) => [
        styles.button,
        styles[activeVariant],
        pressed && !disabled && { opacity: 0.75 },
        style,
      ]}
    >
      <Text fontWeight="bold" fontSize="m" color={textColorMap[activeVariant]}>
        {children}
      </Text>
    </Pressable>
  )
}

export default Button
