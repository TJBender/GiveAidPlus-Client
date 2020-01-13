// child of App (export for use)
// sibling to NavBar
// NavBar is a sibling of maincontainer
import React from 'react';
import { View, Text, Button } from 'react-native';
import Login from '../components/Login'
import SignUp from '../components/SignUp'
//  WHERE DO I FETCH?!!?!??!?!?!?! 

const MainContainer = props => {
    return(
        <View> 
            {/* These should be buttons --> then have functions for the routes
             to conditionally render either/or  */}
             <Button title={"Login"} onPress={(e)=> {console.log("alrighty then, login bitch!")}}/>
             <Button title={"Sign Up"} onPress={(e)=> {console.log("signup please?")}}/>
            {/* <Login/>
            <SignUp/> */}
        </View>
    )
}

export default MainContainer