import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Boton } from '../../components/Boton';
import { styles } from '../../theme/appTheme';
import { ContextPrueba } from '../../ContextPrueba';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const ScreenMenu = () => {
  const { userInfo } = useContext(ContextPrueba);
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <View style={styles.panelSuperiorGris}>
        <FontAwesomeIcon size={'65%'} icon={faUser} />
        {userInfo == 'Directivo' || userInfo == 'directivo' ? (
          <Text style={{ fontSize: 18, top: 20 }}>Usuario: directivo </Text>
        ) : (
          <Text style={{ fontSize: 18, top: 20 }}>Usuario: Operativo</Text>
        )}
      </View>

      <View style={styles.panelInferiorRed}>
        <Boton
          texto="Mapa"
          onPress={() => navigation.navigate('HomeMap')}
          icon="map"
        ></Boton>
        <Boton
          onPress={() => navigation.navigate('MetricsScreen')}
          texto="Métricas"
          icon="star"
          paddingRightIcon={-100}
        ></Boton>
        <Boton
          icon="history"
          onPress={() => navigation.navigate('HistorialOvitrampa')}
          texto="Historial"
        ></Boton>

        <Boton
          icon="search"
          onPress={() => navigation.navigate('ScreenPredicciones')}
          texto="Predicción"
        ></Boton>
      </View>
    </View>
  );
};
const stylesSamePage = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    fontFamily: 'Segoe UI',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'rgba(254, 254, 254, 255)',
    marginStart: 140,
    marginTop: 10,
  },
});
