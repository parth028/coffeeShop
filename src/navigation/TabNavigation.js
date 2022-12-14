import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FakeScreen from '../screens/FakeScreen';
import Home from '../screens/Home';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'whitesmoke',
          paddingBottom: 30,
          height: 90,
        },
        // tabBarIconStyle: {
        //   position: 'absolute',
        //   top: 0,
        //   bottom: 13,
        // },
        tabBarActiveTintColor: '#846046',
        tabBarLabelStyle: {
          fontFamily: 'Lato-ExtraBold',
          fontSize: 12,
          lineHeight: 12,
          marginTop: 4,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{}}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconView,
                focused
                  ? {borderTopWidth: 4, borderTopColor: color}
                  : {borderWidth: 0},
              ]}>
              <Ionicons name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FakeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconView,
                focused
                  ? {borderTopWidth: 4, borderTopColor: color}
                  : {borderWidth: 0},
              ]}>
              <Ionicons name="heart" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={FakeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconView,
                focused
                  ? {borderTopWidth: 4, borderTopColor: color}
                  : {borderWidth: 0},
              ]}>
              <Ionicons name="cart" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FakeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconView,
                focused
                  ? {borderTopWidth: 4, borderTopColor: color}
                  : {borderWidth: 0},
              ]}>
              <Ionicons name="person-circle-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconView: {
    paddingTop: 16,
    width: 33,
    alignItems: 'center',
    // borderWidth: 1,
  },
});
export default TabNavigation;
