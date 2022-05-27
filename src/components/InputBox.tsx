/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
  placeHolder: string;
  secureTextEntry: boolean;
  value?: any;
  setValue?: any;
  onChange?: any;
}
export const InputBox = ({
  placeHolder,
  setValue,
  value,
  secureTextEntry,
  onChange,
}: Props) => {
  // const [value, setValue] = useState("")

  return (
    <TextInput
      value={value}
      style={stylesSamePage.input}
      inputStyle={stylesSamePage.inputStyle}
      labelStyle={stylesSamePage.labelStyle}
      placeholderStyle={stylesSamePage.placeholderStyle}
      textErrorStyle={stylesSamePage.textErrorStyle}
      label="TextInput"
      onChange={onChange}
      // backgroundColor={'White'}
      placeholder={placeHolder}
      placeholderTextColor="gray"
      focusColor="red"
      keyboardType="email-address"
      secureTextEntry={secureTextEntry}
      onChangeText={setValue}
    />
  );
};
const stylesSamePage = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 39,
  },
  input: {
    width: 300,
    height: 55,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: -15,
    borderRadius: 15,
    fontSize: 16,
  },
  inputStyle: { fontSize: 50 },
  labelStyle: {
    fontSize: 25,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 25 },
  textErrorStyle: { fontSize: 25 },
});
