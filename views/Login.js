import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, CheckBox, StyleSheet, Text, TextInput, View } from 'react-native';

var isLogged = false;

export function handleLogin(navigation, textEmail, textPassword) {
    fetch('http://0.0.0.0:5000/auth/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: textEmail,
            password: textPassword
        })
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.msg == "Welcome to cosy roomie") {
                isLogged = true;
                navigation.navigate("Home")
                return
            }
            alert(response.msg);
            return response.msg;
        })
}

export default function Login({ homeStyle, navigation }) {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={homeStyle}>
            <TextInput
                title="Email"
                placeholder="Email..."
                onChangeText={(text) => onChangeEmail(text)}
                value={email}>
            </TextInput>
            <TextInput
                title="Mot de Passe"
                placeholder="Mot de Passe..."
                onChangeText={(text) => onChangePassword(text)}
                value={password}>
            </TextInput>
            <View style={styles.checkboxContainer}>
                <CheckBox title="Restez connecter?"
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Restez connecter?</Text>
            </View>
            <Button
                title="Connexion"
                onPress={() => handleLogin(navigation, email, password)}>
            </Button>
            <Button
                title="Retour"
                onPress={() =>
                    navigation.navigate("Accueil")}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 10,
    },
});