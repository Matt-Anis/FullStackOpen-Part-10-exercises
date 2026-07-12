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

const ReviewForm = ({ onSubmit, result, error }) => {
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
          Submitting review...
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Review</Text>

      <View style={styles.form}>
        {/* ownerName */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="ownerName"
            rules={{ required: 'Owner name is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.ownerName && styles.inputError]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Repository owner name"
                placeholderTextColor={theme.input.default.placeholderColor}
                autoCapitalize="none"
                keyboardType="default"
              />
            )}
          />
          {errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName.message}</Text>
          )}
        </View>

        {/* repositoryName */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="repositoryName"
            rules={{ required: 'Repository name is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  errors.repositoryName && styles.inputError,
                ]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Repository name"
                placeholderTextColor={theme.input.default.placeholderColor}
                autoCapitalize="none"
                keyboardType="default"
              />
            )}
          />
          {errors.repositoryName && (
            <Text style={styles.errorText}>
              {errors.repositoryName.message}
            </Text>
          )}
        </View>

        {/* rating */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: 'Rating is required',
              min: { value: 0, message: 'Rating must be at least 0' },
              max: { value: 100, message: 'Rating cannot exceed 100' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.rating && styles.inputError]}
                onChangeText={(text) => onChange(Number(text))}
                onBlur={onBlur}
                value={value ? String(value) : ''}
                placeholder="Rating (0-100)"
                placeholderTextColor={theme.input.default.placeholderColor}
                keyboardType="numeric"
              />
            )}
          />
          {errors.rating && (
            <Text style={styles.errorText}>{errors.rating.message}</Text>
          )}
        </View>

        {/* text */}
        <View style={styles.fieldGroup}>
          <Controller
            control={control}
            name="text"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, styles.textArea]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Review text (optional)"
                placeholderTextColor={theme.input.default.placeholderColor}
                multiline
              />
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.bgPrimary,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.spacing.md,
    color: theme.colors.textPrimary,
  },
  form: {
    rowGap: theme.spacing.md,
  },
  fieldGroup: {
    rowGap: theme.spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.input.default.borderColor,
    borderRadius: theme.radii.sm,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    color: theme.colors.textPrimary,
    backgroundColor: theme.input.default.backgroundColor,
  },
  inputError: {
    borderColor: theme.colors.danger,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  errorText: {
    color: theme.colors.danger,
    fontSize: theme.fontSizes.sm,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radii.sm,
    alignItems: 'center',
  },
  submitButtonText: {
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.semibold,
  },
})

export default ReviewForm
