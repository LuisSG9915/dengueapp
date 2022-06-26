import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { InputBox } from '../../components/InputBox';
import { styles } from '../../theme/appTheme';
import { PanelSuperior } from '../../components/PanelSuperior';
import axios from 'axios';
import { BASE_URL } from '../../config';
import UsuariosList from '../../components/UsuariosList';

export const VisualizarUsuarios = () => {
  const navigation = useNavigation();
  // const [data, setData] = useState([]);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [usuariosPet, setUsuariosPet] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Use Effect para el cambio del header de navegación
  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: ' Usuarios',

      // SearchBar en el header
      headerSearchBarOptions: {
        placeholder: 'Friends',
        // Evento escritura búsqueda de amigos
        onChangeText: (event: { nativeEvent: { text: any } }) => {
          // funcipon: pasa filtrar la información  de lo que se está escribiendo
          // Se accede al evento (o información) con nativeEvent
          searchFilterFunction(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const searchFilterFunction = async (text: string) => {
    // Hay texto?
    if (text) {
      // gurda datos ya filtraddas, por cada item
      const newData = data.filter(item => {
        // hay un nombre en el input?
        const itemData = item.name.first
          ? // convertir item a mayusculas
            item.name.first.toUpperCase()
          : // en caso de que no haya nada se realizará una conf nulla en mayusculas
            ''.toUpperCase();
        // Lo que se está escribiendo se debe de comparar, por lo que de igual manera se convierte en mayusculas
        const textData = text.toUpperCase();
        // Regresa itemdata
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      // Regresa datos sin ordenar
      setFilteredData(data);
    }
  };

  const mostrarUsuario = async () => {
    // setIsLoading(true);
    axios
      .get(`${BASE_URL}/usuarios`, {
        email,
        password,
      })
      .then(res => {
        const usuarios = res.data;
        setUsuariosPet(usuarios);
        // console.log(usuarios);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        // setIsLoading(false);
      });
  };

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // fetchData('https://randomuser.me/api/?results=20');
    mostrarUsuario();
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}
    >
      <View style={stylesX.container}>
        <UsuariosList usuariosPet={usuariosPet}></UsuariosList>
      </View>
    </View>
  );
};

const stylesX = StyleSheet.create({
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: 'rgba(248, 248, 248,0.8)',
  },
  container: {
    backgroundColor: 'rgb(87, 87, 86)',
    flex: 1,
    paddingVertical: 22,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
