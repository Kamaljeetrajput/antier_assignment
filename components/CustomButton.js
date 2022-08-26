import * as React from 'react';
import { Text,  StyleSheet, TouchableOpacity } from 'react-native';

export default function CustomButton({ text, style, onPress }) {
  
  return (
    <TouchableOpacity
        onPress={onPress} 
        style={[styles.container,style]}
      >
      <Text  style={styles.submit}>{text}</Text>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#016658",
    borderRadius:20,
    height:30
  },
  submit: {
   color:"white",
   alignSelf:"center",
   margin:7,
   alignItems:'center',
   
  },
});
