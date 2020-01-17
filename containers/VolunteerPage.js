// Child of main container 
// VolunteerPage is now used in place of VolunteerBox and VolunteerTable
// Fetch from jobs to see all jobs in JOBtABLE
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import {
    ProgressChart
} from 'react-native-chart-kit';

const VolunteerPage = props => {

    const [volunteerJobs, setVolunteerJobs] = useState([]);
    const [volunteerHours, setVolunteerHours] = useState(null);
    const [inMyJobs, setInMyJobs] = useState(false);
    const chartData = {
        labels: ["Goal", "Jobs", "Fun"],
        data: [0.42, 0.63, 0.81]
    }



    // Get Volunteer Jobs
    const volJobURL = `http://1dee64e5.ngrok.io/volunteers/${props.navigation.state.params.id}/jobs`
    useEffect(() => {
        fetch(volJobURL)
            .then(resp => resp.json())
            .then(resp => {
                setVolunteerJobs(resp.jobs)
                // setVolunteerHours(resp.total_hours)
            }).catch(function(error){
                alert(error)
            }) 
    },[])

    useEffect(() => {
        fetch(volJobURL)
            .then(resp => resp.json())
            .then(resp => {
                setVolunteerJobs(resp.jobs)
                // setVolunteerHours(resp.total_hours)
            }).catch(function (error) {
                alert(error)
            })
    }, [inMyJobs])


    const pressHandler = () => {
        props.navigation.navigate('JoinNewJob', { existingJobs: [...volunteerJobs], currentUser: props.navigation.state.params.id, inMyJobs: setInMyJobs })

    }

    return (

        <>
        <View style={styles.topContainer}>
             {/* <Text> Total Hours: {volunteerHours} </Text> */}
                <ProgressChart 
                    data={chartData}
                    width={Dimensions.get('window').width}
                    height={Dimensions.get('window').height - 500}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(240, 200, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    hideLegend={false}
                />
        </View>
        <View style={styles.bottomContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Baskerville-BoldItalic' }}> {props.navigation.state.params.name}'s Jobs </Text>
                <FlatList
                    data={volunteerJobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                            <Text style={styles.jobCardText}>Hours: {`${item.hours}`}</Text>
                            <Text style={styles.addJobButton}> Complete! </Text>
                        </View>
                    )}
                />
                <Text style={styles.button} onPress={()=> pressHandler()}> Available Positions</Text>
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
        height: 412,
        backgroundColor: 'gold',
        paddingBottom: 30,
        paddingTop:  5,
    },
    jobCardText: {
        fontFamily: 'Avenir-MediumOblique',
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
    button: {
        color: 'white',
        backgroundColor: 'darkturquoise',
        borderColor: 'darkturquoise',
        borderRadius: 12,
        fontSize: 16,
        fontFamily: 'Baskerville-BoldItalic',
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        width: 170,
        alignSelf: 'center'
    },
    addJobButton: {
        color: 'white',
        backgroundColor: 'darkturquoise',
        borderColor: 'darkturquoise',
        borderRadius: 12,
        fontSize: 16,
        fontFamily: 'Baskerville-BoldItalic',
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        width: 110,
        alignSelf: 'center',
    }
})

export default VolunteerPage