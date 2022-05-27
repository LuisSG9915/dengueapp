import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const ContraseñaBox = () => {
  return (
    <View style={styles.inputMargin}>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}> Contraseña </Text>
        {/* TODO: Insertar botón de ver contraseña */}
      </View>
    </View>
  );
};
