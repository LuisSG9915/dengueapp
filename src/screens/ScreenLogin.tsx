import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Boton } from '../components/Boton';
import LinearGradient from 'react-native-linear-gradient';
import axios, * as others from 'axios';
// import axios from 'axios';

import { InputBox } from '../components/InputBox';
import { styles } from '../theme/appTheme';

export const ScreenLogin = () => {
  const navigation = useNavigation();

  const { height, width } = Dimensions.get('window');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  axios.defaults.withCredentials = true;

  const register = () => {
    axios
      .post('http://192.168.100.6:8000/register', {
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
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
      }
      // console.log(response.data.user[0].email);
    });
  }, []);

  // const login = () => {
  //   axios
  //     .post('http://localhost:8000/login', {
  //       email: email,
  //       password: password,
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log('Error', error.message);
  //       }
  //     })
  //     .then((response: any) => {
  //       console.log(response.data);
  //       setLoginStatus(response.data.message);
  //     });
  // };
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
                // backgroundColor: 'blue',
                // flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // alignContent: 'center',
              }}
            >
              <Image
                source={require('../assets/dengue.png')}
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
                onPress={() => navigation.navigate('ScreenRecoverPass')}
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
              <Text
                style={[
                  sty.buttonsText,
                  { fontWeight: 'bold', lineHeight: 30, textAlign: 'right' },
                ]}
              >
                {loginStatus}
              </Text>
              <Boton
                texto={'Iniciar sesión'}
                icon={'sign-in'}
                // onPress={() => navigation.navigate('ScreenMenu')}
                onPress={login}
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
