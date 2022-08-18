import { Alert } from 'react-native';

const API = 'http://192.168.100.6:8000/agregarUsuarios';
// const API = 'http://192.168.1.90:8000/agregarUsuarios';

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveUsuario = async usuario => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
  if (res) {
    alert('Alta del usuario realizada con éxito');
  }
  console.log(res);

  return res.json;
};

export const updateUsuario = async usuario => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
  if (res) {
    alert('Alta del usuario realizada con éxito');
  }
  console.log(res);

  return res.json;
};
