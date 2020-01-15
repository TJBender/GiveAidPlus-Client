// For volunteer to view all the active jobs they have. A 'job card'
// STRECH GOAL: add VolunteerJobSpec to conditionally render more info
// Child of './containers/VolunteerTable' ?
import React, { Fragment} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const VolunteerJob = props => {

//   get props data from parent volunteer page

    return (
        // This is the JOB CARD 
        <>
            <View>
                <Text> Volunteer Job </Text>
            </View>
        </>
    )
}

export default VolunteerJob