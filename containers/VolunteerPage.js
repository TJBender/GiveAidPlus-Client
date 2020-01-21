// Child of main container 
// VolunteerPage is now used in place of VolunteerBox and VolunteerTable
// Fetch from jobs to see all jobs in JOBtABLE
import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, FlatList, StyleSheet, Image, Button, Dimensions } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Gif from '../containers/Gif'

const VolunteerPage = props => {

    const [volunteerJobs, setVolunteerJobs] = useState([]);
    const [volunteerHours, setVolunteerHours] = useState(33);
    const [inMyJobs, setInMyJobs] = useState(false);
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
        props.navigation.navigate('Add Job', { existingJobs: [...volunteerJobs], currentUser: props.navigation.state.params.id, inMyJobs: setInMyJobs, totalHours: volunteerHours, completedJobs: [...completedJobs].map((job)=> job.id) })
    }

    let randomGifs = [
        'https://media3.giphy.com/media/tJMHfE1mF0I0jU4h9s/source.gif', // sassy 'very impressed'
        'https://media.giphy.com/media/3otPoUkg3hBxQKRJ7y/giphy.gif', // obama thank you 
        'https://media3.giphy.com/media/QaXcpBEQRfD9pR3zk5/giphy.gif', // elf congratulations
        'https://media.giphy.com/media/1kJXHfUaBRQPn3gL55/giphy.gif', // excited clapping
        'http://31.media.tumblr.com/88ee2a56006928ef66128912fec100f1/tumblr_n1cq2oeUeD1t77ydgo1_400.gif', // 'the office : duane' slow clap
        'https://media1.tenor.com/images/da585b99b6ea9458887bcbbea02582e6/tenor.gif?itemid=13109295', //obama mic drop 
        'https://media.giphy.com/media/QAsBwSjx9zVKoGp9nr/giphy.gif', // Keanu Reeves kiss
        'https://media1.tenor.com/images/f29bd274b1239980be41c3f146e0e4e7/tenor.gif?itemid=5154817', // dog smile "THANK YOU"
        'https://media2.giphy.com/media/NjjvZdmoVhgrK/source.gif', // guy laugh and point
        'https://media1.giphy.com/media/1acaDLnSo4QdG/source.gif',  // jack black smile
        'https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif' // shocked open-mouth clapping boy
    ]
    let gif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    const gifPressView = () => {
        props.navigation.navigate('Thank You!')
    }

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

    const filterCompleteJobs = () => {
        let filterJobs = [...volunteerJobs].filter((job) => {
            return !completedJobs.find((completeJob) => job.id === completeJob.id)
        })
        return filterJobs
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
                    data={filterCompleteJobs()}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.jobCompanyText}>Company: {item.company_name}</Text>
                            <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                            <Text style={styles.jobCardText}>Hours: {`${item.hours}`}</Text>
                            <Text style={styles.addJobButton} onPress={() => addCompletedJob(item.id, item.hours)}> Complete!</Text>
                        </View>
                    )}
                />

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Baskerville-BoldItalic', paddingBottom: 5 }}> Completed Jobs</Text>
                <FlatList
                    data={completedJobs}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.jobCompanyText}>Company: {item.company_name}</Text>
                            <Text style={styles.jobCardText}>Job Title: {item.name}</Text>
                            <Text style={styles.jobCardText}>Status: Completed</Text>
                            <Text style={styles.addJobButton} onPress={() => gifPressView() }> Get Giffed</Text>

                        </View>
                    )}
                />

                <Text style={styles.button} onPress={()=> pressHandler()}> Available Positions</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
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
    jobCompanyText: {
        fontFamily: 'Avenir-HeavyOblique',
        fontSize: 14
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