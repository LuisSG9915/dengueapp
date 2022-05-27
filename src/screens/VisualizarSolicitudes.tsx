import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SmallCard } from '../components/SmallCard';
import { ScrollView } from 'react-native-gesture-handler';
import { PanelSuperior } from '../components/PanelSuperior';

export const VisualizarSolicitudes = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <PanelSuperior>
        <SmallCard texto={'Cargando'}></SmallCard>
      </PanelSuperior>
    </ScrollView>
  );
};
