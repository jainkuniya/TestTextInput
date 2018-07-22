/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  props: Props;
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.surroundText}>React</Text>
          <TextInput style={styles.textInput} placeholder="Some long placeholder" />
          <Text style={styles.surroundText}>Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surroundText: {
    color: 'blue',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'red',
    padding: 0,
  },
});
