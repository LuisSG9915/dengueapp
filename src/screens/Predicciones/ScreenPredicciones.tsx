import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';
import { Picker } from '@react-native-picker/picker';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BASE_URL } from '../../config';
import OvitrampasList from '../../components/OvitrampasList';
import { ContextPrueba } from '../../ContextPrueba';

export const ScreenPredicciones = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [ovitrampasPeticion, setOvitrampasPeticion] = useState([]);
  const [BASE_JURSDICCION, setBASE_JURSDICCION] = useState('ovitrampas');
  const { setRefreshing } = useContext(ContextPrueba);
  const date = 'jursidicciones';

  const pickerData = (dato: any[]) => {
    return (
      dato?.length > 0 &&
      dato.map((val, index) => (
        <Picker.Item label={val} value={val} key={index} />
      ))
    );
  };

  const jursdicciones = (valor: React.SetStateAction<any[]>) => {
    setValue(valor);
    setBASE_JURSDICCION(date);
    // mostrarOvitrampa();
  };

  const jurisdiccion = [
    'coatxacoalcos',
    'córdoba',
    'cosamaloapan',
    'xalapa',
    'martinez de la torre',
    'orizaba',
    'panuco',
    'poza Rica',
    'san Andres Tuxtla',
    'tuxpan',
    'veracruz',
  ];
  // TODO Peticion del archivo JSON de Héctor
  const mostrarOvitrampa = async () => {
    // setIsLoading(true);
    await axios
      // .get(`${BASE_URL}/ovitrampas`)
      .get(`${BASE_URL}/${BASE_JURSDICCION}`)
      .then(res => {
        const ovitrampas = res.data;
        setOvitrampasPeticion(ovitrampas);
        console.log(ovitrampas);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        // setIsLoading(false);
      });
    setRefreshing(false);
  };

  useEffect(() => {
    mostrarOvitrampa();
    // Sirve para actualizar la información de manera instántanea WTF estoy re confundido
    setBASE_JURSDICCION(date);
  }, [date]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          // marginTop: 25,
          paddingVertical: 10,
          backgroundColor: 'grey',
        }}
      >
        <Picker
          style={{ backgroundColor: 'white' }}
          selectedValue={value}
          onFocus={() => {
            mostrarOvitrampa();

            // setRefreshing(true);
          }}
          onValueChange={(itemValue, itemIndex) => jursdicciones(itemValue)}
        >
          {pickerData(jurisdiccion)}
        </Picker>
      </View>
      <View style={stylesX.container}>
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
