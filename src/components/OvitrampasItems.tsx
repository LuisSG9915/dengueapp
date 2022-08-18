import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * @param Nombre
 * @param Email
 */

const OvitrampasItems = ({ task }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      // Tomo el valor de task.ID para pasarlo a la otra pantalla y realizar la consulta
      onPress={() => {
        navigation.navigate('ScreenOvitrampasDescripitiva', {
          id: task.ID,
          clave: task.Clave,
        });
      }}
    >
      <View style={stylesX.itemContainer}>
        <Text style={stylesX.textFriends}>Clave:{task.Clave}</Text>
        <Text numberOfLines={1} style={{ bottom: 10, left: 5 }}>
          ________________________________________________
        </Text>
        <Text style={stylesX.textName}>{task.Fecha}</Text>
        <Text style={stylesX.textName}>{task.Municipio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesX = StyleSheet.create({
  textFriends: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    // marginLeft: 10,
    marginTop: 10,
    textAlignVertical: 'center',
  },

  itemContainer: {
    width: '75%',
    height: '90%',
    backgroundColor: 'rgba(248, 248, 248,0.8)',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    marginVertical: 5,
    paddingVertical: 8,
    paddingLeft: 10,
    padding: 20,
  },

  textName: {
    fontSize: 17,
    top: -8,
    // fontWeight: 'bold',
  },
});
export default OvitrampasItems;
