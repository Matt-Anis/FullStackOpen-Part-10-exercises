import { View, ScrollView, StyleSheet } from 'react-native'
import AppBarTab from './AppBarTab'
import AppBarLink from './AppBarLink'
import useCurrentUser from '../../hooks/useCurrentUser'
import useSignOut from '../../hooks/useSignOut'

const styles = StyleSheet.create({
  container: { height: 56 },
  scrollView: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
})

const AppBar = () => {
  const { currentUser } = useCurrentUser()
  const signOut = useSignOut()

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarLink pageName="">Repositories</AppBarLink>

        {currentUser ? (
          <>
            <AppBarLink pageName="review">Create a review</AppBarLink>
            <AppBarTab onPress={signOut}>Sign out</AppBarTab>
          </>
        ) : (
          <>
            <AppBarLink pageName="signIn">Sign in</AppBarLink>
            <AppBarLink pageName="signUp">Sign up</AppBarLink>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
