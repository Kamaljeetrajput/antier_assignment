import React, { useState } from 'react';
import {  StyleSheet, Text, Pressable, View } from 'react-native';
import UserList from './List';
import ModalScreen from '../Screens/ModalScreen'

const Header = () => {
   const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
     <ModalScreen
      onPress={() => setModalVisible(false)}
      Visible={modalVisible}
      setModalVisible={setModalVisible}
       
     />
      
      <View style={styles.bckGround}>
        <Pressable onPress={() =>  setModalVisible(true)}>
          <View style={styles.icon}>
            <Text style={styles.label}>+</Text>
          </View>
        </Pressable>
      </View>

      <View>
        <UserList setModalVisible={setModalVisible} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1
  },

  icon: {
    borderWidth: 1,
    width: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'white',
    zIndex: 111111,
    margin:12,
  },
  bckGround:{
    alignItems:"flex-end",
    backgroundColor:"#016658",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,

  },
  label: {
    color: 'white',
  },
});

export default Header;
