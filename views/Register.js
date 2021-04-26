import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextInput as PaperInput} from 'react-native-paper';

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
        <View style={styles.container}>
            <View style={styles.fields}>
            <PaperInput
                title="Nom"
                label="Nom"
                mode="outlined"
                placeholder="Nom..."
                onChangeText={(text) => onChangeLastName(text)}
                value={lastName}>
            </PaperInput>
            <PaperInput
                title="Prénom"
                label="Prénom"
                mode="outlined"
                placeholder="Prénom..."
                onChangeText={(text) => onChangeFirstName(text)}
                value={firstName}>
            </PaperInput>
            <PaperInput
                title="Mot de Passe"
                label="Mot de Passe"
                mode="outlined"
                placeholder="Mot de Passe..."
                onChangeText={(text) => onChangePassword(text)}
                value={password}>
            </PaperInput>
            <PaperInput
                title="Confirmation Mot de Passe"
                label="Confirmation Mot de Passe"
                mode="outlined"
                placeholder="Confirmation Mot de Passe..."
                onChangeText={(text) => onChangePasswordVerification(text)}
                value={passwordVerification}>
            </PaperInput>
            <PaperInput
                title="Addresse Email"
                label="Addresse Email"
                mode="outlined"
                placeholder="Addresse Email..."
                onChangeText={(text) => onChangeEmail(text)}
                value={email}>
            </PaperInput>
            <PaperInput
                title="Confirmation Addresse Email"
                label="Confirmation Addresse Email"
                mode="outlined"
                placeholder="Confirmation Addresse Email..."
                onChangeText={(text) => onChangeEmailVerification(text)}
                value={emailVerification}>
            </PaperInput>
            </View>
            <View>
            <Button
                onPress={() => handleRegister(navigation, email, password, emailVerification,
                                            passwordVerification/*, lastName, firstName*/)}
                title="Créé mon compte">
            </Button>
            <Button
                title="Retour"
                onPress={() =>
                    navigation.navigate("Connection")}>
            </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    fields: {
        flex: 2,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flex: 2,
        padding: 10,
        alignItems: "evenly-spaced",
        justifyContent: "center",
    },
});