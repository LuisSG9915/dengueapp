import React, { useEffect, useState } from 'react';
import { getTasks } from '../../../api';
import ListFlat from '../../components/ListFlat';
import { PanelSuperior } from '../../components/PanelSuperior';
/**
 * TODO: Realizar peticiones de los usuarios para recuperar las contraseñas
 * TODO: Realizar funcionar el botón para visualizar y realizar la solicitud
 */
export const Alertas = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    console.log(data);
  };
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <PanelSuperior>
      <ListFlat tasks={tasks}></ListFlat>
    </PanelSuperior>
  );
};
