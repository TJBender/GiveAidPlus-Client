import React, { useState, useEffect, Fragment} from 'react';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import { StyleSheet, FlatList, Text, View, Button, SafeAreaView } from 'react-native';
import Navigator from './routes/home'

export default function App() {
  // const [loading, setLoading] = useState(true);

  return (
    // this should be the login page imported
    <>
      <Navigator/>
    </>
  );

}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center'
  }
});

// THIS WILL BE IN VOLUNTEERTABLE AND COMPANYTABLE as: JOBS or VOLUNTEERS
// FETCH FROM APP.js PASSES DOWN EVERY-FIGGIN-WHERE!

/* <FlatList
        data={volunteers}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Password: {item.password}</Text>
          </View>
        )}
      /> */

  // useEffect(() => {
  //   fetch("http://572c1358.ngrok.io/volunteers")
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setVolunteers(data);
  //     }).catch(function(error){
  //       alert(error)
  //     })
  // }, []) //if you increment page then the page variable would go in the array argument here.
