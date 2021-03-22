import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#212121',
          position: 'absolute',
          width: '100%',
          paddingVertical: 15,
          paddingLeft: 10,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 15,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 50,
              width: 50,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="user" size={30} color={'#ccc'} />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#fff'}}>Abdul Majid</Text>
            <Text style={{color: '#fff'}}>5.00</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderTopWidth: 1,
              borderTopColor: '#fff',
              borderBottomWidth: 1,
              borderBottomColor: '#fff',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#fff'}}>Message</Text>
              <Entypo
                style={{marginLeft: 10}}
                name="star"
                size={10}
                color={'lightblue'}
              />
            </View>
            <Entypo
              style={{marginRight: 10}}
              name="chevron-right"
              size={20}
              color={'#fff'}
            />
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#fff'}}>Do more with your account</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#fff'}}>Make money driving</Text>
        </View>
      </View>
      <View style={{marginTop: 200}}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
