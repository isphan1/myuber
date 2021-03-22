import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import cars from '../../assets/data/cars';

export default function HomeMap(props) {
  const origin = {latitude: 28.450627, longitude: -16.263045};
  const destination = {latitude: 28.458627, longitude: -16.263145};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBAPUhnGpx9OCtMreyyG41oCojb77IS-m4';

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 425,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%', height: 425}}
        showsUserLocation={true}
        // 37.4161431,-122.0829954
        region={{
          latitude: 37.4161431,
          longitude: -122.0829954,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={props.origin}
          destination={props.destination}
          strokeWidth={5}
          strokeColor={'black'}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        <Marker
          title="Origin"
          coordinate={props.origin ? props.origin : origin}
        />
        <Marker
          title="Destination"
          coordinate={props.destination ? props.destination : destination}
        />
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
