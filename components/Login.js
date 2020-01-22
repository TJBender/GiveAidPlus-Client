// child of MainContainer
import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Text, StyleSheet, Button, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import image from '../resources/images/loginimg.jpg';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Login = props => {

    const URL = "http://a9a7e341.ngrok.io/volunteers"
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
        props.navigation.navigate('Home', {...foundUser})
    }

    return ( 
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                <Text title="giveaid+" style={styles.titleStyle}>Gif Back</Text>
                <View style={styles.loginBox}>    
                    <TextInput
                        placeholder='Name...'
                        onChangeText={setUserInput}
                        value={userInput}
                        style={{padding: 5}}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password...'
                        style={{padding: 5}}
                        placeholderStyle={{}}
                    />
            </View> 
            <Text title="Log In" style={styles.button} onPress={() => pressHandler()}>Log In</Text>
            <Text title="A great way to give" style={styles.giveStyle}>You GIVE - We GIF</Text>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    loginBox: {
        height: 70, 
        width: 200,
        borderColor: 'gray', 
        borderWidth: 2,
        marginTop: 200,
        marginBottom: 20,
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
            fontFamily: 'Baskerville-BoldItalic',
            fontWeight: 'bold',
            overflow: 'hidden',
            padding: 10,
            textAlign: 'center',
            width: 150,
            alignSelf: 'center'
    },
    titleStyle: {
        position: 'absolute',
        marginTop: 130,
        alignSelf: 'center',
        fontFamily: 'Georgia-BoldItalic',
        fontSize:  49,
        color: 'white',
    },
    giveStyle: {
        position: 'absolute',
        marginVertical: 350,
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Georgia-BoldItalic'
    }
})

export default Login

// STRETCH GOAL NOTES
/* 
    1. Can I change the button color/text style? (not blue cause ugly!)
*/