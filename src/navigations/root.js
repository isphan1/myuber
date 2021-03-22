import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';

const DummyScreen = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name="Your Trips" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
