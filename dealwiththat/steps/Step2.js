import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Step2(props) {
    const validateStep = () => {
        props.stepHandler(2)
    }
    const passStep = () => {
        props.stepHandler(2)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Quel est ton budget ?</Text>
            <Text style={styles.hintText}>Tu peux changer ton budget à tout moment</Text>
            <View style={styles.Inputs}>
                <TextInput style={styles.textInput}
                    keyboardType="numeric"
                    placeholder=" Min"
                />
                <TextInput style={styles.textInput}
                    keyboardType="numeric"
                    placeholder=" Max" />
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
    hintText: {
        color: 'grey',
        marginTop: 25
    },
    textInput: {
        flexDirection: 'row',
        height: 50,
        width: 100,
        borderWidth: 1,
    },
    footer: {
        paddingTop: 300
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
    Inputs : {
        paddingTop: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex'
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