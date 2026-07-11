import AsyncStorage from '@react-native-async-storage/async-storage'

const authStorage = {
  async getAccessToken() {
    const token = await AsyncStorage.getItem('auth:accessToken')
    return token ? JSON.parse(token) : null
  },
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem('auth:accessToken', JSON.stringify(accessToken))
  },
  async removeAccessToken() {
    await AsyncStorage.removeItem('auth:accessToken')
  },
}

export default authStorage
