// Show all jobs then post to user jobs
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, Alert, Button, StyleSheet } from 'react-native'

const JoinNewJob = props => {

    const [allJobs, setAllJobs] = useState([]);
    const [inMyJobs, setInMyJobs] = useState(false);
    const jobsURL = "http://aff225c7.ngrok.io/jobs"

    //  Get List of All Jobs
     useEffect(() => {
        fetch(jobsURL)
            .then(resp => resp.json())
            .then(jobs => {
                setAllJobs(jobs);
            }).catch(function (error) {
                alert(error)
            })
    }, [])

    // onPress grab ID of job
    // check if that job matches any jobs in my jobs already
    // Post: New Job to My Jobs

    const pressHandler = (id) => {
        if (!props.navigation.state.params.existingJobs.find(job=> job.id === id)) {
            fetch(`http://aff225c7.ngrok.io/volunteer_jobs`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    volunteer_job: { volunteer_id: props.navigation.state.params.currentUser, job_id:id}
                })
            })
            Alert.alert("Thank You For Volunteering!")
        } else {
            Alert.alert("You Already Volunteered For This Job")
        }
    }


    return (

        <>
            <View style={styles.container}>
                <Text style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Baskerville-BoldItalic',}}> Available Positions </Text>
                    <FlatList
                        data={allJobs}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                                <Text style={styles.jobCardText}>Hours: {item.hours}</Text>
                                {/* <Text style={styles.jobCardText}>Company: {`${item.company}`}</Text> */}
                                <Text style={styles.button} onPress={()=> pressHandler(item.id)}>Volunteer</Text>
                            </View>
                        )}
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold'
    },
    item: {
        backgroundColor: '#ddd',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderRadius: 1,
    },
    jobCardText: {
        fontFamily: 'Avenir-MediumOblique',
    },
    button: {
        color: 'white',
        backgroundColor: 'darkturquoise',
        borderColor: 'darkturquoise',
        borderRadius: 12,
        fontSize: 17,
        fontFamily: 'Baskerville-BoldItalic',
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        width: 150,
        alignSelf: 'center'
    }
})

export default JoinNewJob

    // Example of press handler from the Login Page
    // const pressHandler = () => {
    //     let foundUser = user.find((us) => us.name == userInput)
    //     props.navigation.navigate('VolunteerPage', { ...foundUser })
    // }
    // console.log("All JOBS: ")
    // console.log(props.navigation.state.params)
    // console.log(allJobs)
    // console.log("--------------------------")