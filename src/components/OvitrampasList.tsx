import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import OvitrampasItems from './OvitrampasItems';

const OvitrampasList = ({ ovitrampasPeticion }) => {
  const renderItem = ({ item }) => {
    return <OvitrampasItems task={item} />;
  };

  return (
    <View>
      <FlatList
        data={ovitrampasPeticion}
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
        extraData={ovitrampasPeticion}
        initialNumToRender={10}
        maxToRenderPerBatch={100}
        onEndReachedThreshold={0.8}
        style={{
          width: '100%',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      ></FlatList>
    </View>
  );
};

export default OvitrampasList;
