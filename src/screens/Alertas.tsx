import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { getTasks } from '../../api';
import ListFlat from '../components/ListFlat';
import { PanelSuperior } from '../components/PanelSuperior';
import { Boton } from '../components/Boton';
import { useNavigation } from '@react-navigation/native';

export const Alertas = () => {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  };
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <PanelSuperior>
      <ListFlat tasks={tasks}></ListFlat>
      <Boton
        texto={'Agregar nueva alerta'}
        onPress={() => {
          return navigation.navigate('ScreenFormPrueba');
        }}
      ></Boton>
    </PanelSuperior>
  );
};
