import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import RegisterForm from './RegisterForm'
import { name as appName } from './app.json';


export default function App() {
  return (
    <PaperProvider>
      <View>
        <RegisterForm></RegisterForm>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
