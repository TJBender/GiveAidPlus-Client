// child of MainContainer
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'
// import MainContainer from '../containers/MainContainer'
const Login = props => {

    const URL = "http://3ca6bc6c.ngrok.io/volunteers"
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
    <View style={styles.loginContainer}>
        <TextInput
            placeholder='name...'
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setUserInput}
            value={userInput}
        />
        <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            secureTextEntry={true}
            placeholder='password...'
        />
        <Button title="Log In" onPress={()=> pressHandler() }></Button>
    </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login

// STRETCH GOAL NOTES
/* 
    1. Can I change the button color/text style? (not blue cause ugly!)
*/