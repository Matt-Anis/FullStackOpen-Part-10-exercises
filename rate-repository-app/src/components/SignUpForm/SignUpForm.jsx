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

const SignUpForm = ({ onSubmit, result, error }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
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
          Signing up...
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <View style={styles.form}>
        {/* username */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="username"
            rules={{
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long',
              },
              maxLength: {
                value: 30,
                message: 'Username must be at most 30 characters long',
              },
            }}
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

        {/* password */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters long',
              },
              maxLength: {
                value: 50,
                message: 'Password must be at most 50 characters long',
              },
            }}
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

        {/* confirmPassword */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirm Password is required',
              validate: (value) =>
                value === getValues('password') || 'Passwords do not match',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  errors.confirmPassword && styles.inputError,
                ]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Confirm Password"
                placeholderTextColor={theme.input.default.placeholderColor}
                secureTextEntry
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
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
    rowGap: theme.spacing.xs,
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
  submitButton: {
    backgroundColor: theme.button.primary.backgroundColor,
    borderRadius: theme.radii.md,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  submitButtonText: {
    color: theme.button.primary.color,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.semibold,
  },
})

export default SignUpForm
