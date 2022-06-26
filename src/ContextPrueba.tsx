import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { SetStateAction, useEffect } from 'react';
import { createContext, useState } from 'react';
import { BASE_URL } from './config';

interface props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const ContextPrueba = createContext({});

export const ContextProveedor = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const login = (email: string | any[], password: string | any[]) => {
    if (email.length > 0 || password.length > 0) {
      setIsLoading(true);
      axios
        .post(`${BASE_URL}/login`, {
          email,
          password,
        })
        .then(res => {
          // console.log(res);
          if (res.data.message == 'logeado') {
            let userInfo = res.data.usuario.role;
            setUserInfo(userInfo);

            console.log('usuario es:  ', userInfo);

            AsyncStorage.setItem('userInfo', userInfo);

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
    console.log('Información es: ', userInfo);
    setIsLoading(false);
    // axios
    //   .post(
    //     `${BASE_URL}/logout`,
    //     {},
    //     {
    //       headers: {Authorization: `Bearer ${userInfo.access_token}`},
    //     },
    //   )
    //   .then(res => {
    //     console.log(res.data);
    //     AsyncStorage.removeItem('userInfo');
    //     setUserInfo({});
    //     setIsLoading(false);
    //   })
    //   .catch(e => {
    //     console.log(`logout error ${e}`);
    //     setIsLoading(false);
    //   });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      setUserInfo(userInfo);
      // userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        console.log('Información de usuario es: ', userInfo);
        // console.log('ROL INFO', userInfo.usuario.rol);

        // console.log('CONSOLE USUARIO', userInfo.email);
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
      }}
    >
      {children}
    </ContextPrueba.Provider>
  );
};
