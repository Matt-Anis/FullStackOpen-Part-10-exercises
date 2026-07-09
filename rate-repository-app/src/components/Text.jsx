import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
})

const Text = ({
  color,
  fontSize = 'md',
  fontWeight = 'normal',
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'xs' && { fontSize: theme.fontSizes.xs },
    fontSize === 'sm' && { fontSize: theme.fontSizes.sm },
    fontSize === 'lg' && { fontSize: theme.fontSizes.lg },
    fontSize === 'xl' && { fontSize: theme.fontSizes.xl },
    fontSize === 'xxl' && { fontSize: theme.fontSizes.xxl },
    fontSize === 'xxxl' && { fontSize: theme.fontSizes.xxxl },
    fontWeight === 'medium' && { fontWeight: theme.fontWeights.medium },
    fontWeight === 'semibold' && { fontWeight: theme.fontWeights.semibold },
    fontWeight === 'bold' && { fontWeight: theme.fontWeights.bold },
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text
