import React from 'react';
import {Button} from "react-native";


export default class Square extends React.Component {
  onClick() {
    console.log("cliking buttons");
  }
  render() {
    return (
        <Button title={""} onPress={this.onClick.bind(this)}>
        </Button>
    );

  }
}