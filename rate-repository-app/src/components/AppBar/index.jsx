import { View, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import AppBarLink from './AppBarLink'
import useCurrentUser from '../../hooks/useCurrentUser'
import useSignOut from '../../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 56 + Constants.statusBarHeight,
  },
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
          <AppBarTab onPress={signOut}>Sign out</AppBarTab>
        ) : (
          <AppBarLink pageName="signIn">Sign in</AppBarLink>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
