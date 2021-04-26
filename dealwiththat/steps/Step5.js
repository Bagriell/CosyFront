import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Chip } from 'react-native-paper';


export default function Step5(props) {
    const validateStep = () => {
        props.stepHandler(5)
    }
    const passStep = () => {
        props.stepHandler(5)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Comment te décrirais-tu ?</Text>
            <View style={styles.chips}>
                <Chip mode='outlined' onPress={()=>{}}>   Fun   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Patient   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Amical   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip mode='outlined' onPress={()=>{}}>   Athlète   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Intello   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Entrepreneur   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip mode='outlined' onPress={()=>{}}>   Drageur   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Gourmand   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Gamer   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip mode='outlined' onPress={()=>{}}>   Cinéphile   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Cuistot   </Chip>
                <Chip mode='outlined' onPress={()=>{}}>   Aventurier   </Chip>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.touchableValidate} onPress={validateStep}>
                    <Text style={styles.buttonValidate}>Valider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablePass} onPress={passStep}>
                    <Text style={styles.buttonPass}>Passer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // display: 'flex',
        // flex: 1,
        marginLeft: 25,
        marginRight: 25,
    },
    mainText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 50
    },
   

    chips: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 40,
    },
    nextChips: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 50,
    },
    footer: {
        paddingTop: 160
    },
    touchableValidate: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFA07A',
        justifyContent: 'center'
    },
    buttonValidate: {
        width: '100%',
        height: 35,
        bottom: 0,
        fontSize: 20,
        textAlign: 'center'
    },
    touchablePass: {
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
    buttonPass: {
        width: '100%',
        marginTop: 20,
        textAlign: 'center',
    }
});
