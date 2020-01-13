// child of MainContainer
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native'

const Login = props => {

    return ( <View style={styles.login}>
        {/* 
            these buttons should be in main container. 
            the code here should be the ACTUAL login 'form'
        */}
        <TextInput
            placeholder='name'
        />
        
    </View>
    )
}

const styles = StyleSheet.create({
    login: {
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 10
    },
    text: {
        color: 'white'
    }
})

export default Login

// STRETCH GOAL NOTES
/* 
    1. Can I change the button color/text style? (not blue cause ugly!)
*/