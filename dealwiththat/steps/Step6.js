import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Chip } from 'react-native-paper';


export default function Step6(props) {
    const validateStep = () => {
        props.stepHandler(6)
    }
    const passStep = () => {
        props.stepHandler(6)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Quels sont tes goûts musicaux ?</Text>
            <View style={styles.chips}>
                <Chip textStyle={styles.chipsText} selectedColor='blue' mode='outlined' onPress={() => { }}>   Jazz   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='red' mode='outlined' onPress={() => { }}>   Métal   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Funk   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Rock   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='grey' mode='outlined' onPress={() => { }}>   Rap   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='cyan' mode='outlined' onPress={() => { }}>   Variété française   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='blue' mode='outlined' onPress={() => { }}>   Hip Hop   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='brown' mode='outlined' onPress={() => { }}>   Soul   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='green' mode='outlined' onPress={() => { }}>   Disco   </Chip>
            </View>
            <View style={styles.nextChips}>
                <Chip textStyle={styles.chipsText} selectedColor='red' mode='outlined' onPress={() => { }}>   Country   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='pink' mode='outlined' onPress={() => { }}>   Djoule   </Chip>
                <Chip textStyle={styles.chipsText} selectedColor='brown' mode='outlined' onPress={() => { }}>   Raï   </Chip>
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
