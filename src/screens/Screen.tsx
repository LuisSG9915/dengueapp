import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.panelSuperiorGris}>
        {/* FIXME: Insertar imagen */}
      </View>
      <View style={styles.panelInferiorRed}>
        <Text>Hola</Text>
      </View>
    </View>
  );
};
