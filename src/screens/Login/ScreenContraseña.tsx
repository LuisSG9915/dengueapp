import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { Boton } from '../../components/Boton';
import { useNavigation } from '@react-navigation/native';

const ScreenContraseña = () => {
  const navigation = useNavigation();
  const mostrarAlerta = () => {
    Alert.alert(
      'Su nueva contraseña ha sido registrado correctamente',
      "Al seleccionar 'ok' le redirecciona a la pantalla de inicio ",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Ok', onPress: () => navigation.navigate('ScreenLogin') },
      ]
    );
  };
  const [Contraseña, setContraseña] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(178, 56, 45)' }}>
      <View style={stylesX.contenedorSuperior}>
        <Text style={stylesX.textTitulo}>Ingrese su nueva contraseña</Text>
      </View>
      <View style={stylesX.contenedor}>
        <TextInput
          placeholder="Nueva contraseña"
          style={stylesX.input}
          value={Contraseña}
          onChangeText={setContraseña}
          onChange={(e: {
            target: {
              value: React.SetStateAction<string>;
            };
          }) => {
            setContraseña(e.target.value);
          }}
        ></TextInput>

        <Boton
          texto={'Registrar contraseña'}
          onPress={() => {
            mostrarAlerta();
          }}
        ></Boton>
      </View>
    </View>
  );
};

export default ScreenContraseña;

const stylesX = StyleSheet.create({
  contenedorSuperior: {
    backgroundColor: 'rgb(87, 87, 86)',
    // backgroundColor: 'red',
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: '-68%',
    borderRadius: 25,
  },
  textTitulo: {
    fontSize: 25,
    paddingHorizontal: 25,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'left',
    // backgroundColor: 'white',
    top: '31%',
  },
  textDescripcion: {
    fontSize: 20,
    paddingHorizontal: 25,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
    top: '22%',
  },
  contenedor: {
    backgroundColor: 'white',
    width: '80%',
    height: '35%',
    position: 'absolute',
    justifyContent: 'space-evenly',
    left: '10%',
    top: '27%',
    borderRadius: 25,
    paddingVertical: 24,
  },
  input: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
    left: '11%',
    borderRadius: 16,
    marginBottom: 10,
    width: '78%',
    height: '21%',
  },
});
