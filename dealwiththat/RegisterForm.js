import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import Step1 from './steps/Step1.js'
import Step2 from './steps/Step2.js'
import Step3 from './steps/Step3.js'
import Step4 from './steps/Step4.js'
import Step5 from './steps/Step5.js'
import Step6 from './steps/Step6.js'
import Step7 from './steps/Step7.js'
import Step8 from './steps/Step8.js'

const labels = [
    "Lieu", "Budget", "Groupe",
    "Date", "Description", "Musique",
    "Sports", "Profil"
];

const hidden_labels = [
    "", "", "",
    "", "", "",
    "", ""
]

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
}


export default function RegisterForm(props) {
    const [currentPosition, setcurrentPosition] = React.useState(0)
    const [labels, setLabels] = React.useState(hidden_labels)
    const onPageChange = (position) => {
        setcurrentPosition(position);
    }
    const renderStep = () => {
        switch (currentPosition) {
            case 0:
                return <Step1 stepHandler={setcurrentPosition} ></Step1>
            case 1:
                return <Step2 stepHandler={setcurrentPosition}></Step2>
            case 2:
                return <Step3 stepHandler={setcurrentPosition}></Step3>
            case 3:
                return <Step4 stepHandler={setcurrentPosition}></Step4>
            case 4:
                return <Step5 stepHandler={setcurrentPosition}></Step5>
            case 5:
                return <Step6 stepHandler={setcurrentPosition}></Step6>
            case 6:
                return <Step7 stepHandler={setcurrentPosition}></Step7>
            case 7:
                return <Step8 stepHandler={setcurrentPosition}></Step8>
        }
    }
    const render = () => {
        return (
            <View>
                <View style={styles.container}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                        labels={hidden_labels}
                        stepCount="8" />
                </View>
                <View>
                    {renderStep()}
                </View>
            </View>
        )
    }
    
    return (
        render()
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});
