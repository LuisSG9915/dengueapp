import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StatusBarAnimation, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { useHistory } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  texto: string;
  state?: boolean;
}
export default function Header({ texto, state = true }: Props) {
  const history = useHistory();
  const Boton = (
    <Icon
      name={'angle-left'}
      size={27}
      color="white"
      style={{
        position: 'relative',
        marginLeft: 20,
        left: 2,
      }}
    />
  );
  return (
    <View
      style={{
        ...styles.header,
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        // height: '55%',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          history.goBack();
        }}
      >
        {state == true && Boton}
        {/* <View style={{ flexDirection: 'column' }}> */}

        {/* </View> */}
      </TouchableOpacity>
      <Text style={styles.headerTexto}> {texto} </Text>
    </View>
  );
}
