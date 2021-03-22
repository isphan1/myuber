import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entopy from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';

export default function SearchBox() {
  const navigation = useNavigation();

  const goDest = () => {
    console.log('log........');
    navigation.navigate('Destination');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goDest} style={styles.searchBox}>
        <Text style={styles.title}>Where to?</Text>
        <View style={styles.timeBox}>
          <AntDesign name="clockcircle" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} />
        </View>
      </Pressable>
      <View style={styles.row}>
        <AntDesign
          name="clockcircle"
          size={20}
          color="#ffffff"
          style={styles.icon}
        />
        <Text style={styles.rowText}> Spin , Nightclub</Text>
      </View>
      <View style={styles.row}>
        <Entopy
          name="home"
          size={20}
          color="#ffffff"
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.icon, {backgroundColor: '#218cff'}]}
        />
        <Text style={styles.rowText}> Home</Text>
      </View>
      <View style={styles.row}>
        <Entopy name="star" size={20} color="yellow" />
        <Text style={styles.rowText}> 302 pts</Text>
      </View>
    </View>
  );
}
