import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';
import { Alertas } from './src/screens/Usuarios/Alertas';
import { CrearUsuarios } from './src/screens/Usuarios/CrearUsuarios';
import { GestionarUsuarios } from './src/screens/Usuarios/GestionarUsuarios';
import { HistorialOvitrampa } from './src/screens/Historial/HistorialOvitrampa';
import { HomeMap } from './src/screens/Mapas/HomeMap';
import { ScreenGenPDF } from './src/screens/ScreenGenPDF';
import { ScreenLogin } from './src/screens/Login/ScreenLogin';
import { ScreenMenu } from './src/screens/Menu/ScreenMenu';
import { ScreenRevocerPass } from './src/screens/Login/ScreenRevocerPass';
import { VisualizarSolicitudes } from './src/screens/Usuarios/VisualizarSolicitudes';
import { VisualizarUsuarios } from './src/screens/Usuarios/VisualizarUsuarios';
import { Screen } from 'react-native-screens';
import ScreenFormPrueba from './src/screens/ScreenFormPrueba';
import MetricsScreen from './src/screens/Charts/MetricsScreen';

export type RootStackParams = {
  GestionarUsuarios: JSX.Element;
  HomeMap: JSX.Element;
  ScreenGenPDF: JSX.Element;
  ScreenLogin: JSX.Element;
  ScreenMenu: JSX.Element;
  ScreenRevocerPass: JSX.Element;
  CrearUsuarios: JSX.Element;
  VisualizarUsuarios: JSX.Element;
  VisualizarSolicitudes: JSX.Element;
  HistorialOvitrampa: JSX.Element;
  Alertas: JSX.Element;
  Screen: JSX.Element;
  ScreenRecoverPass: JSX.Element;
  ScreenFormPrueba: JSX.Element;
  MetricsScreen: JSX.Element;
};

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={loginStatus == false ? 'ScreenLogin' : 'ScreenMenu'}
        initialRouteName={'ScreenLogin'}
      >
        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ScreenRevocerPass"
          component={ScreenRevocerPass}
          options={{
            title: 'Recuperar contraseña',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="GestionarUsuarios"
          component={GestionarUsuarios}
          options={{
            title: 'Gestionar Usuarios',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HomeMap"
          component={HomeMap}
          options={{
            title: 'Mapa',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ScreenGenPDF"
          component={ScreenGenPDF}
          options={{
            title: 'Generación de PDF',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ScreenMenu"
          component={ScreenMenu}
          options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackButtonMenuEnabled: false,
          }}
        />
        <Stack.Screen
          name="CrearUsuarios"
          component={CrearUsuarios}
          options={{
            title: 'Crear usuarios',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="VisualizarUsuarios"
          component={VisualizarUsuarios}
          options={{
            title: 'Visualizar usuarios',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="VisualizarSolicitudes"
          component={VisualizarSolicitudes}
          options={{
            title: 'Visualizar solicitudes',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HistorialOvitrampa"
          component={HistorialOvitrampa}
          options={{
            title: 'Historial de ovitrampa',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Alertas"
          component={Alertas}
          options={{
            title: 'Alertas',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ScreenFormPrueba"
          component={ScreenFormPrueba}
          options={{
            title: 'ScreenFormPrueba',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ScreenRecoverPass"
          component={ScreenRevocerPass}
          options={{
            title: 'ScreenRecoverPass',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MetricsScreen"
          component={MetricsScreen}
          options={{
            title: 'MetricsScreen',
            headerStyle: {
              backgroundColor: 'rgb(178, 56, 45)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeRouter, Switch, Route } from 'react-router-native';
// import PropTypes from 'prop-types';
// import Home from './Home';
// import { ScreenMenu } from './src/screens/ScreenMenu';
// import HomeMap from './src/screens/HomeMap';
// import { ScreenLogin } from './src/screens/ScreenLogin';
// import { ScreenRevocerPass } from './src/screens/ScreenRevocerPass';
// import { ScreenIntermediario } from './src/screens/ScreenIntermediario';
// import { ScreenGenPDF } from './src/screens/ScreenGenPDF';
// import MetricsScreen from './src/screens/MetricsScreen';
// import { HistorialOvitrampa } from './src/screens/HistorialOvitrampa';
// import { GestionarUsuarios } from './src/screens/GestionarUsuarios';
// const App = () => {
//   return (
//     <NativeRouter>
//       {/* <Route path="/" exact render={(props: any) => <ScreenLogin />} />
//         <Route path="/Home" exact render={(props: any) => <Home />} />
//         <Route
//           path="/ScreenRevocerPass"
//           exact
//           render={(props: any) => <ScreenRevocerPass />}
//         />
//         <Route
//           path="/ScreenMenu"
//           exact
//           render={(props: any) => <ScreenMenu />}
//         /> */}
//       <View style={{ backgroundColor: 'grey', flex: 1 }}>
//         <Route exact path="/" component={ScreenLogin} />
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/ScreenRevocerPass" component={ScreenRevocerPass} />
//         <Route
//           exact
//           path="/ScreenIntermediario"
//           component={ScreenIntermediario}
//         />
//         <Route exact path="/ScreenMenu" component={ScreenMenu} />
//         <Route exact path="/HomeMap" component={HomeMap} />
//         <Route exact path="/MetricsScreen" component={MetricsScreen} />
//         <Route
//           exact
//           path="/HistorialOvitrampa"
//           component={HistorialOvitrampa}
//         />
//         {/* Historial de ovitrampas */}
//         <Route exact path="/GestionarUsuarios" component={GestionarUsuarios} />
//         <Route exact path="/ScreenGenPDF" component={ScreenGenPDF} />
//       </View>
//     </NativeRouter>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
// });
