// Child of main container 
// VolunteerPage is now used in place of VolunteerBox and VolunteerTable
// Fetch from jobs to see all jobs in JOBtABLE
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import ImageView from 'react-native-image-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const VolunteerPage = props => {

    const [volunteerJobs, setVolunteerJobs] = useState([]);
    const [volunteerHours, setVolunteerHours] = useState(33);
    const [inMyJobs, setInMyJobs] = useState(false);
    // const [isImageViewVisible, setIsImageViewVisible] = useState(true)
    const [completedJobs, setCompletedJobs] = useState([])
    

    
    // Get Volunteer Jobs:
    const volJobURL = `http://6718b0e3.ngrok.io/volunteers/${props.navigation.state.params.id}/jobs`
    useEffect(() => {
        fetch(volJobURL)
            .then(resp => resp.json())
            .then(resp => {
                setVolunteerJobs(resp.jobs)
                // took hours out because i am holding it in state for presentation day
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

    // Press Handler For 'Available Positions' Button:
    const pressHandler = () => {
        props.navigation.navigate('JoinNewJob', { existingJobs: [...volunteerJobs], currentUser: props.navigation.state.params.id, inMyJobs: setInMyJobs, totalHours: volunteerHours })
    }

    const gifPressView = () => {
        props.navigation.navigate('Thank You!')
    }
    // Shows Total Hours Volunteer Has Worked: 
    // const animatedHours = (hours) => {
    //     if (hours >= 100) {
    //         setVolunteerHours(100)
    //     } else if (hours <= 0 ) {
    //         setVolunteerHours(0)
    //     } else {
    //         setVolunteerHours(hours)
    //     }
    // }

    const addCompletedJob = (id, hour) => {
        
        let completedJob = volunteerJobs.find(job=> 
                job.id === id
            )

        let uncompletedJobs = volunteerJobs.filter(job => 
                job.id !== id
            )
        setVolunteerJobs(uncompletedJobs)
        setCompletedJobs(prev => [...prev,completedJob])
        setVolunteerHours(volunteerHours + hour)
    }



    return (
        <>
        <View style={styles.topContainer}>
         {/* Animated Cirle shows total hours volunteered */}
                <AnimatedCircularProgress
                    size={220}
                    width={27}
                    fill={volunteerHours}
                    duration={800}
                    tintColor="gold"
                    onAnimationComplete={() => console.log('Animation Babeeeyy')}
                    backgroundColor="grey">
                   { 
                        () => (
                            <Text style={styles.animatedNumbers}> 
                                { volunteerHours } hours
                            </Text>
                        )
                   }
                </AnimatedCircularProgress>

        </View>
        <View style={styles.bottomContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Baskerville-BoldItalic', paddingBottom: 5 }}> {props.navigation.state.params.name}'s Jobs </Text>
                <FlatList
                    data={volunteerJobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                            <Text style={styles.jobCardText}>Hours: {`${item.hours}`}</Text>
                            {/* WTF?! Work on this part after lunch-- display gif! */}
                            <Text style={styles.addJobButton} onPress={() => addCompletedJob(item.id, item.hours)}> Complete!</Text>
                        </View>
                    )}
                />

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Baskerville-BoldItalic', paddingBottom: 5 }}> Completed Jobs</Text>
                <FlatList
                    data={completedJobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                            <Text style={styles.jobCardText}>Hours: {`${item.hours}`}</Text>
                            <Text style={styles.addJobButton} onPress={() => gifPressView()}> Get Giffed</Text>
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
        paddingLeft: 70,
        paddingTop: 30,
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
    },
    animatedNumbers: {
        fontWeight: 'bold',
        fontFamily: 'Baskerville-BoldItalic',
        fontSize: 35,
        color: 'grey'
    }
})

export default VolunteerPage