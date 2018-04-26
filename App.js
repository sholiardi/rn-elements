import React, { Component } from 'react';

import {
  StyleSheet, View,
  ScrollView, Text
} from 'react-native';

import {
  FormLabel, FormInput,
  Button, CheckBox,
  FormValidationMessage, Header,
  Icon, List,
  ListItem
} from 'react-native-elements';

import SlidingUpPanel from 'rn-sliding-up-panel';

const list = [
  {
    title: 'Food',
    icon: 'food',
    type: 'material-community'
  },
  {
    title: 'Travel',
    icon: 'flight-takeoff',
    type: 'material'
  }
]

export default class App extends Component<Props> {

  state = {
    visible: false
  }

  render() {

    return (
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>

          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Transaction', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }} />

          <FormLabel>Type</FormLabel>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
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
          </View>

          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <FormLabel containerStyle={{ marginBottom: 15 }}>Category</FormLabel>
            <Button
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              iconRight={{ name: 'list', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
              onPress={() => this.setState({visible: true})}
            />
          </View>

          <FormLabel>Name</FormLabel>
          <FormInput placeholder="Your transaction name" />
          <FormValidationMessage containerStyle={styles.element}>{'This field is required'}</FormValidationMessage>

          <FormLabel>Amount</FormLabel>
          <FormInput placeholder="Your transaction amount" />
          <FormValidationMessage containerStyle={styles.element}>{'This field is required'}</FormValidationMessage>

          <Button title="Submit" />

        </View>

        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.slider}>

            <List containerStyle={{marginBottom: 20, width: '100%'}}>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon, type: item.type}}
                  onPress={() => this.setState({visible: false})}
                />
              ))
            }
            </List>

          </View>
        </SlidingUpPanel>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  element: {
    marginBottom: 30
  },
  slider: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});
