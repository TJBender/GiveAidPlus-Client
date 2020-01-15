// Child of main container 
// VolunteerPage is now used in place of VolunteerBox and VolunteerTable
// Fetch from jobs to see all jobs in JOBtABLE
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// import VolunteerJob from '../components/VolunteerJob'

const VolunteerPage = props => {

    const [volunteerJobs, setVolunteerJobs] = useState([]);
    const [volunteerHours, setVolunteerHours] = useState(null);
    // const jobURL = "http://3ca6bc6c.ngrok.io/volunteers"

    // Get Volunteer
    const volJobURL = `http://3ca6bc6c.ngrok.io/jobs`
    useEffect(() => {
        fetch(volJobURL)
            .then(resp => resp.json())
            .then(volunteerJobs => {
                setVolunteerJobs(volunteerJobs)
            }).catch(function(error){
                alert(error)
            }) 
    }, [])

    // Get 

    // const totalHours = 0
    // console.log(props.navigation.state.params.id)

    return (

        <>
        <View style={styles.topContainer}>
             <Text> Total Hours </Text>
        </View>
        <View style={styles.bottomContainer}>
            <Text> My Jobs </Text>
            {/* volunteer jobs not actual jobs */}
                <FlatList
                    data={volunteerJobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>Job Title: {item.name}</Text>
                            <Text>Hours: {`${item.hours}`}</Text>
                        </View>
                    )}
                />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    item: {
        backgroundColor: '#ddd',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderRadius: 1,
    }
})

export default VolunteerPage