import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';
import axios from 'axios';
import { Navigate, useHistory } from 'react-router-native';
import {} from 'react-router-native';
import Header from '../components/Header';

export const ScreenMenu = ({}) => {
  const [rol, setRol] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://192.168.100.6:8000/login').then(response => {
      if (response.data.loggedIn == true) {
        setRol(response.data.user[0].role);
      }
      // console.log(response.data.user[0].email);
    });
  }, []);

  const history = useHistory();
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      {/* FIXME: Insertar imagen o icono */}
      <Header state={false} texto={'Menu'}></Header>
      <View style={styles.panelSuperiorGris}>
        {/* FIXME: Insertar imagen */}
      </View>

      <View style={styles.panelInferiorRed}>
        {/* ESPECIFICACIÓN DE ROLES DE USUARIO */}

        {rol == 'normalUser' && (
          <Boton
            texto="Mapa"
            onPress={() => history.push('/HomeMap')}
            icon="map"
          ></Boton>
        )}

        {rol == 'normalUser' && (
          <Boton
            texto="Métricas"
            onPress={() => history.push('/MetricsScreen')}
            icon="toggle-right"
            paddingRightIcon={-100}
            // paddingRightText={80}
          ></Boton>
        )}

        {rol == 'normalUser' && (
          <Boton
            icon="history"
            onPress={() => history.push('/HistorialOvitrampa')}
            texto="Historial"
          ></Boton>
        )}

        {rol == 'Admin' && (
          <Boton
            onPress={() => history.push('/GestionarUsuarios')}
            icon="users"
            texto="Usuarios"
          ></Boton>
        )}

        {rol == 'normalUser' && (
          <Boton
            icon="search"
            onPress={async () => console.log('a')}
            texto="Prediccion"
          ></Boton>
        )}
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
