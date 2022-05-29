import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Boton } from '../../components/Boton';
import { styles } from '../../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';

// type Props = NativeStackScreenProps<
//   RootStackParams,
//   'GestionarUsuarios',
//   'HomeMap'
// >;
export const ScreenMenu = () => {
  const navigation = useNavigation<NativeStackScreenProps>();
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      {/* FIXME: Insertar imagen o icono */}

      <View style={styles.panelSuperiorGris}>
        {/* FIXME: Insertar imagen */}
      </View>

      <View style={styles.panelInferiorRed}>
        <Boton
          texto="Mapa"
          onPress={() => navigation.navigate('HomeMap')}
          icon="map"
          // paddingRightIcon={92}
          // paddingRightText={80}
        >
          <Text>a</Text>
        </Boton>
        <Boton
          onPress={() => navigation.navigate('MetricsScreen')}
          texto="Métricas"
          icon="chart-bar"
          paddingRightIcon={-100}
          // paddingRightText={80}
        ></Boton>
        <Boton
          icon="history"
          onPress={() => navigation.navigate('HistorialOvitrampa')}
          texto="Historial"
        ></Boton>
        {/* <Boton
          onPress={() => navigation.navigate('GestionarUsuarios')}
          icon="users"
          texto="Usuarios"
        ></Boton> */}
        <Boton
          icon="search"
          // onPress={async () => console.log('a')}
          onPress={async () => console.log('a')}
          texto="Prediccion"
        ></Boton>
      </View>
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
