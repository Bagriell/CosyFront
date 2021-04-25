import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, CheckBox, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextInput as PaperInput} from 'react-native-paper';

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
        <View style={styles.container}>
            <PaperInput
                title="Email"
                label="Email"
                mode="outlined"
                placeholder="Email..."
                onChangeText={(text) => onChangeEmail(text)}
                value={email}>
            </PaperInput>
            <PaperInput
                title="Mot de Passe"
                label="Mot de Passe"
                mode="outlined"
                placeholder="Mot de Passe..."
                onChangeText={(text) => onChangePassword(text)}
                value={password}>
            </PaperInput>
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
                    navigation.navigate("Connection")}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "evenly-spaced",
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