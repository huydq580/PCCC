/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tab from './src/router/Navigation'

export default class App extends Component<{}> {
  render() {
    return (
        <Tab/>
    );
  }
}

