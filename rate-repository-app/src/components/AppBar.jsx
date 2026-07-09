import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 56 + Constants.statusBarHeight,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab>Repositories</AppBarTab>
  </View>;
};

export default AppBar;
