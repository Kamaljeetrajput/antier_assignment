import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header'
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

export const store = configureStore();


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Header/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
