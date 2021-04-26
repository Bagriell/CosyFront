import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';


export default function Step8(props) {
    const validateStep = () => {
        alert('Congratualtion')
    }
    const passStep = () => {
        alert('Default account created')
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Complète ton profil</Text>

            <View style={{display: 'flex',justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
                <Image
                    style={{ height: 400, width: 400}}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4kVZ9fV-EyNIbLUSt4r4WsJdd4wbm7WY327-9lxRu14-9OnAZtpJPWTksBzEdcTNwbE&usqp=CAU' }}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.touchableValidate} onPress={validateStep}>
                    <Text style={styles.buttonValidate}>Terminer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablePass} onPress={passStep}>
                    <Text style={styles.buttonPass}>Passer (à côté de la chance de sa vie)</Text>
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
    footer: {
        paddingTop: 35
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
