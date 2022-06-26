import React, { useCallback, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Boton } from '../../components/Boton';

import { styles } from '../../theme/appTheme';
// import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import { PanelSuperior } from '../../components/PanelSuperior';
import { PanelInferiorRojo } from '../../components/PanelInferiorRojo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { faUserCheck, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { ContextPrueba } from '../../ContextPrueba';
import { Picker } from '@react-native-picker/picker';

export const GestionarUsuarios = () => {
  const { userInfo, logout } = useContext(ContextPrueba);
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <PanelSuperior>
        <FontAwesomeIcon size={'65%'} icon={faUserCog} />
      </PanelSuperior>
      <PanelInferiorRojo>
        <Boton
          texto={'Crear usuarios'}
          icon="user-plus"
          paddingRightIcon={-50}
          onPress={() => navigation.navigate('CrearUsuarios')}
        ></Boton>
        <Boton
          texto={'Visualizar usuarios'}
          icon="user"
          onPress={() => navigation.navigate('VisualizarUsuarios')}
        ></Boton>
        <Boton
          texto={'Solicitudes'}
          icon="file"
          onPress={() => navigation.navigate('VisualizarSolicitudes')}
        ></Boton>
        <Boton
          texto={'Alertas'}
          icon={'exclamation'}
          onPress={() => navigation.navigate('Alertas')}
        ></Boton>
        <Boton
          texto={'Salida'}
          onPress={() => {
            logout();
          }}
        ></Boton>
        {/* <Boton
          texto={'Alertas'}
          icon={'exclamation'}
          onPress={() => {
            console.log('a');
          }}
        ></Boton> */}
        {/* <Boton texto={'Alertas'}></Boton> */}
      </PanelInferiorRojo>
    </View>
  );
};

const stylesx = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    // paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textInput: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
