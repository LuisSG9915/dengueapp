import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../../config';
import UsuariosList from '../../components/UsuariosList';
import { Picker } from '@react-native-picker/picker';

export const VisualizarUsuarios = () => {
  const navigation = useNavigation();
  // const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [Email, setEmail] = useState([]);
  const [Contraseña, setContraseña] = useState([]);
  const [usuariosPet, setUsuariosPet] = useState([]);
  const [consulta, setConsulta] = useState(`${BASE_URL}/usuariosVariados/DSC`);
  const user = `${BASE_URL}/usuarios`;

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    console.log('jeje');
    await mostrarUsuario();
    console.log('jeje');
    setRefreshing(false);
  }, []);

  // Use Effect para el cambio del header de navegación
  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: ' Usuarios',

      // SearchBar en el header
      // headerSearchBarOptions: {
      //   placeholder: 'Friends',
      // Evento escritura búsqueda de amigos
      //   onChangeText: (event: { nativeEvent: { text: any } }) => {
      // funcipon: pasa filtrar la información  de lo que se está escribiendo
      // Se accede al evento (o información) con nativeEvent
      //     searchFilterFunction(event.nativeEvent.text);
      //   },
      // },
    });
  }, [navigation]);

  // const searchFilterFunction = async (text: string) => {
  //   // Hay texto?
  //   if (text) {
  //     // gurda datos ya filtraddas, por cada item
  //     const newData = data.filter(item => {
  //       // hay un nombre en el input?
  //       const itemData = item.name.first
  // ? // convertir item a mayusculas
  //           item.name.first.toUpperCase()
  //         : // en caso de que no haya nada se realizará una conf nulla en mayusculas
  //           ''.toUpperCase();
  //       // Lo que se está escribiendo se debe de comparar, por lo que de igual manera se convierte en mayusculas
  //       const textData = text.toUpperCase();
  //       // Regresa itemdata
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setUsuariosPet(newData);
  //   } else {
  //     // Regresa datos sin ordenar
  //     setUsuariosPet(data);
  //   }
  // };

  const mostrarUsuario = async () => {
    // setIsLoading(true);
    axios
      .get(consulta, {
        Email,
        Contraseña,
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

  useEffect(() => {
    mostrarUsuario();
  }, []);

  const jurisdiccion = [
    'Ascendente',
    'Descendente',
    'Operativos',
    'Directivos',
  ];

  const pickerData = (dato: any[]) => {
    return (
      dato?.length > 0 &&
      dato.map((val, index) => (
        <Picker.Item label={val} value={val} key={index} />
      ))
    );
  };

  const jursdicciones = value => {
    setValue(value);
    if (value == 'DESC') {
      setConsulta(`${BASE_URL}/usuariosVariados/${value}`);
      mostrarUsuario();
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
      }}
    >
      <View style={stylesX.container}>
        <View
          style={{
            // marginTop: 25,
            paddingHorizontal: 25,
            paddingBottom: 8,
            backgroundColor: 'rgb(87, 87, 86)',
            borderRadius: 150,
          }}
        >
          <Picker
            style={{ backgroundColor: 'white' }}
            selectedValue={value}
            onFocus={() => {}}
            onValueChange={(itemValue, itemIndex) => jursdicciones(itemValue)}
          >
            {pickerData(jurisdiccion)}
          </Picker>
        </View>
        <UsuariosList
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                onRefresh();
              }}
              refreshing={refreshing}
            />
          }
          usuariosPet={usuariosPet}
        ></UsuariosList>
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
