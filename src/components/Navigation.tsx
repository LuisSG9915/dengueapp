import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas
import { ContextPrueba } from '../ContextPrueba';
import MetricsScreen from '../screens/Charts/MetricsScreen';
import { HistorialOvitrampa } from '../screens/Historial/HistorialOvitrampa';
import { ScreenLogin } from '../screens/Login/ScreenLogin';
import { ScreenRevocerPass } from '../screens/Login/ScreenRevocerPass';
import HomeMap from '../screens/Mapas/HomeMap';
import { ScreenMenu } from '../screens/Menu/ScreenMenu';
import { ScreenPredicciones } from '../screens/Predicciones/ScreenPredicciones';
import { ScreenGenPDF } from '../screens/ScreenGenPDF';
import { Alertas } from '../screens/Usuarios/Alertas';
import { CrearUsuarios } from '../screens/Usuarios/CrearUsuarios';
import { GestionarUsuarios } from '../screens/Usuarios/GestionarUsuarios';
import { VisualizarSolicitudes } from '../screens/Usuarios/VisualizarSolicitudes';
import { VisualizarUsuarios } from '../screens/Usuarios/VisualizarUsuarios';
import { EditarUsuario } from '../screens/Usuarios/EditarUsuario';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ScreenOvitrampasDescripitiva from '../screens/Historial/ScreenOvitrampasDescripitiva';
import ScreenFormPrueba from '../screens/Login/ScreenFormPrueba';
import ScreenContraseña from '../screens/Login/ScreenContraseña';
import { ActualizarUsuario } from '../screens/Usuarios/ActualizarUsuario';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, logout, estadoRecuperacion } = useContext(ContextPrueba);
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName={loginStatus == false ? 'ScreenLogin' : 'ScreenMenu'}
      >
        {userInfo == 'normalUser' || userInfo == 'Operativo' ? (
          <>
            <Stack.Screen
              name="ScreenMenu"
              component={ScreenMenu}
              options={{
                title: 'Menú',
                headerStyle: {
                  backgroundColor: 'rgb(178, 56, 45)',
                },
                headerRight: () => <ExitBoton faDoorOpen={faDoorOpen} />,

                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackButtonMenuEnabled: false,
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
              name="MetricsScreen"
              component={MetricsScreen}
              options={{
                title: 'Métricas',
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
              name="ScreenPredicciones"
              component={ScreenPredicciones}
              options={{
                title: 'Predicciones',
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
              name="ScreenOvitrampasDescripitiva"
              component={ScreenOvitrampasDescripitiva}
              options={{
                title: 'Ovitrampa',
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
          </>
        ) : userInfo == 'directivo' ||
          userInfo == 'directivo ' ||
          userInfo == 'Directivo' ? (
          <>
            <Stack.Screen
              name="ScreenMenu"
              component={ScreenMenu}
              options={{
                title: 'Menú',
                headerStyle: {
                  backgroundColor: 'rgb(178, 56, 45)',
                },
                headerRight: () => <ExitBoton faDoorOpen={faDoorOpen} />,

                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackButtonMenuEnabled: false,
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
              name="ScreenPredicciones"
              component={ScreenPredicciones}
              options={{
                title: 'Predicciones',
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
              name="MetricsScreen"
              component={MetricsScreen}
              options={{
                title: 'Métricas',
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
              name="ScreenOvitrampasDescripitiva"
              component={ScreenOvitrampasDescripitiva}
              options={{
                title: 'Ovitrampa',
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
              name="EditarUsuario"
              component={EditarUsuario}
              options={{
                title: 'Editar usuario',
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
          </>
        ) : userInfo == 'Admin' ? (
          <>
            <Stack.Screen
              name="GestionarUsuarios"
              component={GestionarUsuarios}
              options={{
                title: 'Gestionar Usuarios',
                headerRight: () => <ExitBoton faDoorOpen={faDoorOpen} />,
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
              name="EditarUsuario"
              component={EditarUsuario}
              options={{
                title: 'Editar usuarios',
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
              name="ActualizarUsuario"
              component={ActualizarUsuario}
              options={{
                title: 'Actualizar usuario',
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
          </>
        ) : (
          <>
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
              name="ScreenFormPrueba"
              component={ScreenFormPrueba}
              options={{
                title: 'Código Recuperación',
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
              name="ScreenContraseña"
              component={ScreenContraseña}
              options={{
                title: 'Contraseña nueva',
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

function ExitBoton({ faDoorOpen }) {
  const { userInfo, logout } = useContext(ContextPrueba);

  return (
    <TouchableOpacity
      style={{
        // backgroundColor: 'red',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        logout();
      }}
    >
      <FontAwesomeIcon size={25} icon={faDoorOpen}></FontAwesomeIcon>
    </TouchableOpacity>
  );
}
