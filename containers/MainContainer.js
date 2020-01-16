// child of App (export for use)
// sibling to NavBar
// NavBar is a sibling of maincontainer
// get data from app
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import Login from '../components/Login'
// import SignUp from '../components/SignUp'
// import { createStackNavigator } from 'react-navigation-stack';

// !! NO LONGER USING THIS COMPONENT CAUSE REACT NATIVE DOESNT DO COMPONENT TREES LOLOLOLOLOLOLOLOL .... !!
const MainContainer = props => {

    const pressHandler = () => {
        props.navigation.navigate('Login', {})
    }

    return(
        <View> 
            <Text> WHYYYY </Text>
                <Button title={"Login"} onPress={(e)=> {console.log("alrighty then, login!")}}/>
                <Button title={"Sign Up"} onPress={(e)=> {console.log("signup please?")}}/>
        </View>
    )
}

export default MainContainer