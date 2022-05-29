import axios from 'axios';
import React, { useEffect, useState } from 'react';
import View from 'react-native';
import { ScreenGenPDF } from './ScreenGenPDF';
import { ScreenMenu } from './ScreenMenu';

export const ScreenIntermediario = () => {
  const [rol, setRol] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://192.168.100.6:8000/login').then(response => {
      if (response.data.loggedIn == true) {
        setRol(response.data.user[0].role);
      }
      // console.log(response.data.user[0].email);
    });
  }, []);
  return (
    <>
      {rol == 'Admin' && <ScreenMenu />}
      {rol == 'normalUser' && <ScreenMenu />}
    </>
  );
};
