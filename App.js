import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <FormLabel>Type</FormLabel>
        <CheckBox
          title="Income"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={true}>
        </CheckBox>
        <CheckBox
          title="Expense"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={false}
          containerStyle={styles.element}>
        </CheckBox>

        <FormLabel>Name</FormLabel>
        <FormInput
          containerStyle={styles.element}
          placeholder="Your transaction name" />

        <FormLabel>Amount</FormLabel>
        <FormInput
          containerStyle={styles.element}
          placeholder="Your transaction amount" />

        <Button title="Submit" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  element: {
    marginBottom: 30
  }
});
