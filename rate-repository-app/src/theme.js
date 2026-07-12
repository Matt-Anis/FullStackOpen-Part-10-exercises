import { Platform } from 'react-native'

const theme = {
  colors: {
    // text
    textPrimary: '#24292f',
    textSecondary: '#57606a',
    textDisabled: '#8c959f',
    textOnPrimary: '#ffffff',
    // backgrounds
    bgPrimary: '#ffffff',
    bgSecondary: '#f6f8fa',
    bgTertiary: '#eaeef2',
    // borders
    border: '#d0d7de',
    borderMuted: '#eaeef2',
    // brand
    primary: '#24292f',
    primaryHover: '#444d56',
    primaryMuted: '#f6f8fa',
    // states
    success: '#1a7f37',
    danger: '#d73a4a',
    dangerHover: '#a40e26',
    warning: '#9a6700',
  },
  button: {
    default: {
      backgroundColor: '#f6f8fa',
      borderColor: '#d0d7de',
      color: '#24292f',
    },
    primary: {
      backgroundColor: '#24292f',
      borderColor: '#24292f',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: '#cf222e',
      borderColor: '#cf222e',
      color: '#ffffff',
    },
    pressed: {
      opacity: 0.75,
    },
    disabled: {
      backgroundColor: '#eaeef2',
      borderColor: '#d0d7de',
      color: '#8c959f',
    },
  },
  input: {
    default: {
      backgroundColor: '#ffffff',
      borderColor: '#d0d7de',
      color: '#24292f',
      placeholderColor: '#8c959f',
    },
    focused: {
      borderColor: '#57606a',
      shadowColor: '#57606a',
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    error: {
      borderColor: '#cf222e',
      shadowColor: '#cf222e',
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    disabled: {
      backgroundColor: '#f6f8fa',
      borderColor: '#d0d7de',
      color: '#8c959f',
      placeholderColor: '#8c959f',
    },
  },
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
  },
  radii: {
    sm: 4,
    md: 6,
    lg: 8,
    full: 9999,
  },
}

export default theme
