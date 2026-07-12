import { Controller, useForm } from 'react-hook-form'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import theme from '../../theme'

const LoginForm = ({ onSubmit, result }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  if (result?.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text
          style={{
            marginTop: theme.spacing.md,
            color: theme.colors.textPrimary,
          }}
        >
          Signing in...
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <View style={styles.form}>
        {/* username */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.username && styles.inputError]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Username"
                placeholderTextColor={theme.input.default.placeholderColor}
                autoCapitalize="none"
                keyboardType="default"
              />
            )}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username.message}</Text>
          )}
        </View>

        {/* Password */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                placeholderTextColor={theme.input.default.placeholderColor}
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      {errors.root && (
        <Text style={{ ...styles.errorText, padding: theme.spacing.md }}>
          {errors.root.message}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.spacing.xxxl,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.bgPrimary,
    paddingHorizontal: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xxl,
  },
  form: {
    width: '100%',
    gap: theme.spacing.lg,
  },
  fieldGroup: {
    gap: theme.spacing.xs,
  },
  input: {
    backgroundColor: theme.input.default.backgroundColor,
    borderColor: theme.input.default.borderColor,
    borderWidth: 1,
    borderRadius: theme.radii.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.input.default.color,
  },
  inputError: {
    borderColor: theme.input.error.borderColor,
  },
  errorText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.danger,
  },
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

export default LoginForm
