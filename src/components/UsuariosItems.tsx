import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import { BASE_URL } from '../config';

/**
 * * Archivo del estilo del recuadro
 * TODO: Realizar la siguiente pantalla al seleccionar el usuario
 * TODO: Estilizar
 * @param Nombre
 * @param Email
 */

const UsuariosItems = ({ task }) => {
  const navigation = useNavigation<NativeStackScreenProps>();

  const mostrarAlerta = () => {
    Alert.alert('La baja del usuario se ha eliminado de manera correcta');
    // Alert.alert(
    //   'El usuario no ha sido eliminado ',
    //   'Favor de comunicarse con el administrador'
    // );
    // Alert.alert(
    //   'La baja del usuario ha sido solicitado correctamente',
    //   'El adminsitrador debe aceptar la solicitud'
    // );
  };

  const aceptarDelete = () => {
    Alert.alert(
      'Confirmación de baja de usuario',
      '¿Está seguro de realizar la baja del usuario?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelado'),
          style: 'cancelar',
        },
        {
          text: 'Ok',
          onPress: () => {
            eliminarUsuario(task.Email);
          },
        },
      ]
    );
  };

  const eliminarUsuario = async Email => {
    // setIsLoading(true);
    axios
      .delete(`${BASE_URL}/eliminarUsuario/${Email}`, {
        Email,
      })
      .then(res => {
        console.log('realizado');
      })
      .catch(e => {
        console.log(`register error ${e}`);
        // setIsLoading(false);
      });
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View style={stylesX.itemContainer}>
        {/* Parametros para la siguiente pantalla */}
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate('CrearUsuarios', {
            //   Nombre: task.Nombre,
            //   Email: task.Email,
            //   Contraseña: task.Contraseña,
            //   Puesto: task.Puesto,
            //   Rol: task.Puesto,
            //   Jurisdicción: task.Jurisdicción,
            // })
            console.log('a')
          }
        >
          <Text style={stylesX.textFriends}>{task.Nombre}</Text>
        </TouchableOpacity>
        <View style={stylesX.conjunto}>
          <View style={stylesX.botonEdit}>
            <Button
              title="edit"
              color={'orange'}
              onPress={() => {
                navigation.navigate('ActualizarUsuario', {
                  Nombre: task.Nombre,
                  Email: task.Email,
                  Contraseña: task.Contraseña,
                  Puesto: task.Puesto,
                  Rol: task.Puesto,
                  Jurisdicción: task.Jurisdicción,
                });
              }}
            ></Button>
          </View>
          <View style={stylesX.botonBorrar}>
            <Button
              title="delete"
              color={'red'}
              onPress={() => {
                aceptarDelete();
              }}
            ></Button>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesX = StyleSheet.create({
  conjunto: { flexDirection: 'row', position: 'absolute', left: '68%' },
  textFriends: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    width: '63%',
  },

  itemContainer: {
    alignItection: 'row',
    width: '90%',
    height: '90%',
    backgroundColor: 'rgba(248, 248, 248,0.8)',
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 10,
    marginVertical: 5,
    paddingVertical: 8,
    paddingLeft: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  botonEdit: { width: 70 },
  botonBorrar: { width: 70 },
});
export default UsuariosItems;
