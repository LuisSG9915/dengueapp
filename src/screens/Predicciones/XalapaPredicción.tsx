import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from '../../theme/appTheme';

export function XalapaPredicción({ opacity }) {
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
          Gráfico de predicciones Xalapa
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
              data: [45, 26, 20, 4, 16, 61, 23, 20, 45, 29, 65, 26],
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
        <Text style={styles.textSmall}>Municipio: Xalapa </Text>
        <Text style={styles.textSmall}>Estdo de gravedad: Medio</Text>
        <Text style={styles.textGrande}>
          Cantidad de huevecillos registradas: 25,000
        </Text>
        <Text style={styles.textGrande}>
          Cantidad de ovitrampas instaladas: 500
        </Text>
      </View>
    </>
  );
}
