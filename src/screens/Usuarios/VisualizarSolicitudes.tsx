import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SmallCard } from '../../components/SmallCard';
import { ScrollView } from 'react-native-gesture-handler';
import { PanelSuperior } from '../../components/PanelSuperior';

/**
 * TODO: Realizar peticiones de los usuarios para recuperar las contraseñas
 * TODO: Realizar funcionar el botón para visualizar bien
 */
export const VisualizarSolicitudes = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'rgb(87, 87, 86)',
          // backgroundColor: 'red',
          flex: 7,
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'space-evenly',
        }}
      >
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
        <View
          style={{
            width: '65%',
            height: '10%',
            marginTop: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            shadowColor: 'pink',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 8,
          }}
        >
          {/* <Text>Municipio: Xalapa </Text>
          <Text>Estdo de gravedad: Alta</Text>
          <Text>Cantidad de huevecillos registradas: 25,000</Text>
          <Text>Cantidad de : 25,000</Text> */}
          <Text>Tipo de solicitud: Edición de usuario </Text>
          <Text>Fecha de solicitud: 10/07/2022</Text>
          <Text>
            Nombre del que solicitó: Gustavo Antonio Pérez Gil Cervantes
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
