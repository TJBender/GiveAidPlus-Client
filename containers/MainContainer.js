// child of App (export for use)
// sibling to NavBar
// NavBar is a sibling of maincontainer
// get data from app
import React from 'react';
import { View, Text, Button } from 'react-native';
// import Login from '../components/Login'
// import SignUp from '../components/SignUp'


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