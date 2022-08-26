import * as React from 'react';
import { Text, View, StyleSheet, Image,Pressable } from 'react-native';

export default function Label({ text, style }) {
 const popUp = () =>{
   alert('ok')
 }
  return (
    <Pressable onPress={popUp}>
      <View style={styles.icon}>
        <Text style={styles.label}>+</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,
    width: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'white',
  },
  label: {
    color: 'white',
  },
});
