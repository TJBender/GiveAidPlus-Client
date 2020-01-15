// child of App (export for use)
// sibling to NavBar
// NavBar is a sibling of maincontainer
// get data from app
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import Login from '../components/Login'
// import SignUp from '../components/SignUp'
// import { createStackNavigator } from 'react-navigation-stack';


const MainContainer = props => {

    const pressHandler = () => {
        props.navigation.navigate('Login', {})
    }

    return(
        <View> 
            <Text> WHYYYY </Text>
                <Button title={"Login"} onPress={(e)=> {console.log("alrighty then, login bitch!")}}/>
                <Button title={"Sign Up"} onPress={(e)=> {console.log("signup please?")}}/>
          {/* originally was going to conditionally render login or signup and otherwise render the different containers  */}
            {/* so onPress of the above buttons you'd go to either login or signup */}
            {/* <Login/>
            <SignUp/> */}
        </View>
    )
}

export default MainContainer