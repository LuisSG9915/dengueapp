import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Boton } from '../../components/Boton';
import { InputBox } from '../../components/InputBox';
import { PanelInferiorRojo } from '../../components/PanelInferiorRojo';
import { PanelSuperior } from '../../components/PanelSuperior';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { ContextPrueba } from '../../ContextPrueba';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ScreenRevocerPass = () => {
  const navigation = useNavigation();
  const { recover, estadoRecuperacion, setEstadoRecuperacion } =
    useContext(ContextPrueba);
  const [Email, setEmail] = useState('');

  useEffect(() => {
    if (estadoRecuperacion == '1') {
      navigation.navigate('ScreenFormPrueba');
      let estadoRecuperacion = '0';

      setEstadoRecuperacion(estadoRecuperacion);

      AsyncStorage.setItem('estadoRecuperacion', estadoRecuperacion);
    }
  }, [estadoRecuperacion]);

  const mostrarAlerta = () => {
    Alert.alert('Se ha enviado un mensaje a su correo electrónico');
  };

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <PanelSuperior>
        <FontAwesomeIcon size={'50%'} icon={faKey} />
      </PanelSuperior>

      <PanelInferiorRojo>
        <Text
          style={[
            {
              fontWeight: 'bold',
              textAlign: 'center',
              fontWeight: '500',
              color: 'black',
              marginHorizontal: '5%',
            },
          ]}
        >
          Ingrese su correo electrónico para recuperar su contraseña
        </Text>

        <InputBox
          placeHolder={'Correo'}
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
        <Boton
          texto="Restablecer contraseña"
          onPress={() => recover(Email)}
          icon={''}
        ></Boton>
      </PanelInferiorRojo>
    </View>
  );
};
