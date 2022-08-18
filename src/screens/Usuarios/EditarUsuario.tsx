import React, { useState } from 'react';
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

export const EditarUsuario = () => {
  const [value, setValue] = useState([]);

  const [usuario, setUsuario] = useState({
    Nombre: '',
    Email: '',
    Contraseña: '',
    Puesto: '',
    Rol: '',
  });
  const mostrarAlerta = () => {
    // Alert.alert(
    //   'El usuario no ha solicitdado de manera correcta',
    //   'El administrador debe aceptar la solicitud'
    // );
    // Alert.alert(
    //   'El usuario no ha sido solicitdado',
    //   'Favor de comunicarse con el administrador'
    // );
    Alert.alert('El usuario no ha sido registrado correctamente');
    // Alert.alert('El usuario ha sido registrado correctamente');
  };

  const handleChange = (name, value) =>
    setUsuario({ ...usuario, [name]: value });

  const handleSubmit = () => {
    saveUsuario(usuario);
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
          secureTextEntry={false}
          editable={true}
        />

        <Text style={styles.headerTexto}>Email</Text>
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Email'}
          handleText={'Email'}
          secureTextEntry={false}
          editable={true}
        />

        <Text style={styles.headerTexto}>Contraseña</Text>
        <InputUsuario
          handleChange={handleChange}
          placeholder={'Contraseña'}
          handleText={'Contraseña'}
          secureTextEntry={true}
          editable={false}
        />

        <Text style={styles.headerTexto}>Puesto</Text>

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
        </View>
        {/* <Text style={styles.headerTexto}>Puesto</Text> */}
        {/* <InputUsuario
          handleChange={handleChange}
          placeholder={'Puesto'}
          handleText={'Puesto'}
        /> */}

        {/* <Text style={styles.headerTexto}>Rol</Text> */}
        {/*
        <InputUsuario
        handleChange={handleChange}
        placeholder={'Rol'}
        handleText={'Rol'}
      /> */}

        <Text style={styles.headerTexto}>Rol</Text>
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
            {pickerData(rolUsuario)}
          </Picker>
        </View>

        <TouchableOpacity
          style={{ marginVertical: 50 }}
          onPress={() => {
            mostrarAlerta();
            handleSubmit(usuario);
            console.log(usuario);
          }}
        >
          <View style={styles.botonBox}>
            <Text style={styles.botonText}> Editar usuario</Text>
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
  secureTextEntry,
  editable,
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
      secureTextEntry={secureTextEntry}
      editable={editable}
    ></TextInput>
  );
}
