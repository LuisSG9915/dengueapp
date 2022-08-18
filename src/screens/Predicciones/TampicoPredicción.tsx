import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from '../../theme/appTheme';

export function TampicoPredicción({ opacity }) {
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
          Gráfico de predicciones Tampico
        </Text>
      </View>
      <LineChart
        data={{
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
        }}
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
        <Text style={styles.textSmall}>Municipio: Tampico </Text>
        <Text style={styles.textSmall}>Porcentaje de predicción: 25%</Text>
        <Text style={styles.textSmall}>Estdo de gravedad: Alta</Text>
        <Text style={styles.textGrande}>
          Cantidad de huevecillos registradas: 25,000
        </Text>
        <Text style={styles.textGrande}>
          Cantidad de ovitrampas instaladas: 25,000
        </Text>
      </View>
    </>
  );
}
