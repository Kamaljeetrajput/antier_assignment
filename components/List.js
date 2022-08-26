import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ToastAndroid } from 'react-native';
import Label from './Label';
import CustomButton from './CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, editUserIndex , setUsers} from '../store/user/user.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const UserList = ({ setModalVisible }) => {
  const [allUsers, setAllUsers ] = useState([])
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@users', JSON.stringify(user.data));
      showToast('Data saved successfuly');
    } catch (e) {
      // saving error
    }
  };
   
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@users');
      if(value !== null) {
        setAllUsers(JSON.parse(value));
        dispatch(setUsers(JSON.parse(value)))
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
}

  const clearStorage = async() => {
     await AsyncStorage.clearStorage();
     
  }
  const showToast = (msg) => {
  //  ToastAndroid.showWithGravity;
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  useEffect(() => {
    getData();
  },[])
 
  useEffect(() => {
    setAllUsers(user.data)
     
  },[user]);

  const deleteData = () => {
    clearStorage();
    dispatch(setUsers([]));
    showToast('Data deleted successfuly');
  }

  return (
    <View>
      {allUsers.length === 0 && (
        <Label text={'No records found'} />
      )}
      {allUsers.map((user, index) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.row}>
                <Label text={'Name'} />
                <Label text={user.name} />
              </View>
              <View style={styles.row}>
                <Label text={'Email'} />
                <Label text={user.email} />
              </View>
              <View style={styles.row}>
                <Label text={'Mobile No'} />
                <Label text={user.mobleNumber} />
              </View>
              <View style={styles.row}>
                <Label text={'Department'} />
                <Label text={user.department} />
              </View>
              <View style={styles.btnContainer}>
                <CustomButton
                  style={{ ...styles.btn, width: 90 }}
                  text={'EDIT'}
                  onPress={() => {
                    setModalVisible(true);
                    dispatch(editUserIndex(index));
                  }}
                />
                <CustomButton
                  style={{ ...styles.btn, width: 90, backgroundColor: 'red' }}
                  text={'DELETE'}
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}
                />
              </View>
            </View>
          </View>
        ))} 

      <View style={styles.flex}>
        <CustomButton style={{ ...styles.clr, width: 130 }} onPress={deleteData} text={'CLEAR'} />
        <CustomButton
          onPress={ storeData}
          style={{ ...styles.clr, width: 130, backgroundColor: '#016658' }}
          text={'SAVE'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 170,
  },
  content: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#016658',
    borderRadius: 20,
    fontSize: 15,
    marginHorizontal: 10,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 17,
    flexDirection: 'row',
  },
  clr: {
    backgroundColor: 'red',
    fontSize: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    // justifyContent: 'flex-end',
  },
});

export default UserList;
