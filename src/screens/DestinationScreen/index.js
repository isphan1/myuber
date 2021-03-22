import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';

export default function DestinationSearchScreen() {
  const [originPlace, setOriginPalace] = useState(null);
  const [destinationPlace, setDestinationPalace] = useState(null);

  const navigation = useNavigation();

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };

  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.log('redirect to result');
      navigation.navigate('SearchResult', {
        originPlace,
        destinationPlace,
      });
    }
  });

  return (
    <SafeAreaView style={{marginTop:10}}>
      <GooglePlacesAutocomplete
        placeholder="Where from?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setOriginPalace(details);
          // console.log(data);
        }}
        suppressDefaultStyles
        currentLocation={true}
        currentLocationLabel="Current location"
        styles={{
          textInput: styles.textInput,
          container: {
            position: 'absolute',
            top: 0,
            left: 7,
            right: 10,
          },
          listView: {
            position: 'absolute',
            top: 105,
          },
          separator: {
            backgroundColor: '#efefef',
            height: 1,
          },
        }}
        fetchDetails
        enablePoweredByContainer={false}
        query={{
          key: 'AIzaSyBAPUhnGpx9OCtMreyyG41oCojb77IS-m4',
          language: 'en',
          // types: '(cities)',
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
        predefinedPlaces={[homePlace, workPlace]}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setDestinationPalace(details);
        }}
        fetchDetails
        suppressDefaultStyles
        enablePoweredByContainer={false}
        styles={{
          textInput: styles.textInput,
          container: {
            position: 'absolute',
            top: 55,
            left: 7,
            right: 10,
          },
          separator: {
            backgroundColor: '#efefef',
            height: 1,
          },
        }}
        query={{
          key: 'AIzaSyBAPUhnGpx9OCtMreyyG41oCojb77IS-m4',
          language: 'en',
          // types: '(cities)',
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
      />
      <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.square} />
    </SafeAreaView>
  );
}
