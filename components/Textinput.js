import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Label from './Label';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  createUser,
  updateUser,
  editUserIndex,
} from '../store/user/user.action';

const TextInputForm = ({ setModalVisible, initialValues = {}, index }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: initialValues,
  });

  setInitialValues = () => {
    for (let key in initialValues) {
      setValue(key, initialValues[key]);
    }
  };

  useEffect(() => {
    setInitialValues();
  }, [initialValues]);

  const onSubmit = async (data) => {
    if (Object.keys(initialValues).length === 0) {
      dispatch(createUser(data));
    } else {
      dispatch(updateUser(index, data));
    }
    setModalVisible(false);
    dispatch(editUserIndex(''));
  };

  return (
    <View style={styles.container}>
      <Label style={styles.label} text={'Name'} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            placeholder="Please enter Name"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        name="name"
        rules={{ required: true }}
      />
      {errors?.name?.type === 'required' && (
        <Label style={styles.labelTxt} text={'Name is required'} />
      )}
      <Label style={styles.label} text={'Email'} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            id="email"
            placeholder="Please enter Email"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors?.email?.type === 'required' && (
        <Label style={styles.labelTxt} text={'Email is required'} />
      )}
      <Label style={styles.label} text={'Department'} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            id="department"
            value={value}
            onChangeText={(value) => onChange(value)}
            placeholder="Please enter Department name"
          />
        )}
        name="department"
        rules={{ required: true }}
      />
      {errors?.department?.type === 'required' && (
        <Label style={styles.labelTxt} text={'Department is required'} />
      )}

      <Label style={styles.label} text={'Mobile Number'} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            id="mobleNumber"
            style={styles.input}
            onBlur={onBlur}
            value={value}
            onChangeText={(value) => onChange(value)}
            placeholder="Please enter Mobile Number"
          />
        )}
        name="mobleNumber"
        rules={{ required: true }}
      />
      {errors?.mobleNumber?.type === 'required' && (
        <Label style={styles.labelTxt} text={'Mobile Number is required'} />
      )}
      <View style={styles.cstBtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Label style={styles.txt} text={'Submit'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: 'grey',
    marginTop: 12,
  },
  input: {
    height: 40,
    marginTop: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: 'grey',
    color: 'grey',
  },
  cstBtn: {
    marginTop: 25,
  },
  labelTxt: {
    color: 'red',
    fontSize: 10,
  },
  button: {
    backgroundColor: '#016658',
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 30,
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
  },
});

export default TextInputForm;
