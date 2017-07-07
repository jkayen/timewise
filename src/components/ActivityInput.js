import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class ActivityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "tell me..."
    }
  }
  render() {
    return (
      <View>
        <Text>I am currently...</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}
