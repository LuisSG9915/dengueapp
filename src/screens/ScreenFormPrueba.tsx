import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { PanelSuperior } from '../components/PanelSuperior';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { Boton } from '../components/Boton';
import { saveTask } from '../../api';
import { useNavigation } from '@react-navigation/native';
import { ContextPrueba } from '../ContextPrueba';

const ScreenFormPrueba = () => {
  const navigation = useNavigation();
  const { logout, userInfo } = useContext(ContextPrueba);

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (name: any, value: any) =>
    setTask({ ...task, [name]: value });
  const handleSubmit = () => {
    // console.log(task)
    saveTask(task);
    navigation.navigate('Alertas');
  };

  return (
    <View style={{ flex: 1 }}>
      <PanelSuperior>
        <TextInput
          style={styles.inputBox}
          placeholder="Escriba un titulo"
          onChangeText={text => handleChange('title', text)}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Escriba una descripción"
          onChangeText={text => handleChange('description', text)}
        ></TextInput>
        {/* <Text>ES: , {userInfo}</Text> */}

        <Boton texto={'Registrar nuevos tasks'} onPress={handleSubmit}></Boton>
      </PanelSuperior>
    </View>
  );
};

export default ScreenFormPrueba;
