import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';


export default function Step1(props) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const validateStep = () => {
        props.stepHandler(1)
    }
    const passStep = () => {
        props.stepHandler(1)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Où cherches-tu une colocation ?</Text>
            <Text style={styles.hintText}>Tu peux renseigner une ville, un quartier, un code postal...</Text>
            <Searchbar
                style={styles.textInput}
                placeholder="Position actuelle"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
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
        flex: 1,
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
        height: 50,
        width: 300,
        borderWidth: 1,
        marginTop: 55,
        justifyContent: 'center'
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