import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Header = () => {
    return(
    <View style={styles.header}> 
        {/* Icon for the Menu */}
        <View> 
            <Text style={styles.headerText}>Gif Back</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'darkturquoise',
        letterSpacing: 1,
        fontFamily: 'Baskerville-BoldItalic'
    }
})

export default Header
