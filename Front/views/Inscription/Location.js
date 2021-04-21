import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Location({navigation})
{
    return(
        <View>
            <Text>Où cherches-tu une colocation ?

            Tu peux renseigner une ville, un quartier, un code postal, et plus.
            </Text>
            <TextInput
                title = "Location"
                placeholder="Location...">    
            </TextInput>
        </View>
    )
}