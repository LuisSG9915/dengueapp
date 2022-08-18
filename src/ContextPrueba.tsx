import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { resolveConfig } from 'prettier';
import React, { SetStateAction, useEffect } from 'react';
import { createContext, useState } from 'react';
import { BASE_URL } from './config';

interface props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const ContextPrueba = createContext({});

export const ContextProveedor = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [jursidición, setJurisdicción] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [codeRecover, setCodeRecover] = useState({});
  const [userRecover, setUserRecover] = useState({});
  const [estadoRecuperacion, setEstadoRecuperacion] = useState({});

  const recover = (Email: string, codeRecover: any) => {
    codeRecover = Math.floor(1000 + Math.random() * 9000);
    setCodeRecover(codeRecover);
    console.log('codidgo es: ', codeRecover);
    AsyncStorage.setItem('codeRecover', codeRecover.toString());

    if (Email.length > 0) {
      axios
        .post(`${BASE_URL}/verificarContrasena`, {
          Email,
          codeRecover,
        })
        .then(res => {
          if (res.data.message == 'verificado') {
            let estadoRecuperacion = '1';
            setEstadoRecuperacion(estadoRecuperacion);
            console.log(estadoRecuperacion);
            AsyncStorage.setItem('estadoRecuperacion', estadoRecuperacion);

            let userRecover = res.data.verificar.Email;
            setUserRecover(userRecover);
            console.log('usuario es:  ', userRecover);
            AsyncStorage.setItem('userRecover', userRecover);
          } else {
            console.log('erroneo');
            alert('Correo erroneo');
          }
        });
    } else {
      alert(
        'No se están recibiendo datos, favor de ingresar datos en los campos: "email" y "password"'
      );
    }
    return codeRecover;
  };

  const login = (Email: string | any[], Contraseña: string | any[]) => {
    if (Email.length > 0 || Contraseña.length > 0) {
      setIsLoading(true);
      axios
        .post(`${BASE_URL}/login`, {
          Email,
          Contraseña,
        })
        .then(res => {
          if (res.data.message == 'logeado') {
            let userInfo = res.data.usuario.Rol;
            let jursidición = res.data.usuario.Jurisdicción;
            setUserInfo(userInfo);
            setJurisdicción(jursidición);
            console.log('usuario es:  ', userInfo);
            console.log('Jurisdiccion es:  ', jursidición);

            AsyncStorage.setItem('userInfo', userInfo);
            AsyncStorage.setItem('jursidición', jursidición);

            setIsLoading(false);
          } else {
            let userInfo = res.data.message;
            setUserInfo(userInfo);

            console.log('usuario es:  ', userInfo);

            AsyncStorage.setItem('userInfo', userInfo);

            setIsLoading(false);

            // alert(userInfo);
          }
        })
        .catch(e => {
          console.log(`login error ${e}`);
          setIsLoading(false);
          // throw e;
        });
    } else {
      alert(
        'No se están recibiendo datos, favor de ingresar datos en los campos: "email" y "password"'
      );
    }
  };

  const register = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    setUserInfo(null);
    AsyncStorage.removeItem('userInfo');

    setJurisdicción(null);
    AsyncStorage.removeItem('jursidición');

    console.log('Información es: ', userInfo);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      // Obtener informaccion
      let userInfo = await AsyncStorage.getItem('userInfo');
      setUserInfo(userInfo);
      let jursidición = await AsyncStorage.getItem('jursidición');
      setJurisdicción(jursidición);

      let codeRecover = await AsyncStorage.getItem('codeRecover');
      setCodeRecover(codeRecover);

      let estadoRecuperacion = await AsyncStorage.getItem('estadoRecuperacion');
      setEstadoRecuperacion(estadoRecuperacion);

      if (userInfo) {
        setUserInfo(userInfo);
        // console.log('ROL INFO', userInfo.usuario.rol);

        // console.log('CONSOLE USUARIO', userInfo.email);
      }
      if (estadoRecuperacion) {
        setEstadoRecuperacion('0');
      }
      if (codeRecover) {
        setCodeRecover(codeRecover);
      }

      if (userRecover) {
        setUserRecover(userRecover);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <ContextPrueba.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        refreshing,
        setRefreshing,
        jursidición,
        estadoRecuperacion,
        codeRecover,
        recover,
        setEstadoRecuperacion,
      }}
    >
      {children}
    </ContextPrueba.Provider>
  );
};
