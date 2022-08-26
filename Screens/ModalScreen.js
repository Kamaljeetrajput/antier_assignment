import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import TextInput from '../components/Textinput';
import { useSelector } from 'react-redux';

const ModalScreen = ({ Visible, onPress, setModalVisible }) => {
  const user = useSelector((state) => state.user);
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    if (user.editIndex !== '') {
      setInitialValues(user.data[user.editIndex]);
    }
  }, [user.data, user.editIndex]);

  return (
    <Modal
      style={{ height: 500, width: 300 }}
      animationType="slide"
      transparent={true}
      visible={Visible}
      onRequestClose={() => console.log('calledd')}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable onPress={onPress}>
            <View style={styles.close}>
              <Text style={{ color: 'red' }}>X</Text>
            </View>
          </Pressable>
          <TextInput
            setModalVisible={setModalVisible}
            initialValues={initialValues}
            index={user.editIndex}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 500,
  },
  close: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default ModalScreen;
