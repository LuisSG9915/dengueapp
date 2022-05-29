import React, { useEffect, useState } from 'react';
import { Text, Touchable, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { styles } from '../theme/appTheme';

export const HistorialOvitrampa = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData('https://sheetdb.io/api/v1/mqnd7q0ct12hj');
  }, []);
  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header texto={'Ovitrampas'}></Header>
        <View style={styles.panelSuperiorGris}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => console.log(item.DOMICILIO)}
                key={index}
                style={{
                  ...styles.container,
                  height: 100,
                  // paddingVertical: 50,
                  // justifyContent: 'center',
                }}
              >
                <Text style={styles.botonText}>{item.DOMICILIO}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
