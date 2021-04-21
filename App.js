import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from './views/HomePage.js';
import Login from './views/Login';
import Register from './views/Register'
import TypeAnnonce from './views/TypeAnnonce'
import Home from './views/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={HomePage} />
        <Stack.Screen name="Connection" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inscription" component={Register} />
        <Stack.Screen name="Type d'Annonce" component={TypeAnnonce}/>
      </Stack.Navigator>
    </NavigationContainer>
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
