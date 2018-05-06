import React, { Component } from 'react';

import {
  StyleSheet, View,
  ScrollView, Text
} from 'react-native';

import {
  FormLabel, FormInput,
  Button, CheckBox,
  FormValidationMessage, Header,
  Icon, List, ListItem
} from 'react-native-elements';

import { Col, Row, Grid } from "react-native-easy-grid";

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
  },
  {
    title: 'Health',
    icon: 'local-hospital',
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
              checked={false}>
            </CheckBox>
          </View>

          <View style={styles.element} hidden={true}>
            <FormLabel containerStyle={{ marginBottom: 15 }}>Category</FormLabel>

            <Button
              title="Choose a category"
              buttonStyle={{
                width: 230,
                backgroundColor: "rgba(92, 99,216, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              leftIcon={{ name: 'list', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
              onPress={() => this.setState({visible: true})}
            />

            <Grid>
              <Col alignItems="center">
                <Icon
                  reverse
                  name='food'
                  type='material-community'
                  color='#517fa4'
                />
              </Col>
              <Col alignItems="center">
                <Icon
                  reverse
                  name='flight-takeoff'
                  type='material'
                  color='#517fa4'
                />
              </Col>
              <Col alignItems="center">
                <Icon
                  reverse
                  name='local-hospital'
                  type='material'
                  color='#517fa4'
                />
              </Col>
              <Col alignItems="center"></Col>
              <Col alignItems="center"></Col>
            </Grid>
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
            <Text style={{paddingTop: 20, fontSize: 16}}>Choose a category</Text>
            <List containerStyle={{marginBottom: 10, width: '100%'}}>
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
    marginBottom: 20
  },
  slider: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  }
});
