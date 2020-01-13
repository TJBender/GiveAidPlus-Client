// child of MainContainer
// has child ./components/VolunteerJob

// table should be in FlatList format and it renders the VolunteerJob(card)
/*  QUESTIONS:
    1. Is flatlist used in PLACE of view?
    2. Can i use conditionals in react native?
*/       
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const VolunteerTable = props => {
    return (
        <View> 
            <Text> Volunteer Table </Text>
            <FlatList>
                
            </FlatList>
        </View>
    )
}