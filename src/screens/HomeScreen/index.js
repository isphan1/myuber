import React from 'react';
import {Text, View} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import SearchBox from '../../components/SearchBox';

import styles from './styles';

export default function HomeScreen(props) {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <SearchBox />
    </View>
  );
}
