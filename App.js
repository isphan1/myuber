import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View, PermissionsAndroid, Platform} from 'react-native';
import Route from './src/navigations/root';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App Location Permission',
          message:
            'Uber App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle="dark-content"
        // translucent
        backgroundColor="transparent"
      />
      <Route />
    </View>
  );
};

export default App;
