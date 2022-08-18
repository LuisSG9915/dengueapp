import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker, Polygon, Callout } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import { ContextPrueba } from '../../ContextPrueba';
import {
  xalapaCoordinates,
  tlanelhoyocnCoordinates,
  panucoCoordinates,
  martindezCoordinates,
  tihuatlanCoordinates,
  altoLuceroCoordinates,
  choapasCoordinates,
  coatzintlaCoordinates,
  cosamaloapanCoordinates,
  maniloCoordinates,
  moralilloCoordinates,
  tuxpamCoordinates,
  pozaRicaCoordinates,
} from '../../Coordinates';

export const HomeMap = () => {
  const { userInfo, jursidición } = useContext(ContextPrueba);
  const [selectedValue, setSelectedValue] = useState(
    'Seleccione la jurisdicción'
  );

  const B = props => (
    <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  );

  const [origenLatitude, setorigenLatitude] = useState(19.540387);
  const [origenLongitude, setorigenLongitude] = useState(-96.916646);
  const [originDelta, setOriginDelta] = useState({
    latitudeDelta: 0.2143,
    longitudeDelta: 0.2134,
  });

  // Puntos de cada municipio
  const originXalapa = { latitude: 19.53124, longitude: -96.91589 };
  const origintlanelhoyocn = { latitude: 19.53471, longitude: -96.993073 };
  const originPanuco = { latitude: 22.05373, longitude: -98.18498 };
  const originTihuattlan = { latitude: 20.71449, longitude: -97.53335 };
  const originAltoLucero = { latitude: 19.624722, longitude: -96.73416 };
  const originMartinez = { latitude: 20.07082, longitude: -97.06078 };
  const originChoapas = { latitude: 17.91177, longitude: -94.09646 };
  const originCoatzintla = { latitude: 20.48699, longitude: -97.46823 };
  const originCosamaloapan = { latitude: 18.36759, longitude: -95.79857 };
  const originMoralillo = { latitude: 22.22552, longitude: -97.91213 };
  const originManilo = { latitude: 19.09425, longitude: -96.33351 };
  const originTuxpam = { latitude: 20.95777, longitude: -97.40805 };
  const originPozaRica = { latitude: 20.53315, longitude: -97.45946 };

  useEffect(() => {
    if (selectedValue == 'XALAPA') {
      setorigenLatitude(originXalapa.longitude);
      setorigenLongitude(originXalapa.latitude);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'COSAMALOAPAN') {
      setorigenLatitude(originCosamaloapan.latitude);
      setorigenLongitude(originCosamaloapan.longitude);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'MARTINEZ DE LA TORRE') {
      setorigenLatitude(20.066666666667);
      setorigenLongitude(-97.05);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'PANUCO') {
      setorigenLatitude(22.0537);
      setorigenLongitude(-98.18498);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'POZA RICA') {
      setorigenLatitude(20.53315);
      setorigenLongitude(-97.45946);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'TUXPAM') {
      setorigenLatitude(20.95773);
      setorigenLongitude(-97.40798);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    }
    if (selectedValue == 'VERACRUZ') {
      setorigenLatitude(19.18095);
      setorigenLongitude(-96.1429);
      setOriginDelta({ latitudeDelta: 0.5, longitudeDelta: 0.5 });
    } else {
      console.log('nada');
    }
  }, [selectedValue, selectedValue]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      {userInfo == 'directivo' || userInfo == 'Directivo' ? (
        <View
          style={{
            backgroundColor: 'white',
            width: '60%',
            height: '5.6%',
            borderRadius: 22,
            left: '20 %',
          }}
        >
          <Picker
            selectedValue={selectedValue}
            style={{ height: 60, width: '95%' }}
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
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          // Creo es la posicion
          latitude: origenLatitude,
          longitude: origenLongitude,

          latitudeDelta: originDelta.latitudeDelta,
          longitudeDelta: originDelta.longitudeDelta,
        }}
        region={{
          latitude: origenLatitude,
          longitude: origenLongitude,

          latitudeDelta: originDelta.latitudeDelta,
          longitudeDelta: originDelta.longitudeDelta,
        }}
        showsUserLocation
        loadingEnabled
      >
        {jursidición == 'Xalapa' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originXalapa}
              tipoEstado={'Medio'}
              nombreMunicipio={'Xalapa'}
              cantidadHuevecillos={'3459'}
            />
            <Polygon
              coordinates={xalapaCoordinates}
              fillColor={'red'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originAltoLucero}
              tipoEstado={'Medio'}
              nombreMunicipio={'Alto Lucero'}
              cantidadHuevecillos={'5555'}
            />
            <Polygon
              coordinates={altoLuceroCoordinates}
              fillColor={'black'}
            ></Polygon>

            <MarkerPersonalizado
              origin={origintlanelhoyocn}
              tipoEstado={'Medio: '}
              nombreMunicipio={'tlanelhoyocn'}
              cantidadHuevecillos={'5453'}
            />

            <Polygon
              coordinates={tlanelhoyocnCoordinates}
              fillColor={'red'}
            ></Polygon>
          </>
        ) : jursidición == 'Panuco' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originPanuco}
              tipoEstado={'Medio'}
              nombreMunicipio={'Panuco'}
              cantidadHuevecillos={'30000'}
            />
            <Polygon
              coordinates={panucoCoordinates}
              fillColor={'yellow'}
            ></Polygon>
          </>
        ) : jursidición == 'Tuxpam' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originTuxpam}
              tipoEstado={'Normal'}
              nombreMunicipio={'Tuxpam'}
              cantidadHuevecillos={'3322'}
            />
            <Polygon
              coordinates={tuxpamCoordinates}
              fillColor={'yellow'}
            ></Polygon>
          </>
        ) : jursidición == 'Poza Rica' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originTihuattlan}
              tipoEstado={'Medio'}
              nombreMunicipio={'Tihuattlan'}
              cantidadHuevecillos={'2555'}
            />
            <Polygon
              coordinates={tihuatlanCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originCoatzintla}
              tipoEstado={'Normal'}
              nombreMunicipio={'Coatzintla'}
              cantidadHuevecillos={'2424'}
            />
            <Polygon
              coordinates={coatzintlaCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originPozaRica}
              tipoEstado={'Normal'}
              nombreMunicipio={'Poza rica'}
              cantidadHuevecillos={'4423'}
            />
            <Polygon
              coordinates={pozaRicaCoordinates}
              fillColor={'green'}
            ></Polygon>
          </>
        ) : jursidición == 'Martinez de la torre' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originMartinez}
              tipoEstado={'Medio'}
              nombreMunicipio={'Martinez de la torre'}
              cantidadHuevecillos={'45555'}
            />
            <Polygon
              coordinates={martindezCoordinates}
              fillColor={'red'}
            ></Polygon>
          </>
        ) : jursidición == 'Cosamaloapan' || userInfo == 'Operativo' ? (
          <>
            <MarkerPersonalizado
              origin={originCosamaloapan}
              tipoEstado={'Medio'}
              nombreMunicipio={'Cosamaloapan'}
              cantidadHuevecillos={'5555'}
            />
            <Polygon
              coordinates={cosamaloapanCoordinates}
              fillColor={'rgba(255, 237, 0, 0.2)'}
            ></Polygon>
          </>
        ) : jursidición == 'Coatzacoalcos' || userInfo == 'Operativo' ? (
          <>
            <Polygon
              coordinates={choapasCoordinates}
              fillColor={'rgba(255, 237, 0, 0.2)'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originMoralillo}
              tipoEstado={'Medio'}
              nombreMunicipio={'Moralillo'}
              cantidadHuevecillos={'2555'}
            />
            <Polygon
              coordinates={moralilloCoordinates}
              fillColor={'red'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originManilo}
              tipoEstado={'Medio'}
              nombreMunicipio={'Manilo'}
              cantidadHuevecillos={'2544'}
            />
            <Polygon
              coordinates={maniloCoordinates}
              fillColor={'red'}
            ></Polygon>
          </>
        ) : (
          <>
            <MarkerPersonalizado
              origin={originXalapa}
              tipoEstado={'Medio'}
              nombreMunicipio={'Xalapa'}
              cantidadHuevecillos={'3459'}
            />
            <Polygon
              coordinates={xalapaCoordinates}
              fillColor={'red'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originAltoLucero}
              tipoEstado={'Medio'}
              nombreMunicipio={'Alto Lucero'}
              cantidadHuevecillos={'5555'}
            />
            <Polygon
              coordinates={altoLuceroCoordinates}
              fillColor={'black'}
            ></Polygon>

            <MarkerPersonalizado
              origin={origintlanelhoyocn}
              tipoEstado={'Medio: '}
              nombreMunicipio={'tlanelhoyocn'}
              cantidadHuevecillos={'5453'}
            />

            <Polygon
              coordinates={tlanelhoyocnCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originPanuco}
              tipoEstado={'Medio'}
              nombreMunicipio={'Panuco'}
              cantidadHuevecillos={'30000'}
            />
            <Polygon
              coordinates={panucoCoordinates}
              fillColor={'yellow'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originTuxpam}
              tipoEstado={'Normal'}
              nombreMunicipio={'Tuxpam'}
              cantidadHuevecillos={'3322'}
            />
            <Polygon
              coordinates={tuxpamCoordinates}
              fillColor={'yellow'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originTihuattlan}
              tipoEstado={'Medio'}
              nombreMunicipio={'Tihuattlan'}
              cantidadHuevecillos={'2555'}
            />
            <Polygon
              coordinates={tihuatlanCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originCoatzintla}
              tipoEstado={'Normal'}
              nombreMunicipio={'Coatzintla'}
              cantidadHuevecillos={'2424'}
            />
            <Polygon
              coordinates={coatzintlaCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originPozaRica}
              tipoEstado={'Normal'}
              nombreMunicipio={'Poza rica'}
              cantidadHuevecillos={'4423'}
            />
            <Polygon
              coordinates={pozaRicaCoordinates}
              fillColor={'green'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originMartinez}
              tipoEstado={'Medio'}
              nombreMunicipio={'Martinez de la torre'}
              cantidadHuevecillos={'45555'}
            />
            <Polygon
              coordinates={martindezCoordinates}
              fillColor={'red'}
            ></Polygon>
            <MarkerPersonalizado
              origin={originCosamaloapan}
              tipoEstado={'Medio'}
              nombreMunicipio={'Cosamaloapan'}
              cantidadHuevecillos={'5555'}
            />
            <Polygon
              coordinates={cosamaloapanCoordinates}
              fillColor={'rgba(255, 237, 0, 0.2)'}
            ></Polygon>
            <Polygon
              coordinates={choapasCoordinates}
              fillColor={'rgba(255, 237, 0, 0.2)'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originMoralillo}
              tipoEstado={'Medio'}
              nombreMunicipio={'Moralillo'}
              cantidadHuevecillos={'2555'}
            />
            <Polygon
              coordinates={moralilloCoordinates}
              fillColor={'red'}
            ></Polygon>

            <MarkerPersonalizado
              origin={originManilo}
              tipoEstado={'Medio'}
              nombreMunicipio={'Manilo'}
              cantidadHuevecillos={'2544'}
            />
            <Polygon
              coordinates={maniloCoordinates}
              fillColor={'red'}
            ></Polygon>
          </>
        )}
      </MapView>
    </View>
  );
};
export default HomeMap;

function MarkerPersonalizado({
  origin,
  tipoEstado,
  nombreMunicipio,
  cantidadHuevecillos,
}) {
  const B = props => (
    <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  );
  return (
    <Marker
      coordinate={origin}
      title={'Zona en riesgo'}
      description={'red case'}
      style={{
        backgroundColor: 'black',
      }}
    >
      <Callout tooltip>
        <View>
          <View
            style={{
              flexDirection: 'column',
              alignSelf: 'flex-start',
              backgroundColor: 'white',
              borderRadius: 6,
              borderColor: '#CCC',
              borderWidth: 0.5,
              padding: 15,
            }}
          >
            <Text>
              <B>Estado: </B>
              {tipoEstado}
            </Text>
            <Text>
              <B>Municipio: </B>
              {nombreMunicipio}
            </Text>
            <Text>
              <B>Huevecillos: </B>
              {cantidadHuevecillos}
            </Text>
          </View>
        </View>
      </Callout>
    </Marker>
  );
}
