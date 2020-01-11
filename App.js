import React from 'react';
import NavBar from './components/NavBar' //dis right? ./?
import MainContainer from './containers/MainContainer' //? yah? 
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Login Puhlease</Text>
      <View>
        <Text style={{color:'black'}}> HELP </Text>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

