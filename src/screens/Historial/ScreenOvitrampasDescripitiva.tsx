import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config';
import axios from 'axios';
import VisitasItems from '../../components/VisitasItems';

const ScreenOvitrampasDescripitiva = ({ route }) => {
  useEffect(() => {
    if (route.params && route.params.id) {
      // Pasamos los parametros a la hora de entrar
      ovitrampaDescription(route.params.id);
      visitas(route.params.clave);
      console.log(route.params.clave);
    }
  }, []);

  // Petición de descripción de ovitrampas
  const ovitrampaDescription = async (id: any) => {
    await axios
      .get(`${BASE_URL}/ovitrampaDescription/${id}`)
      .then(res => {
        const ovitrampas = res.data[0];
        setReqOvitrampas(ovitrampas);
      })
      .catch(e => {
        console.log(`register error ${e}`);
      });
  };
  const visitas = async (clave: any) => {
    await axios
      .get(`${BASE_URL}/visitas/${clave}`)
      .then(res => {
        const visitas = res.data;
        setReqVisitas(visitas);
        console.log('****************************************+', visitas);
      })
      .catch(e => {
        console.log(`register error ${e}`);
      });
  };
  // ovitrampas
  const [reqOvitrampas, setReqOvitrampas] = useState({});
  const [reqvisitas, setReqVisitas] = useState({});

  const renderItem = ({ item }) => {
    return <VisitasItems task={item} />;
  };

  return (
    <View style={styles.panelSuperior}>
      <View style={styles.container}>
        <Text style={styles.textFriends}>
          Clave ovitrampa: {reqOvitrampas.Clave}
        </Text>
        <Text style={styles.textName}>
          Capturista: {reqOvitrampas.Capturista}
        </Text>
        <Text style={styles.textName}>
          Dueño de la ovitrampa: {reqOvitrampas.Usuario}
        </Text>
        <Text style={styles.textName}>
          Fecha de instalación: {reqOvitrampas.Fecha}
        </Text>
        <Text style={styles.textName}>
          Jurisdiccion: {reqOvitrampas.Jurisdicción}
        </Text>
        <Text style={styles.textName}>
          Municipio: {reqOvitrampas.Municipio}
        </Text>
        <Text style={styles.textName}>
          Localidad: {reqOvitrampas.Localidad}
        </Text>
        <Text style={styles.textName}>Colonia: {reqOvitrampas.Colonia}</Text>
        <Text style={styles.textName}>Calle: {reqOvitrampas.Calle}</Text>
      </View>

      <View
        style={{
          height: '25%',
          width: '100%',
          bottom: '10%',
        }}
      >
        <FlatList
          horizontal
          data={reqvisitas}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: 'grey',
                  marginHorizontal: 22,
                  borderRadius: 25,
                  padding: 15,
                }}
              >
                <Text style={styles.textVisitas}>Fecha de visita</Text>
                <Text style={styles.textVisitasPequeño}>{item.Fecha}</Text>
                <Text style={styles.textVisitas}>Estado de la ovitrampa</Text>
                <Text style={styles.textVisitasPequeño}>{item.Estado}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}
                >
                  <View>
                    <Text>Huevecillos: </Text>
                    <Text style={styles.textVisitasPequeño}>
                      {item.No_Huevos}
                    </Text>
                  </View>
                  {item.Estado == 'ACTIVA' ? (
                    <>
                      <View>
                        <Text>Larvas: </Text>
                        <Text style={styles.textVisitasPequeño}>
                          {item.No_Larvas}
                        </Text>
                      </View>
                      <View>
                        <Text>Moscos: </Text>
                        <Text style={styles.textVisitasPequeño}>
                          {item.No_Moscos}
                        </Text>
                      </View>
                    </>
                  ) : null}
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => {
            return (
              item.id +
              '' +
              new Date().getTime().toString() +
              Math.floor(
                Math.random() * Math.floor(new Date().getTime())
              ).toString()
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '50%',
    backgroundColor: 'rgba(248, 248, 248,0.8)',
    borderRadius: 15,
    bottom: '5%',

    marginLeft: 10,
    marginTop: 10,
    marginVertical: 5,
    paddingVertical: 8,
    paddingLeft: 10,
    padding: 20,
  },
  panelSuperior: {
    backgroundColor: 'rgb(87, 87, 86)',
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textFriends: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textName: {
    fontSize: 21,
    top: 8,
    left: 5,
    textAlign: 'left',
  },
  textVisitas: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textVisitasPequeño: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ScreenOvitrampasDescripitiva;
