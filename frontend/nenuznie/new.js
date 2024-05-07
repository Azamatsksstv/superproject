import React from 'react';
import { StyleSheet, Image, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, Profile, Favorite, Edit, Setting, Article, Camera, Calendar, MyPlants, Lupa} from '.';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? require('./assets/home.svg') : require('./assets/home.svg');
          } else if (route.name === 'Calendar') {
            iconName = focused ? require('./assets/calendar.svg') : require('./assets/calendar.svg');
          } else if (route.name === 'Camera') {
            iconName = focused ? require('./assets/camera.svg') : require('./assets/camera.svg');
          } else if (route.name === 'Tree') {
            iconName = focused ? require('./assets/tree.svg') : require('./assets/tree.svg');
          } else if (route.name === 'Lupa') {
            iconName = focused ? require('./assets/search.svg') : require('./assets/search.svg');
          }
          return <Image source={iconName} style={{ width: 40, height: 40 }} />;
        },
        tabBarLabel: '',
        


      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Tree" component={MyPlants} />
      <Tab.Screen name="Lupa" component={Lupa} />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Article" component={Article} />
        <Tabbar></Tabbar>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
