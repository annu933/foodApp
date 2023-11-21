import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreens } from './src/screens/LoginSignuScreen/WelcomeScreens';
import { LoginScreens } from './src/screens/LoginSignuScreen/LoginScreens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreens /> */}
      <LoginScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
