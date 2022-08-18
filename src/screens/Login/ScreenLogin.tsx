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
  Button,
  TextInput,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { ContextPrueba } from '../../ContextPrueba';

import { useNavigation } from '@react-navigation/native';
import { Boton } from '../../components/Boton';

import { PanelSuperior } from '../../components/PanelSuperior';
import { InputBox } from '../../components/InputBox';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import notifee from '@notifee/react-native';

export const ScreenLogin = () => {
  const navigation = useNavigation();

  const { login, userInfo, estadoRecuperacion } = useContext(ContextPrueba);
  const { height, width } = Dimensions.get('window');
  const [Email, setEmail] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [estado, setEstado] = useState('1');

  useEffect(() => {
    if (estado == '2') {
      onDisplayNotification();
      setEstado('1');
    }
  }, [estado]);

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,

        pressAction: {
          id: 'default',
        },
      },
    });
  }
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
              value={Email}
              setValue={setEmail}
              onChange={(e: {
                target: {
                  value: React.SetStateAction<string>;
                };
              }) => {
                setEmail(e.target.value);
              }}
            ></InputBox>

            <View style={{ justifyContent: 'center' }}>
              <TextInput
                placeholder="Contraseña"
                secureTextEntry={hidePass ? true : false}
                value={Contraseña}
                onChangeText={setContraseña}
                style={sty.input}
                onChange={(e: {
                  target: {
                    value: React.SetStateAction<string>;
                  };
                }) => {
                  setContraseña(e.target.value);
                }}
              ></TextInput>

              <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
                style={sty.eye}
              >
                <FontAwesomeIcon size={20} icon={faEye} />
              </TouchableOpacity>
            </View>

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

            {userInfo ? (
              <Text
                style={[
                  sty.buttonsText,
                  {
                    fontWeight: 'bold',
                    textAlign: 'right',
                    color: '#FF5E61',
                  },
                ]}
              >
                Las credenciales proporcionados son incorrectas, favor de
                intentarlo de nuevo
              </Text>
            ) : null}

            {/* <Button
              title="Display Notification"
              onPress={() => setEstado('2')}
            /> */}

            <Boton
              texto={'Iniciar sesión'}
              icon={'sign-in'}
              onPress={() => login(Email, Contraseña)}
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
  eye: {
    position: 'absolute',
    right: '1%',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
