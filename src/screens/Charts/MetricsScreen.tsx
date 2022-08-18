import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';
import { styles } from '../../theme/appTheme';
import { PanelSuperior } from '../../components/PanelSuperior';

const MetricsScreen = () => {
  // En el data ingresar los datos correspondientes ovitrampas, huevecillos, larvas y moscos
  return (
    <ScrollView>
      <PanelSuperior>
        <View>
          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
              borderRadius: 15,
            }}
          >
            <Text style={{ ...styles.botonText, textAlign: 'center' }}>
              Numero de ovitrampas instaladas en las jurisdicciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['Febrero', 'Marzo', 'Mayo', 'Junio', 'Julio'],
              datasets: [
                {
                  data: [461, 1281, 705, 132, 97],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel=""
            fromZero={true}
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'grey',
              decimalPlaces: 2, // optional, defaults to 2dp
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
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
              borderRadius: 15,
            }}
          >
            <Text style={{ ...styles.botonText, textAlign: 'center' }}>
              Numero de huevecillos en todas las jurisdicciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
              datasets: [
                {
                  data: [6467, 1965, 1901, 19267, 21843],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=""
            fromZero={true}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'grey',
              decimalPlaces: 2, // optional, defaults to 2dp
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
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 15,
            }}
          >
            <Text style={{ ...styles.botonText, textAlign: 'center' }}>
              Numero de moscos hallados en todos las jurisdicciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
              datasets: [
                {
                  data: [362, 48, 4, 60, 96],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            fromZero={true}
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'grey',
              decimalPlaces: 2, // optional, defaults to 2dp
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
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 15,
            }}
          >
            <Text style={{ ...styles.botonText, textAlign: 'center' }}>
              Numero de larvas en todas las jursidcciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
              datasets: [
                {
                  data: [1742, 301, 28, 2170, 1892],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            fromZero={true}
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',

              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'grey',
              decimalPlaces: 2, // optional, defaults to 2dp
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
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </PanelSuperior>
    </ScrollView>
  );
};

export default MetricsScreen;
