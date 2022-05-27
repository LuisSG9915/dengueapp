import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props {
  texto: string;
}

export const SmallCard = ({ texto }: Props) => {
  return (
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
      <Text style={styles.botonText}>{texto}</Text>
    </View>
  );
};
