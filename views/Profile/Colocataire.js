import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';
import { Button as PaperButton} from 'react-native-paper';
import { Card as PaperCard} from 'react-native-paper';
import { Title} from 'react-native-paper';

const FormulaireAnnonce = () => {
    return (
    <View style={styles.formulaireannonce}>
        <Text>Logement: N/A</Text>
    </View>
    );
}

export default function ProfileColocataire({homeStyle, navigation})
{
    return (
        <View style={styles.profile}>
            <Image 
            source={require('../../assets/Chibi_7.png')}
            style={styles.profilepicture}>
            </Image>
            <View style={styles.profileinfo}>
                <Text>Joseph Dupré</Text>
                <Text>Recherche des colocataires</Text>
            </View>
            <FormulaireAnnonce></FormulaireAnnonce>
            <View style={styles.profiledescription}>
                <Text>Description:</Text>
                <Text>Je rentre à l’emlyon en septembre, et je cherche des colocataires sur Lyon pour intégrer un appartement, de préférence dans le 7e ou 6e arrondissement. </Text>
            </View>
            <Text style={{flex: 5,
            justifyContent: "space-evenly",
            alignItems: "center",}}>Tag</Text>
            <PaperButton
            mode="contained">
                Contacter
            </PaperButton>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profilepicture: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    profileinfo: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    formulaireannonce: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    profiledescription: {
        flex: 4,
        textAlign:"center",
        justifyContent: "center",
        alignItems: "center",
    },
});