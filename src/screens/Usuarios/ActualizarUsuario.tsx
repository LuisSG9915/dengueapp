import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { styles } from '../../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { PanelSuperior } from '../../components/PanelSuperior';
import { Picker } from '@react-native-picker/picker';
import { saveUsuario } from '../../../api';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const ActualizarUsuario = ({ route }) => {
  const navigation = useNavigation();
  const [edicion, setEdicion] = useState(false);
  const [value, setValue] = useState([]);
  const [usuario, setUsuario] = useState({
    Nombre: '',
    Email: '',
    Contraseña: '',
    Puesto: '',
    Rol: '',
    Jurisdicción: '',
  });

  useEffect(() => {
    if (route.params && route.params.Nombre) {
      navigation.setOptions({
        headerTitle: 'Actualizando usuario',
      });
      setUsuario({
        Nombre: route.params.Nombre,
        Email: route.params.Email,
        Contraseña: route.params.Contraseña,
        Puesto: route.params.Puesto,
        Rol: route.params.Rol,
        Jurisdicción: route.params.Jurisdicción,
      });
      setEdicion(true);
    }
  }, [
    route.params.Nombre,
    route.params.Email,
    route.params.Contraseña,
    route.params.Puesto,
    route.params.Rol,
    route.params.Jurisdicción,
  ]);

  const mostrarAlerta = () => {
    Alert.alert(
      'Actualización realizada',
      'El usuario se ha actualizado de manera correcta',
      [
        {
          text: 'realizado',
          onPress: () => navigation.navigate('VisualizarUsuarios'),
        },
      ]
    );
    // Alert.alert(
    //   'El usuario no ha solicitdado de manera correcta',
    //   'El administrador debe aceptar la solicitud'
    // );
    // Alert.alert(
    //   'El usuario no ha sido solicitdado',
    //   'Favor de comunicarse con el administrador'
    // );
    // Alert.alert('El usuario ha sido registrado correctamente');
  };

  const handleChange = (name, value) =>
    setUsuario({ ...usuario, [name]: value });

  const handleSubmit = () => {
    if (edicion) {
      actualizarUsuario(usuario);
    } else {
      saveUsuario(usuario);
    }
  };

  const actualizarUsuario = async nombre => {
    const Nombre = nombre.Nombre;
    const Contraseña = nombre.Contraseña;
    const Puesto = nombre.Puesto;
    const Rol = nombre.Rol;
    const Jurisdicción = nombre.Jurisdicción;
    const Email = nombre.Email;
    axios
      .put(`${BASE_URL}/updateUser`, {
        Nombre,
        Contraseña,
        Puesto,
        Rol,
        Jurisdicción,
        Email,
      })
      .then(response => {
        response.data;
        mostrarAlerta();
      })
      .catch(err => {
        console.log('***', err);
      });
  };

  const clearHandle = name => {
    setUsuario({
      Nombre: '',
      Email: '',
      Contraseña: '',
      Puesto: '',
      Rol: '',
      Jurisdicción: '',
    });
  };

  const pickerData = dato => {
    return (
      dato?.length > 0 &&
      dato.map((val, index) => (
        <Picker.Item label={val} value={val} key={index} />
      ))
    );
  };

  const usuarios = valor => {
    setValue(valor);
    console.log(valor);
  };

  const rolUsuario = ['Directivo', 'Operativo'];
  const puestoUsuario = [
    'Director',
    'Subdirector',
    'Jefe de departamento',
    'Trabajador',
  ];

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <PanelSuperior>
        {/*  */}
        <Text style={styles.headerTexto}>Nombre de usuario</Text>
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Nombre'}
          handleText={'Nombre'}
          value={usuario.Nombre}
          secureTextEntry={false}
        />

        <Text style={styles.headerTexto}>Email</Text>
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Email'}
          handleText={'Email'}
          value={usuario.Email}
          secureTextEntry={false}
        />

        <Text style={styles.headerTexto}>Contraseña</Text>
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Contraseña'}
          handleText={'Contraseña'}
          value={usuario.Contraseña}
          secureTextEntry={edicion}
        />

        <Text style={styles.headerTexto}>Puesto</Text>
        {/* 
        <View
          style={{
            backgroundColor: 'white',
            width: '60%',
            height: '5.6%',
            borderRadius: 22,
          }}
        >
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => usuarios(itemValue)}
            style={{ fontWeight: '100' }}
          >
            {pickerData(puestoUsuario)}
          </Picker>
        </View> */}
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Puesto de trabajo'}
          handleText={'Puesto'}
          value={usuario.Puesto}
          secureTextEntry={false}
        />

        {/* <Text style={styles.headerTexto}>Rol</Text> */}
        <Text style={styles.headerTexto}>Rol</Text>

        <InputUsuario
          handleChange={handleChange}
          placeholder={'Rol del usuario'}
          handleText={'Rol'}
          value={usuario.Rol}
          secureTextEntry={false}
        />
        <Text style={styles.headerTexto}>Jurisdicción</Text>

        <InputUsuario
          handleChange={handleChange}
          placeholder={'Jurisdicción del usuario'}
          handleText={'Jurisdicción'}
          value={usuario.Jurisdicción}
          secureTextEntry={false}
        />

        {/* <View
          style={{
            backgroundColor: 'white',
            width: '60%',
            height: '5.6%',
            borderRadius: 22,
          }}
        >
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => usuarios(itemValue)}
            style={{ fontWeight: '100' }}
          >
            {pickerData(rolUsuario)}
          </Picker>
        </View> */}

        <TouchableOpacity
          style={{ marginVertical: 50 }}
          onPress={() => {
            // mostrarAlerta();
            handleSubmit(usuario);
            clearHandle(usuario);
          }}
        >
          <View style={styles.botonBox}>
            <Text style={styles.botonText}> Crear usuario</Text>
          </View>
        </TouchableOpacity>
      </PanelSuperior>
    </View>
  );
};

function InputUsuario({
  handleChange,
  placeholder,
  handleText,
  value,
  secureTextEntry,
}) {
  return (
    <TextInput
      onChangeText={text => {
        handleChange(handleText, text);
      }}
      placeholder={placeholder}
      style={{
        backgroundColor: 'white',
        width: '60%',
        height: '5.6%',
        borderRadius: 20,
      }}
      value={value}
      secureTextEntry={secureTextEntry}
    ></TextInput>
  );
}
