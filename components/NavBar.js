// child of App
// get data as props from app
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NavBar = props => {
    return (
        <View>
            <Text> {props.title} </Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     header: {
//         width: '100%',
//         height: 99,
//         paddingTop: 36,
//         backgroundColor: 'lightsalmon',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     headerTitle: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold'
//     }
// })

export default NavBar