// child of MainContainer
import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'

const SignUp = props => {
    return (
        <View style={styles.signup}>
            {/* 
                these buttons should be in main container. 
                the code here should be the ACTUAL signup 'form'
            */}
            <Button title={"Sign Up"} onPress={()=>console.log("trying to sign up here??")}> </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    signup: {
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 10
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