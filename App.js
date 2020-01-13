import React, { useState, useEffect} from 'react';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import { StyleSheet, SafeAreaView, FlatList, Text, View, ActivityIndicator, Dimensions} from 'react-native';

export default function App() {
  const [volunteers, setVolunteers] = useState([]);
  // const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("http://1b3ac74a.ngrok.io/volunteers")
      .then(resp => resp.json())
      .then(data => {
        setVolunteers(data);
      }).catch(function(error){
        alert(error)
      })
  }, []) //if you increment page then the page variable would go in the array argument here.

  return (
    // this should be the login page imported
    <SafeAreaView style={styles.container}> 
      <FlatList
        data={volunteers}
        keyExtractor={(item) => item.url }
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Password: {item.password}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

