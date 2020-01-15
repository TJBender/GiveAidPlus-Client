// child of MainContainer
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'

const SignUp = props => {
    return (
        <View>
            {/* 
                these buttons should be in main container. 
                the code here should be the ACTUAL signup 'form'
            */}
            <Text onPress={() => console.log("trying to sign up here??")}>Sign Up</Text>
            <TextInput
                placeholder='name...'
            />
            <TextInput
                placeholder='password...'
            />
            <TextInput
                placeholder='confirm password...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer: {
        padding: 100,
        width: 300,
        maxWidth: '80%',
        backgroundColor: 'lightsalmon',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.36 //0.26 is 'better' but keep this for now
    },
    text: {
        color: 'white'
    }
})

export default SignUp

// STRETCH GOAL NOTES
/*
    1. Can I change the button color/text style? (not blue cause ugly!)
*/