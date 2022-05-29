import { View, Text } from 'react-native';
import React from 'react';
import { Boton } from './src/components/Boton';
import { Link } from 'react-router-native';
import { styles } from './src/theme/appTheme';

const Home = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link style={styles.botonBox} to="/products">
        <Text>Productos</Text>
      </Link>
      <Boton texto={'a'} icon={'sign-in'} onPress={() => {}}></Boton>
    </View>
  );
};

export default Home;
