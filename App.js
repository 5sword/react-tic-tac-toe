import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game from "./components/game.component";


export default class App extends React.Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Game/>
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
