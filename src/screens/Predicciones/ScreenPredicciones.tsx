import { View, StyleSheet, Button, Dimensions, Text } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';
import { ContextPrueba } from '../../ContextPrueba';
import { styles } from '../../theme/appTheme';

import { LineChart } from 'react-native-chart-kit';

export const ScreenPredicciones = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [ovitrampasPeticion, setOvitrampasPeticion] = useState([]);
  const [BASE_JURSDICCION, setBASE_JURSDICCION] = useState('ovitrampas');
  const { setRefreshing, userInfo, jursidición } = useContext(ContextPrueba);
  const [selectedValue, setSelectedValue] = useState(
    'Seleccione la jurisdicción'
  );
  const date = 'jursidicciones';
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

  const dataXalapa = {
    labels: [
      'Ene ',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    datasets: [
      {
        data: [45, 26, 20, 4, 16, 61, 23, 20, 45, 29, 65, 26],
      },
    ],
  };
  const dataAltoLucero = {
    labels: [
      'Ene ',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    datasets: [
      {
        data: [58, 26, 20, 43, 50, 29, 65, 26, 4, 16, 61, 23],
      },
    ],
  };
  const dataTampico = {
    labels: [
      'Ene ',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    datasets: [
      {
        data: [22, 26, 44, 55, 50, 40, 50, 26, 5, 25, 35, 23],
      },
    ],
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <ScrollView style={{ backgroundColor: 'rgb(87, 87, 86)' }}>
      <View
        style={{
          backgroundColor: 'rgb(87, 87, 86)',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 555,
        }}
      >
        {userInfo == 'Directivo' ? (
          <View
            style={{
              width: '100%',
              marginLeft: '5%',
              backgroundColor: 'rgb(87, 87, 86)',
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={{ height: 60, width: '95%', backgroundColor: 'white' }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="XALAPA" value="XALAPA" />
              <Picker.Item label="COSAMALOAPAN" value="COSAMALOAPAN" />
              <Picker.Item
                label="MARTINEZ DE LA TORRE"
                value="MARTINEZ DE LA TORRE"
              />
              <Picker.Item label="PANUCO" value="PANUCO" />
              <Picker.Item label="POZA RICA" value="POZA RICA" />
              <Picker.Item label="TUXPAM" value="TUXPAM" />
              <Picker.Item label="VERACRUZ" value="VERACRUZ" />
            </Picker>
          </View>
        ) : null}
        {jursidición == 'Xalapa' || selectedValue == 'XALAPA' ? (
          <>
            <Predicción
              data={dataXalapa}
              opacity={1}
              Municipio={'Xalapa'}
              Estado={'Normal'}
              CantidadHuevecillos={'55011'}
              Ovitrampas={'1200'}
            />
            <Predicción
              data={dataAltoLucero}
              opacity={1}
              Municipio={'Alto lucero'}
              Estado={'Medio'}
              CantidadHuevecillos={'2500'}
              Ovitrampas={'150'}
            />
          </>
        ) : jursidición == 'Panuco' || selectedValue == 'PANUCO' ? (
          <Predicción
            data={dataAltoLucero}
            opacity={1}
            Municipio={'Panuco'}
            Estado={'Normal'}
            CantidadHuevecillos={'100'}
            Ovitrampas={'50'}
          />
        ) : jursidición == 'Coatzacoalcos' ? (
          <Predicción
            data={dataAltoLucero}
            opacity={1}
            Municipio={'Choapas'}
            Estado={'Normal'}
            CantidadHuevecillos={'25'}
            Ovitrampas={'15'}
          />
        ) : jursidición == 'Cosamaloapan' ? (
          <Predicción
            data={dataAltoLucero}
            opacity={1}
            Municipio={'Cosamaloapan'}
            Estado={'Normal'}
            CantidadHuevecillos={'25'}
            Ovitrampas={'15'}
          />
        ) : (
          <>
            <Predicción
              data={dataXalapa}
              opacity={1}
              Municipio={'Xalapa'}
              Estado={'Normal'}
              CantidadHuevecillos={'55011'}
              Ovitrampas={'1200'}
            />
            <Predicción
              data={dataAltoLucero}
              opacity={1}
              Municipio={'Alto lucero'}
              Estado={'Medio'}
              CantidadHuevecillos={'2500'}
              Ovitrampas={'150'}
            />
            <Predicción
              data={dataAltoLucero}
              opacity={1}
              Municipio={'Panuco'}
              Estado={'Normal'}
              CantidadHuevecillos={'100'}
              Ovitrampas={'50'}
            />
            <Predicción
              data={dataAltoLucero}
              opacity={1}
              Municipio={'Choapas'}
              Estado={'Normal'}
              CantidadHuevecillos={'25'}
              Ovitrampas={'15'}
            />
            <Predicción
              data={dataAltoLucero}
              opacity={1}
              Municipio={'Cosamaloapan'}
              Estado={'Normal'}
              CantidadHuevecillos={'25'}
              Ovitrampas={'15'}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};
function Predicción({
  data,
  opacity,
  Municipio,
  Estado,
  CantidadHuevecillos,
  Ovitrampas,
}) {
  return (
    <>
      <View style={styles.graphicTitle}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          Gráfico de predicciones {Municipio}
        </Text>
      </View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width * 0.9} // from react-native
        height={255} // xAxisLabel="Fecha"
        yAxisLabel=""
        yAxisSuffix="%"
        fromNumber={100}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'rgb(178, 56, 45)',
          backgroundGradientFrom: 'black',
          backgroundGradientTo: 'grey',
          decimalPlaces: 2,
          // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginTop: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.containerText}>
        <Text style={styles.textSmall}>Municipio: {Municipio} </Text>
        <Text style={styles.textSmall}>Estdo de gravedad: {Estado}</Text>
        <Text style={styles.textGrande}>
          Cantidad de huevecillos registradas: {CantidadHuevecillos}
        </Text>
        <Text style={styles.textGrande}>
          Cantidad de ovitrampas instaladas: {Ovitrampas}
        </Text>
      </View>
    </>
  );
}
