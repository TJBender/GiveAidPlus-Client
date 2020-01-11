// child of MainContainer
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Login = props => {
    return ( <View style={styles.login}>
        <Text style={styles.text}> This is da login page! </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    login: {
        padding: 10,
        backgroundColor: 'lightpink'
    },
    text: {
        color: 'white'
    }
})