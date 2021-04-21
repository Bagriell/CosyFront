import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Register from './Register'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomePage({navigation})
{
    return(
    <View style = {defaultStyle}>
       <Button
            title = "Connexion"
            onPress={() =>
                navigation.navigate("Connection", defaultStyle)}>
        </Button>
        <Button
            title = "Inscription"
            onPress={() =>
                navigation.navigate("Inscription", defaultStyle)}>
        </Button>
    </View>
    );
}

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})