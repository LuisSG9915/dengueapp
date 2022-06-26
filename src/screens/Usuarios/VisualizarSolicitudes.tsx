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
      <PanelSuperior>
        <SmallCard texto={'Cargando'}></SmallCard>
      </PanelSuperior>
    </ScrollView>
  );
};
