import React from 'react';
import {StyleSheet, View} from "react-native";
import { Button } from "react-native-elements";


export default class Square extends React.Component {


  render() {
    return (
            <Button title={this.props.value}
                    onPress={this.props.onClick}
                    buttonStyle={styles.square}
                    containerViewStyle={styles.view}
                    textStyle={styles.text}
            >
            </Button>
    );
  };
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        flex: 0,
        borderWidth: 1,
        borderColor: '#999',
        marginLeft: 0,
        marginRight: 0,
    },

    view: {
        marginLeft: 0,
        marginRight: 0,
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    }
});