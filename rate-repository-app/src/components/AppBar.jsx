import { View, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'

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
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab pageName="">Repositories</AppBarTab>
        <AppBarTab pageName="signIn">Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
