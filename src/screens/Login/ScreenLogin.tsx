// @ts-nocheck
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Alert,
  TextInput,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { ContextPrueba } from '../../ContextPrueba';

import { useNavigation } from '@react-navigation/native';
import { Boton } from '../../components/Boton';
import LinearGradient from 'react-native-linear-gradient';
import axios, * as others from 'axios';
import { PanelSuperior } from '../../components/PanelSuperior';
import { InputBox } from '../../components/InputBox';

export const ScreenLogin = () => {
  const navigation = useNavigation();

  const { login, userInfo } = useContext(ContextPrueba);
  const { height, width } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <SafeAreaView style={sty.container}>
        <PanelSuperior>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/dengue.png')}
              style={{
                width: (width / 2) * 1.8,
                height: (height / 4) * 1.5,
                borderRadius: 16,
                marginBottom: 40,
              }}
            />
            <InputBox
              placeHolder={'Usuario'}
              secureTextEntry={false}
              value={email}
              setValue={setEmail}
              onChange={(e: {
                target: {
                  value: React.SetStateAction<string>;
                };
              }) => {
                setEmail(e.target.value);
              }}
            ></InputBox>
            <InputBox
              placeHolder={'Contraseña'}
              secureTextEntry={true}
              value={password}
              setValue={setPassword}
              onChange={(e: {
                target: {
                  value: React.SetStateAction<string>;
                };
              }) => {
                setPassword(e.target.value);
              }}
            />

            <TouchableOpacity
              style={{ marginLeft: '28%' }}
              onPress={() => navigation.navigate('ScreenRevocerPass')}
            >
              <Text
                style={[
                  sty.buttonsText,
                  { fontWeight: 'bold', lineHeight: 30, textAlign: 'right' },
                ]}
              >
                Recovery Password
              </Text>
            </TouchableOpacity>

            {/* {loginStatus == 'equivocado' ? (
                <Text
                  style={[
                    sty.buttonsText,
                    {
                      fontWeight: 'bold',
                      textAlign: 'right',
                      color: 'red',
                    },
                  ]}
                >
                  Las credenciales proporcionados son incorrectas, favor de
                  intentarlo de nuevo
                </Text>
              ) : null} */}

            <Boton
              texto={'Iniciar sesión'}
              icon={'sign-in'}
              onPress={() => login(email, password)}
              // onPress={() => {
              //   navigation.navigate('ScreenMenu');
              // }}
            ></Boton>
          </View>
        </PanelSuperior>
      </SafeAreaView>
    </>
  );
};

const sty = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 30,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147',
  },
  body: {
    paddingTop: 20,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonsText: {
    fontWeight: '500',
    color: '#353147',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    padding: 16,
    borderRadius: 6,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    backgroundColor: '#DFE3E630',
    marginTop: 40,
  },

  input: {
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
});
