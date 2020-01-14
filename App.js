import React, { useState, useEffect} from 'react';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import { StyleSheet, FlatList, Text, View, Button, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  const [volunteers, setVolunteers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const MainNavigator = createStackNavigator({
  //   MainContainer: { screen: MainContainer }
  // });
 
  useEffect(() => {
    fetch("http://572c1358.ngrok.io/volunteers")
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
      {/* <Button title="Click!"></Button> */}
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

