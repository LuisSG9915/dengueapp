import * as React from 'react';
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import MapView, {
  Marker,
  Polygon,
  Geojson,
  Circle,
  Callout,
} from 'react-native-maps';
import { Boton } from '../../components/Boton';
import Search from '../../components/Search';

export const HomeMap = () => {
  const [origin, setOrgin] = React.useState({
    latitude: 19.540387,
    longitude: -96.916646,
  });
  const [destination, setDestination] = React.useState({
    latitude: 19.177414,
    longitude: -96.156084,
  });
  const [originDelta, setOriginDelta] = React.useState({
    latitudeDelta: 0.2143,
    longitudeDelta: 0.2134,
  });
  var path = [
    [-12.040397656836609, -77.03373871559225],
    [-12.040248585302038, -77.03993927003302],
    [-12.050047116528843, -77.02448169303511],
    [-12.044804866577001, -77.02154422636042],
  ];

  const myPlace = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [19.59, -96.916646],
        },
      },
    ],
  };
  function aaa() {
    const latitude = 19.540387;
    const longitude = 96.916646;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Boton
          texto={'Pesioname'}
          icon={'Map'}
          onPress={() => {
            aaa();
          }}
        ></Boton>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: originDelta.latitudeDelta,
            longitudeDelta: originDelta.longitudeDelta,
          }}
          showsUserLocation
          loadingEnabled
        >
          <Marker
            coordinate={origin}
            title={'Zona en riesgo'}
            description={'red case'}
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
                    // height: 80,
                  }}
                >
                  <Text> Estado del brote: Grave, favor de actuar rapido </Text>
                  <Text> Municipio: Xalapa</Text>
                  <Text> Cantidad de huevecillos: 30000</Text>
                </View>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{ latitude: 19.540387, longitude: -96.916646 }}
          ></Marker>

          <Polygon
            coordinates={[
              { latitude: 19.5796848, longitude: -96.9330597 },
              { latitude: 19.5568785, longitude: -96.9643021 },
              { latitude: 19.5300244, longitude: -96.9366646 },
              { latitude: 19.5195081, longitude: -96.8982124 },
              { latitude: 19.5431285, longitude: -96.890316 },
              { latitude: 19.5615694, longitude: -96.8868828 },
            ]}
            fillColor={'rgba(245, 236, 39, 0.25)'}
            tappable={true}
            onPress={() => {
              aaa();
            }}
          ></Polygon>
          {/* <Geojson
          geojson={myPlace}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
        /> */}
        </MapView>
        <Search></Search>
      </View>
    </View>
  );
};
export default HomeMap;

// function aaa(
//   setOriginDelta: React.Dispatch<
//     React.SetStateAction<{ latitudeDelta: number; longitudeDelta: number }>
//   >,
//   originDelta: { latitudeDelta: number; longitudeDelta: number }
// ) {
//   setOriginDelta({
//     ...originDelta,
//     latitudeDelta: 0.7,
//     longitudeDelta: 0.7,
//   });
// }
