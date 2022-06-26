import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

const DengueItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.botonText}>{task.title}</Text>
      <Text>{task.description} </Text>
    </View>
  );
};

export default DengueItem;
