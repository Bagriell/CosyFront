import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, CheckBox, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App({homeStyle, navigation}) {
    return (
        <View style = {homeStyle}>
            <Button
                title="Seeker"
            />
            <Button
                title="Owner"
            />
            <Button
                title="Cherche"
            />
        </View>
    );
}