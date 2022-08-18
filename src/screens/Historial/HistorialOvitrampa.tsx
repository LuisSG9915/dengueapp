import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';
import { Picker } from '@react-native-picker/picker';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BASE_URL } from '../../config';
import OvitrampasList from '../../components/OvitrampasList';
import { ContextPrueba } from '../../ContextPrueba';

export const HistorialOvitrampa = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [ovitrampasPeticion, setOvitrampasPeticion] = useState([]);
  const [BASE_JURSDICCION, setBASE_JURSDICCION] = useState('ovitrampas');
  const { setRefreshing, userInfo, jursidición } = useContext(ContextPrueba);
  const date = 'jursidicciones';

  const pickerData = (dato: any[]) => {
    return (
      dato?.length > 0 &&
      dato.map((val, index) => (
        <Picker.Item label={val} value={val} key={index} />
      ))
    );
  };

  // Datos del picker
  const jursdicciones = (value: React.SetStateAction<any[]>) => {
    setValue(value);
    // En caso de seleccionar una jurisdicción realizo un cambio en la petición
    setBASE_JURSDICCION(date);
    mostrarOvitrampa();
  };

  const jurisdiccion = [
    'XALAPA',
    'COATZACOALCOS',
    'COSAMALOAPAN',
    'MARTÍNEZ DE LA TORRE',
    'PANUCO',
    'POZA RICA',
    'TUXPAN',
    'VERACRUZ',
  ];
  const mostrarOvitrampa = async () => {
    // setIsLoading(true);
    await axios
      // 168.XXX.XXX.XXX/
      .get(`${BASE_URL}/${BASE_JURSDICCION}/${value}`)
      .then(res => {
        const ovitrampas = res.data;
        setOvitrampasPeticion(ovitrampas);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        console.log(BASE_URL, BASE_JURSDICCION, value);
      });

    console.log('e');
  };

  useEffect(() => {
    // Desde el login se verifica si se encuentra en alguno de estas jurisdicciones
    if (jursidición == 'Xalapa' || jursidición == 'Panuco') {
      setValue(jursidición);
    } else {
      // Valor inicial es vació
      setValue(value);
    }
    mostrarOvitrampa();
    // Sirve para actualizar la información de manera instántanea WTF estoy re confundido
    setBASE_JURSDICCION(date);
  }, [date, value]);

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(87, 87, 86)' }}>
      {userInfo == 'directivo' || userInfo == 'Directivo' ? (
        <View
          style={{
            paddingVertical: 5,
            backgroundColor: 'grey',
          }}
        >
          <Picker
            style={{ backgroundColor: 'white' }}
            selectedValue={value}
            onFocus={() => {}}
            onValueChange={(itemValue, itemIndex) => jursdicciones(itemValue)}
          >
            {pickerData(jurisdiccion)}
          </Picker>
        </View>
      ) : (
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
            // backgroundColor: 'white',
          }}
        >
          JURISDICCIÓN: {jursidición}
        </Text>
      )}

      <View style={stylesX.container}>
        {/* Tomo datos de la peticicón */}
        <OvitrampasList
          ovitrampasPeticion={ovitrampasPeticion}
        ></OvitrampasList>
      </View>
    </View>
  );
};

const stylesX = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: 'rgba(248, 248, 248,0.8)',
  },
  container: {
    backgroundColor: 'rgb(87, 87, 86)',
    flex: 1,
    paddingVertical: 22,
  },
});
