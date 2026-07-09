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
    primary: '#0969da',
    primaryHover: '#0550ae',
    primaryMuted: '#ddf4ff',

    // states
    success: '#1a7f37',
    danger: '#cf222e',
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
      backgroundColor: '#0969da',
      borderColor: '#0969da',
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


  fontSizes: {
    xs: 10, // labels, badges, tiny metadata
    sm: 12, // captions, secondary info
    md: 14, // body text (default)
    lg: 16, // subheadings, slightly emphasized text
    xl: 20, // section headings
    xxl: 24, // screen titles
    xxxl: 32, // hero text, big numbers (ratings, stats)
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  spacing: {
    xs: 4,
    small: 8,
    medium: 16,
    large: 24,
  },
}

export default theme
