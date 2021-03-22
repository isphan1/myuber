import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationScreen from '../screens/DestinationScreen';
import SearchResult from '../screens/SearchResult';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Destination" component={DestinationScreen} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
