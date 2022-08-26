import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Label({ text, style }) {
  return (
    <View>
      <Text style={style}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
