import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Chip } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Step4(props) {
    const validateStep = () => {
        props.stepHandler(4)
    }
    const passStep = () => {
        props.stepHandler(4)
    }

    // Datepicker data
    const [dateBeg, setDateBeg] = useState(new Date(1598051730000));
    const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
    const [showBeg, setShowBeg] = useState(false);
    const [showEnd, setShowEnd] = useState(false);

    const [isBeginModified, setisBeginModified] = useState(false)
    const [isEndModified, setisEndModified] = useState(false)

    const showDatePickerBeg = () => {
        setShowBeg(true)
    }

    const showDatePickerEnd = () => {
        setShowEnd(true)
    }

    const onChangeDpBeg = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowBeg(false)
        setisBeginModified(true)
        setDateBeg(currentDate)
    }

    const onChangeDpEnd = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowEnd(false)
        setisEndModified(true)
        setDateEnd(currentDate)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>A partir de quand ?</Text>
            <Text style={styles.hintText}>Tu peux renseigner une date de fin afin de recevoir des propositions de colocations encore plus pertinentes.</Text>

            <View style={styles.titleDatePicker}>
                <Text>A partir de</Text>
                <Text>Jusqu'a</Text>
            </View>

            <View style={styles.chipsDatePicker}>
                <Chip
                    icon="calendar"
                    onPress={showDatePickerBeg}>
                    {isBeginModified == false ? "Pas de date" : dateBeg.toLocaleDateString()}
                </Chip>
                <Chip
                    icon="calendar"
                    onPress={showDatePickerEnd}>
                    {isEndModified == false ? "Pas de date" : dateEnd.toLocaleDateString()}
                </Chip>
            </View>
            <View>
                {showBeg && (
                    <DateTimePicker
                        value={dateBeg}
                        mode='date'
                        display="default"
                        onChange={onChangeDpBeg}
                    />

                )}

            </View>
            <View>
                {showEnd && (
                    <DateTimePicker
                        value={dateEnd}
                        mode='date'
                        display="default"
                        onChange={onChangeDpEnd}
                    />

                )}

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


    titleDatePicker: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 30
    },

    chipsDatePicker: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 10
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
