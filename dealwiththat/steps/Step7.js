import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Chip } from 'react-native-paper';

export default function Step7(props) {
    const validateStep = () => {
        props.stepHandler(7)
    }
    const passStep = () => {
        props.stepHandler(7)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Quels sont tes sports préférés?</Text>

            <View style={styles.chips}>
                <Chip textStyle={styles.chipsText} selectedColor='blue' mode='outlined' onPress={() => { }}>   Foot   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='red' mode='outlined' onPress={() => { }}>   Tennis   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Ski   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Rugby   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='grey' mode='outlined' onPress={() => { }}>   Danse   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='cyan' mode='outlined' onPress={() => { }}>   Tennis de table   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='blue' mode='outlined' onPress={() => { }}>   Basketball   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='brown' mode='outlined' onPress={() => { }}>   Hockey   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Gym   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='red' mode='outlined' onPress={() => { }}>   Golf   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='pink' mode='outlined' onPress={() => { }}>   Musculation   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='brown' mode='outlined' onPress={() => { }}>   Equitation   </Chip>
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
    chips: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 40,
    },

    chipsText: {
        fontWeight: 'bold'
    },
    nextChips: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 50,
    },

    footer: {
        paddingTop: 150
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