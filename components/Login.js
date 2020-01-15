// child of MainContainer
import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Text, StyleSheet, Button, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import image from '../resources/images/loginimg.jpg';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Login = props => {

    const URL = "http://e9d0c3c0.ngrok.io/volunteers"
    const [user, setUser] = useState([])
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setUser(data)
            }).catch(function (err) {
                alert(err);
            })
    }, []);

    const pressHandler = () => {
        let foundUser = user.find((us) => us.name == userInput ) 
        props.navigation.navigate('VolunteerPage', {...foundUser})

    }

    return ( 
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                <View style={styles.loginBox}>    
                    <TextInput
                        placeholder='name...'
                        onChangeText={setUserInput}
                        value={userInput}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='password...'
                    />
            </View> 
            <Text title="Log In" style={styles.button} onPress={() => pressHandler()}>Log In</Text>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBox: {
        height: 50, 
        width: 200,
        borderColor: 'gray', 
        borderWidth: 2,
        marginTop: 200,
        borderStyle: 'dotted',
        borderRadius: 1,
        alignSelf: 'center'
    },
        button: {
            color: 'white',
            backgroundColor: 'darkturquoise',
            borderColor: 'darkturquoise',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 'bold',
            overflow: 'hidden',
            padding: 10,
            textAlign: 'center',
            width: 150,
            alignSelf: 'center'
    },
})

export default Login

// STRETCH GOAL NOTES
/* 
    1. Can I change the button color/text style? (not blue cause ugly!)
*/