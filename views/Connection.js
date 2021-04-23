import React from 'react';
import { TextInput, ImageBackground, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Button as PaperButton} from 'react-native-paper';

const cover = {uri: "https://source.unsplash.com/XkKCui44iM0/1600x900"}
const Stack = createStackNavigator();

export default function HomePage({navigation})
{
    const [text, onChangeText] = React.useState("");

    return (
      <View style={defaultStyle}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button
            title="Connexion"
            onPress={() => navigation.navigate("Login", defaultStyle)}
          ></Button>
          <Button
            title="Inscription"
            onPress={() => navigation.navigate("Inscription", defaultStyle)}
          ></Button>
        </View>
        <ImageBackground source={cover} style={defaultStyle.image}>
          <Text style={defaultStyle.text}>
            L'app la plus efficace pour trouver ta coloc !
          </Text>
        </ImageBackground>
        <TextInput
          style={defaultStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Où vas-tu ?"
        />
        <TextInput
          style={defaultStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Arrivée"
        />
        <TextInput
          style={defaultStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Départ"
        />
        <TextInput
          style={defaultStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="1 personne"
        />
        <PaperButton
          //icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
            Valider
        </PaperButton>
      </View>
    );
}

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  input: {
    fontSize: 22,
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
  },
});