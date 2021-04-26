import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Checkbox } from 'react-native-paper';


export default function Step3(props) {

    const [nbBed, setnbBed] = React.useState(0)
    const [checked, setChecked] = React.useState(false);


    const validateStep = () => {
        props.stepHandler(3)
    }
    const passStep = () => {
        props.stepHandler(3)
    }

    const decreaseBed = () => {
        if (nbBed > 0) {
            setnbBed(nbBed - 1)
        }
    }

    const increaseBed = () => {
        if (nbBed < 10) {
            setnbBed(nbBed + 1)
        }
    }

    const renderPerson = () => {
        return (
            <View>
                <TouchableOpacity>
                    <Text style={styles.person}>Personne 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.person}>Personne 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.person}>Personne 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.person}>Personne 4</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Cherches-tu seul ou à plusieurs ?</Text>
            <Text style={styles.hintText}>Si tu cherches à emmenager accompagné de plusieurs personnes(amis, famille...), tu as juste à renseigner leur email ou leur pseudo si elles sont déjà inscrites !</Text>
            {renderPerson()}


            <View style={styles.bedSelector}>
                <IconButton
                    icon='minus'
                    mode='contained'
                    color='#FFA07A'
                    //size='28'
                    onPress={decreaseBed}
                />
                <Text style={{paddingTop: 8}} >Soit</Text>
                <Text style={{color:"#FFA07A", paddingTop: 8}}>{nbBed}</Text>
                <Text style={{paddingTop: 8}}>chambres</Text>
                <IconButton
                    icon='plus'
                    mode='contained'
                    color='#FFA07A'
                    //size='28'
                    onPress={increaseBed}
                />
            </View>

            <TouchableOpacity style={styles.checkbox} onPress={() => {setChecked(!checked)}}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color="#FFA07A"
                />
                <Text style={{paddingTop: 9, paddingLeft: 10}}>Recherche un logement vide</Text>
            </TouchableOpacity>

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

    bedSelector: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 30
    },
    person: {
        marginTop: 20,
        fontSize: 15
    },
    inputPerson: {
        height: 50,
        width: 100,
        backgroundColor: '#FFA07A',
        borderWidth: 5
    },


    checkbox: {
        flexDirection: 'row',
        display: 'flex',
        marginTop: 50
    },

    footer: {
        paddingTop: 50
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
