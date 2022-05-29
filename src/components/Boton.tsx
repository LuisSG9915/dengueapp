import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../theme/appTheme';
interface Props {
  texto: string;
  icon: string;
  //   paddingRightText: number;
  onPress?: () => {};
}

export const Boton = ({
  texto = 'Iniciar sesión',
  onPress,
  icon = '',
}: //   paddingRightText,
Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={onPress} style={{}}>
        <View
          style={{
            ...styles.botonBox,
            paddingHorizontal: 60,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name={icon}
            size={27}
            color="grey"
            style={{
              position: 'absolute',
              marginLeft: 20,
              left: 2,
            }}
          />
          <Text
            style={{
              ...styles.botonText,
              fontSize: 16,
            }}
          >
            {texto}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
