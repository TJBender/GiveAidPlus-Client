// Show all jobs then post to user jobs
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// import VolunteerJob from '../components/VolunteerJob'

const JoinNewJob = props => {

    // const [volunteerJobs, setVolunteerJobs] = useState([]);
    // const [volunteerHours, setVolunteerHours] = useState(0);
    // const URL = "http://5d938af7.ngrok.io/jobs"

    // useEffect(() => {
    //     fetch(URL)
    //         .then(resp => resp.json())
    //         .then(volunteerJobs => {
    //             setVolunteerJobs(volunteerJobs);
    //         }).catch(function (error) {
    //             alert(error)
    //         })
    // }, [])


    return (

        <>
            <View style={styles.topContainer}>
                <Text> Total Hours </Text>
                {/* show the hours they worked total and show list of all jobs */}
            </View>
            <View style={styles.bottomContainer}>
                <Text> Available Jobs </Text>
                {/* volunteer jobs not actual jobs
                <FlatList
                    data={volunteerJobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>Job Title: {item.name}</Text>
                            <Text>Hours: {item.hours}</Text>
                        </View>
                    )}
                /> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: '#ddd',
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
    }
})

export default JoinNewJob