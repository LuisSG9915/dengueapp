import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Boton } from '../components/Boton';

import { styles } from '../theme/appTheme';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

// import SearchBar from '@nghinv/react-native-search-bar';
import { PanelSuperior } from '../components/PanelSuperior';
import { PanelInferiorRojo } from '../components/PanelInferiorRojo';
export const GestionarUsuarios = () => {
  // const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      {/* FIXME: Insertar imagen o icono */}
      <PanelSuperior>
        <View style={stylesx.container}></View>
      </PanelSuperior>

      <PanelInferiorRojo>
        <Boton
          texto={'Crear usuarios'}
          icon="user-plus"
          paddingRightIcon={-50}
          onPress={() => console.log('a')}
        ></Boton>
        <Boton
          texto={'Visualizar usuarios'}
          icon="user"
          onPress={() => console.log('a')}
        ></Boton>
        <Boton
          texto={'Solicitudes'}
          icon="file"
          onPress={() => console.log('a')}
        ></Boton>
        <Boton
          texto={'Alertas'}
          icon={'exclamation'}
          onPress={() => console.log('a')}
        ></Boton>
        {/* <Boton texto={'Alertas'}></Boton> */}
      </PanelInferiorRojo>
    </View>
  );
};

const stylesx = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  textInput: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
