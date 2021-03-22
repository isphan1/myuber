import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeMap from '../../components/HomeMap';
import {useRoute} from '@react-navigation/native';

import types from '../../assets/data/types';

const getImage = (type) => {
  if (type === 'UberX') {
    return require('../../assets/images/top-UberX.png');
  }
  if (type === 'Comfort') {
    return require('../../assets/images/top-Comfort.png');
  }
  return require('../../assets/images/top-UberXL.png');
};

export default function SearchResult(props) {
  const info = useRoute();

  const origin = {
    latitude: info.params.originPlace.geometry.location.lat,
    longitude: info.params.originPlace.geometry.location.lng,
  };

  const destination = {
    latitude: info.params.destinationPlace.geometry.location.lat,
    longitude: info.params.destinationPlace.geometry.location.lng,
  };

  return (
    <View style={{flex: 1}}>
      <HomeMap origin={origin} destination={destination} />
      <View style={{paddingHorizontal: 25}}>
        {types.map((type) => (
          <View
            key={type.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
              justifyContent: 'space-between',
            }}>
              <Image
                source={getImage(type.type)}
                style={{
                  height: 80,
                  width: 40,
                  transform: [
                    {
                      rotate: `60deg`,
                    },
                  ],
                }}
              />
              <View
                style={{
                  fontSize: 16,
                  marginLeft: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>{type.type}</Text>
                <Text>{type.duration}</Text>
              </View>
          </View>
        ))}
      </View>
    </View>
  );
}
