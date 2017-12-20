import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Greeting from "./components/greeting.component";
import Square from "./components/square.component";


export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Greeting firstName='Jian' lastName='Wu'/>
        <Square/>
        <Square/>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
