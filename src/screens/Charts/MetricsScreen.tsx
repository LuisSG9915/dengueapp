import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';
import { styles } from '../../theme/appTheme';
import { PanelSuperior } from '../../components/PanelSuperior';

const MetricsScreen = () => {
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
              Numero de huevecillos en todas las jurisdicciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=" Ov"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'white',
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
              Numero de ovitrampas instaladas en las jurisdicciones
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=" Ov"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'white',
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
              Numero de moscos hallados
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=" Ov"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'rgb(178, 56, 45)',
              backgroundGradientTo: 'white',
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
              Numero de ovitrampas instaladas
            </Text>
          </View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            // xAxisLabel="Fecha"
            yAxisLabel=""
            yAxisSuffix=" Ov"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: 'rgb(178, 56, 45)',
              backgroundGradientFrom: 'rgb(178, 56, 45)',
              backgroundGradientTo: 'white',
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
