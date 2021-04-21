import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register({homeStyle, navigation})
{
    return(
    <View style = {homeStyle}>
        <TextInput
            title = "Nom"
            placeholder="Nom...">    
        </TextInput>
        <TextInput
            title = "Prénom"
            placeholder="Prénom...">    
        </TextInput>
        <TextInput
            title = "Mot de Passe"
            placeholder="Mot de Passe...">    
        </TextInput>
        <TextInput
            title = "Confirmation Mot de Passe"
            placeholder="Confirmation Mot de Passe...">    
        </TextInput>
        <TextInput
            title = "Addresse Email"
            placeholder="Addresse Email...">    
        </TextInput>
        <TextInput
            title = "Confirmation Addresse Email"
            placeholder="Confirmation Addresse Email...">    
        </TextInput>
        <Button
            title = "Connexion">
        </Button>
        <Button
            title = "Retour"
            onPress={() =>
                navigation.navigate("Accueil")}>
        </Button>
    </View>
    );
}