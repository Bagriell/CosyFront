import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export function handleRegister(navigation, textEmail, textPassword, textEmailVerification,
     textPasswordVerification/*, textLastName, textFirstName*/) {

    if (textEmailVerification != textEmail)
        alert("Les addresses mail ne correspondent pas")
    if (textPasswordVerification != textPassword)
        alert("Les mots de passes ne correspondent pas")

    fetch('http://0.0.0.0:5000/auth/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: textEmail,
            password: textPassword,
            //lastName: textLastName,
            //firstName: textFirstName
        })
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.msg == "User registered successfully") {
                console.log(response.msg)
                //navigation.navigate("Connection")
                return
            }
            alert(response.msg);
            return response.msg;
        })
}

export default function Register({ homeStyle, navigation }) {

    const [lastName, onChangeLastName] = React.useState("");
    const [firstName, onChangeFirstName] = React.useState("");
    const [email, onChangeEmail] = React.useState('');
    const [emailVerification, onChangeEmailVerification] = React.useState('');
    const [password, onChangePassword] = React.useState("");
    const [passwordVerification, onChangePasswordVerification] = React.useState("");

    return (
        <View style={homeStyle}>
            <TextInput
                title="Nom"
                placeholder="Nom..."
                onChangeText={(text) => onChangeLastName(text)}
                value={lastName}> //TODO change DB to fit lastName and firstName
            </TextInput>
            <TextInput
                title="Prénom"
                placeholder="Prénom..."
                onChangeText={(text) => onChangeFirstName(text)}
                value={firstName}>
            </TextInput>
            <TextInput
                title="Mot de Passe"
                placeholder="Mot de Passe..."
                onChangeText={(text) => onChangePassword(text)}
                value={password}>
            </TextInput>
            <TextInput
                title="Confirmation Mot de Passe"
                placeholder="Confirmation Mot de Passe..."
                onChangeText={(text) => onChangePasswordVerification(text)}
                value={passwordVerification}>
            </TextInput>
            <TextInput
                title="Addresse Email"
                placeholder="Addresse Email..."
                onChangeText={(text) => onChangeEmail(text)}
                value={email}>
            </TextInput>
            <TextInput
                title="Confirmation Addresse Email"
                placeholder="Confirmation Addresse Email..."
                onChangeText={(text) => onChangeEmailVerification(text)}
                value={emailVerification}>
            </TextInput>
            <Button
                onPress={() => handleRegister(navigation, email, password, emailVerification,
                                            passwordVerification/*, lastName, firstName*/)}
                title="Créé mon compte">
            </Button>
            <Button
                title="Retour"
                onPress={() =>
                    navigation.navigate("Accueil")}>
            </Button>
        </View>
    );
}