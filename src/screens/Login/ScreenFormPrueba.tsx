import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Boton } from '../../components/Boton';
import { useNavigation } from '@react-navigation/native';
import { ContextPrueba } from '../../ContextPrueba';

const ScreenFormPrueba = () => {
  const navigation = useNavigation<NativeStackScreenProps>();
  const { codeRecover } = useContext(ContextPrueba);
  const [validarCodigo, setValidarCodigo] = useState('');

  const codigo = validarCodigo => {
    if (validarCodigo.toString() == codeRecover) {
      navigation.navigate('ScreenContraseña');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(178, 56, 45)' }}>
      <View style={stylesX.contenedorSuperior}>
        <Text style={stylesX.textTitulo}>
          Ingrese el código de restablecimiento
        </Text>
        <Text style={stylesX.textDescripcion}>
          Favor de ingresar el códgio de 4 digitos enviado a su correo
          electrónico
        </Text>
      </View>
      <View style={stylesX.contenedor}>
        <TextInput
          placeholder="Código de acceso"
          style={stylesX.input}
          value={validarCodigo}
          onChangeText={setValidarCodigo}
          onChange={(e: {
            target: {
              value: React.SetStateAction<string>;
            };
          }) => {
            setValidarCodigo(e.target.value);
          }}
        ></TextInput>
        <Boton
          texto={'Validar código de acceso'}
          onPress={() => {
            codigo(validarCodigo);
          }}
        ></Boton>
      </View>
    </View>
  );
};

export default ScreenFormPrueba;

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
    top: '44%',
  },
  textDescripcion: {
    fontSize: 18,
    paddingHorizontal: 25,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
    top: '21%',
  },
  contenedor: {
    backgroundColor: 'white',
    width: '80%',
    height: '35%',
    position: 'absolute',
    justifyContent: 'space-evenly',
    left: '10%',
    top: '28%',
    borderRadius: 25,
    paddingVertical: 24,
    opacity: 0.94,
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
