import React from 'react';
import { View, Text, Button, TextInput, Picker } from 'react-native';

import createNewEvent from '../database/createNewEvent';
import grabAllActivities from '../utilities/grabAllActivities';

export default class EventInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInput: 'Enter a new activity',
      activities: []
    }
    this.submitEvent = this.submitEvent.bind(this);
    this.generateList = this.generateList.bind(this);
  }
  submitEvent() {
    createNewEvent(this.state.eventInput)
  }
  generateList() {
    grabAllActivities()
    .then(activitiesList => {
      this.setState({activities: activitiesList});
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
          onPress={() => createNewEvent(this.state.eventInput)}
        />
      </View>
    )
  }
}
