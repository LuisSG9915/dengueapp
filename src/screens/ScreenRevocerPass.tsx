import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Boton } from '../components/Boton';
import { InputBox } from '../components/InputBox';
import { PanelInferiorRojo } from '../components/PanelInferiorRojo';
import { PanelSuperior } from '../components/PanelSuperior';
import { BackButton } from 'react-router-native';

export const ScreenRevocerPass = ({}) => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      {/* FIXME: Insertar imagen o icono */}
      <PanelSuperior></PanelSuperior>

      <PanelInferiorRojo>
        <InputBox
          placeHolder={'Recuperar Contraseña'}
          secureTextEntry={false}
        ></InputBox>
        {/* FIXME: Insertar imagen  */}

        <Boton
          texto="Restablecer contraseña"
          margins={40}
          onPress={() => {
            console.log('a');
          }}
        ></Boton>
      </PanelInferiorRojo>
    </View>
  );
};

const stylesSamePage = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    fontFamily: 'Segoe UI',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'rgba(254, 254, 254, 255)',
    marginStart: 140,
    marginTop: 10,
  },
});
