// VolunteerPage is now used in place of VolunteerBox and VolunteerTable

import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import {
    ProgressChart
} from 'react-native-chart-kit';

const VolunteerPage = props => {

    const [volunteerJobs, setVolunteerJobs] = useState([]);
    const [volunteerHours, setVolunteerHours] = useState(null);
    const chartData = {
        labels: ["Hours"],
        data: [0.6]
    }

    // Get Volunteer Jobs
    const volJobURL = `http://e9d0c3c0.ngrok.io/volunteers/${props.navigation.state.params.id}/jobs`
    useEffect(() => {
        fetch(volJobURL)
            .then(resp => resp.json())
            .then(resp => {
                setVolunteerJobs(resp.jobs)
                setVolunteerHours(resp.total_hours)
            }).catch(function(error){
                alert(error)
            }) 
    }, [])

    // console.log(props.navigation.state.params.id)

    return (

        <>
        <View style={styles.topContainer}>
             <Text> Total Hours: {volunteerHours} </Text>
             {/* react native chart kit working */}
                <ProgressChart 
                    data={chartData}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    hideLegend={false}
                />
        </View>
        <View style={styles.bottomContainer}>
            <Text> My Jobs </Text>
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
    }
})

export default VolunteerPage