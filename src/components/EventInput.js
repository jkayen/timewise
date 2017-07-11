// text input and scroll with options and submit to database

import React from 'react';
import { View, Text, Button, TextInput, Picker } from 'react-native';

import addToDatabase from '../database/addToDatabase';
import getActivitiesAlphabetized from '../database/helpers/getActivitiesAlphabetized';

export default class EventInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInput: '',
      activities: []
    }
    this.generateList = this.generateList.bind(this);
  }
  generateList() {
    getActivitiesAlphabetized()
    .then(activitiesList => {
      if (activitiesList) {
        this.setState({activities: activitiesList})
      }
    })
  }
  componentDidMount() {
    this.generateList();
  }
  render() {
    return (
      <View>
        <Text>I am currently...</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={eventInput => this.setState({eventInput})}
          value={this.state.eventInput}
          placeholder= "Enter/Choose an activity."
        />

        <Picker
          selectedValue={this.state.eventInput}
          onValueChange={itemValue => this.setState({eventInput: itemValue})}
        >
          {
            this.state.activities.map((activityName, i) => {
              return (
                <Picker.Item
                  key={i}
                  label={activityName}
                  value={activityName}
                />
              )
            })
          }
        </Picker>

        <Button
          title="Submit"
          onPress={() => addToDatabase(this.state.eventInput)}
        />
      </View>
    )
  }
}
