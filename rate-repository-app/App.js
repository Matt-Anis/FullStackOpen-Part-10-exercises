import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client/react'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'

import authStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'

import { PaperProvider } from 'react-native-paper'
import { paperTheme } from './src/theme'

const apolloClient = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider theme={paperTheme}>
              <Main />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  )
}

export default App
