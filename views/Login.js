import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, CheckBox, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Login({homeStyle, navigation})
{
    const [isSelected, setSelection] = useState(false);
    return(
    <View style = {homeStyle}>
        <TextInput
            title = "Identifiant"
            placeholder="Identifiant...">    
        </TextInput>
        <TextInput
            title = "Mot de Passe"
            placeholder="Mot de Passe...">    
        </TextInput>
        <View style={styles.checkboxContainer}>
            <CheckBox title = "Restez connecter?"
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Restez connecter?</Text>
        </View>
        <Button
            title = "Connexion"
            onPress= {() => navigation.navigate("Home")}>
        </Button>
        <Button
            title = "Retour"
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