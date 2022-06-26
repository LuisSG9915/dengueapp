import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Boton } from '../../components/Boton';
import { ContraseñaBox } from '../../components/ContraseñaBox';
import { InputBox } from '../../components/InputBox';
import { styles } from '../../theme/appTheme';
import { PanelInferiorRojo } from '../../components/PanelInferiorRojo';
import { PanelSuperior } from '../../components/PanelSuperior';

export const ScreenRevocerPass = () => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <PanelSuperior></PanelSuperior>

      <PanelInferiorRojo>
        <Text
          style={[
            {
              fontWeight: 'bold',
              lineHeight: 30,
              textAlign: 'right',
              fontWeight: '500',
              color: '#353147',
              position: 'absolute',
              top: '13%',
            },
          ]}
        >
          Favor de ingresar su correo para recuperar su cuenta{' '}
        </Text>
        <InputBox placeHolder={'Email'} secureTextEntry={false}></InputBox>
        <Boton
          texto="Restablecer contraseña"
          margins={40}
          onPress={function (): {} {
            throw new Error('Function not implemented.');
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
