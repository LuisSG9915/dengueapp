import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
// import React, { createContext, useEffect, useState } from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
}
type Contexto = {
  login: () => {};
};

interface contextTheme {
  login: (email: string, password: string) => void;
  loginStatus: {} | string;
}
export const ContextPrueba = React.createContext({} as contextTheme);

export const ContextProveedor = ({ children }: props) => {
  // export const ContextProveedor = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<String>('');
  // const [loginStatus, setLoginStatus] = useState({});
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const login = (email: any, password: any) => {
    axios
      .post('http://192.168.100.6:8000/login', {
        // .post('http://10.42.0.55:8000/login', {
        email,
        password,
      })
      .then((response: any) => {
        let loginStatus = response.data;
        console.log(loginStatus);
        setLoginStatus(loginStatus);
        AsyncStorage.setItem('loginStatus', JSON.stringify(loginStatus));
        // console.log(response.data);
        // setLoginStatus(response.data.message);
      })
      .catch((error: any) => {
        console.log('login error: ', error);
      });
  };

  const isLoggedIn = async () => {
    try {
      let loginStatus = await AsyncStorage.getItem('loginStatus');
      loginStatus = JSON.parse(loginStatus);

      if (loginStatus) {
        setLoginStatus(loginStatus);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  // return (
  //   <ContextPrueba.Provider
  //     value={{
  //       login,
  //       loginStatus,
  //     }}

  //   ></ContextPrueba.Provider>
  // );

  return (
    <ContextPrueba.Provider
      value={{
        login,
        loginStatus,
      }}
    >
      {children}
    </ContextPrueba.Provider>
  );
};
