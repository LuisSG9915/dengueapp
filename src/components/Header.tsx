import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StatusBarAnimation, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
interface Props {
  texto: string;
}
export default function Header({texto}: Props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.header,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.headerTexto}> {texto} </Text>
    </View>
  );
}
