import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
export default function PlaceRow(props) {
  return (
    <View style={styles.row}>
      {props.data.description === 'Home' ? (
        <Entypo style={styles.location} name="home" size={24} color={'#000'} />
      ) : (
        <Entypo
          style={styles.location}
          name="location-pin"
          size={24}
          color={'#000'}
        />
      )}
      <Text style={styles.locationText}>
        {props.data.description || props.data.vicinity}
      </Text>
    </View>
  );
}
