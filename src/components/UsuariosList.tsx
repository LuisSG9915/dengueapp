import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import UsuariosItems from './UsuariosItems';

const UsuariosList = ({ usuariosPet, refreshControl }) => {
  const renderItem = ({ item }) => {
    return <UsuariosItems task={item} />;
  };

  return (
    <FlatList
      data={usuariosPet}
      keyExtractor={(item, index) => {
        return (
          item.id +
          '' +
          new Date().getTime().toString() +
          Math.floor(
            Math.random() * Math.floor(new Date().getTime())
          ).toString()
        );
      }}
      renderItem={renderItem}
      scrollEnabled={true}
      refreshControl={refreshControl}
      style={{
        backgroundColor: 'Blue',
        // flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    ></FlatList>
  );
};

export default UsuariosList;
