import React from 'react';
import { View, Image, Text } from 'react-native';

export default () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        width: 316,
        height: 113.91,
        backgroundColor: '#000000',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingTop: 6,
        }}
      >
        <Image
          style={{
            width: 63,
            height: 77,
            borderRadius: 31.5,
          }}
          source={
            {
              /* add your source here */
            }
          }
        />
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: 27.5,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 255)',
            }}
          >
            {' '}
            Xalapa{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 255)',
              marginTop: 3,
            }}
          >
            {' '}
            Instalada{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 255)',
              marginTop: 4,
            }}
          >
            {' '}
            05 / 09 / 2022{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};
