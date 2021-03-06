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
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Boton } from '../../components/Boton';
import LinearGradient from 'react-native-linear-gradient';
import axios, * as others from 'axios';

import { InputBox } from '../../components/InputBox';

export const ScreenLogin = () => {
  const navigation = useNavigation();

  const { height, width } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [rol, setRol] = useState('');

  axios.defaults.withCredentials = true;

  const register = () => {
    axios
      .post('http://192.168.100.6:8000/register', {
        // .post('http://10.42.0.55:8000/register', {
        email: email,
        password: password,
      })
      .then((response: any) => {
        console.log(response.data);
        console.log('aa');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const login = () => {
    axios
      // .post('http://10.42.0.55:8000/login', {
      .post('http://192.168.100.6:8000/login', {
        email: email,
        password: password,
      })
      .then((response: any) => {
        console.log(response.data);
        setLoginStatus(response.data.message);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get('http://192.168.100.6:8000/login').then(response => {
      // axios.get('http://10.42.0.55:8000/login').then(response => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
        setRol(response.data.user[0].role);
      }
      console.log(loginStatus);
    });
  }, []);

  if (rol == 'normalUser') {
    navigation.navigate('ScreenMenu');
  }
  if (rol == 'Admin') {
    navigation.navigate('GestionarUsuarios');
  }
  return (
    <>
      <LinearGradient
        colors={['rgb(178, 56, 45)', 'rgb(255, 210, 0)']}
        style={sty.container}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <SafeAreaView style={sty.container}>
          <ScrollView
            contentContainerStyle={{
              // backgroundColor: 'red',
              height: '50%',
              flex: 1,
            }}
          >
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
                placeHolder={'Contrase??a'}
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
                onPress={() => navigation.navigate('ScreenRecoverPass')}
                // onPress={createTwoButtonAlert}
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
              {loginStatus == 'equivocado' ? (
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
              ) : null}
              <Text
                style={[
                  sty.buttonsText,
                  {
                    fontWeight: 'bold',
                    lineHeight: 30,
                    textAlign: 'right',
                  },
                ]}
              ></Text>
              <Boton
                texto={'Iniciar sesi??n'}
                icon={'sign-in'}
                onPress={login}
                // onPress={() => navigation.navigate('HomeMap')}
              ></Boton>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
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
