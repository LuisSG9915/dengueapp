import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { InputBox } from '../../components/InputBox';
import { styles } from '../../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { PanelSuperior } from '../../components/PanelSuperior';
import { Picker } from '@react-native-picker/picker';

export const CrearUsuarios = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const pickerData = dato => {
    return (
      dato?.length > 0 &&
      dato.map((val, index) => (
        <Picker.Item label={val} value={val} key={index} />
      ))
    );
  };

  const jursdicciones = valor => {
    setValue(valor);
    console.log(valor);
  };

  const jurisdiccion = ['Directivo', 'Operativo'];
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <PanelSuperior>
        <Text style={styles.headerTexto}>Nombre de usuario</Text>
        <InputBox
          placeHolder={'Nombre de usuario'}
          secureTextEntry={false}
        ></InputBox>
        <Text style={styles.headerTexto}>Email</Text>
        <InputBox placeHolder={'Email'} secureTextEntry={false}></InputBox>
        <Text style={styles.headerTexto}>Contraseña</Text>
        <InputBox placeHolder={'Contraseña'} secureTextEntry={false}></InputBox>
        <Text style={styles.headerTexto}>Puesto de trabajo</Text>
        <InputBox
          placeHolder={'Puesto de trabajo'}
          secureTextEntry={false}
        ></InputBox>
        <Text style={styles.headerTexto}>Rol</Text>
        <View
          style={{
            backgroundColor: 'white',
            width: '75%',
            height: '7%',
            borderRadius: 22,
          }}
        >
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => jursdicciones(itemValue)}
          >
            {pickerData(jurisdiccion)}
          </Picker>
        </View>

        <TouchableOpacity style={{ marginVertical: 50 }} onPress={() => null}>
          <View style={styles.botonBox}>
            <Text style={styles.botonText}> Registrar usuario</Text>
          </View>
        </TouchableOpacity>
      </PanelSuperior>
    </View>
  );
};
