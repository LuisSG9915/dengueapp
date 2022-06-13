import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';
import { SmallCard } from '../components/SmallCard';

export const ScreenGenPDF = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          backgroundColor: 'rgb(87, 87, 86)',
          flex: 15,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SmallCard texto="Se ha guardado el PDF en tu dispositivo "></SmallCard>
        {/*  */}
        <View style={{ marginBottom: '25%' }}>
          <Boton texto="Abrir PDF"></Boton>
          <Boton texto="Compartir" margins={50}></Boton>
        </View>
        {/*  */}
      </View>
    </View>
  );
};
