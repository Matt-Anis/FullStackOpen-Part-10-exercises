import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import { RepositoryItemScreen } from './ReposioryItem'
import AppBar from './AppBar'
import SignIn from './SignIn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/repository/:id" element={<RepositoryItemScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SafeAreaView>
  )
}

export default Main
