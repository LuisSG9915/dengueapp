import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { InputBox } from '../../components/InputBox';
import { styles } from '../../theme/appTheme';
import { PanelSuperior } from '../../components/PanelSuperior';

export const VisualizarUsuarios = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Use Effect para el cambio del header de navegación
  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: 'Home',

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

  useEffect(() => {
    fetchData('https://randomuser.me/api/?results=20');
  }, []);

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
  return (
    <ScrollView>
      <PanelSuperior>
        {filteredData.map((item, index) => {
          return (
            <View key={index} style={stylesX.itemContainer}>
              <Image
                source={{
                  uri: item.picture.large,
                }}
                style={stylesX.image}
              />
              <Text style={stylesX.textName}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        })}
      </PanelSuperior>
      <Text style={stylesX.textFriends}>Amigos</Text>
    </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
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
