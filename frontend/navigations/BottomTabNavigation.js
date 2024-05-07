import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Home';
import Searchscreen from '../screens/Searchscreen';
import Camerascreen from '../screens/Camerascreen';
import Calendarscreen from '../screens/Calendarscreen';
import Plantsscreen from '../screens/Plantsscreen';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, useColorScheme, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; 
import { useTheme } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favourites,Profile, Weather} from "../screens";

const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{headerShown: false,
          animationEnabled: true,}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false,
          animationEnabled: true,}}
      />

      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false,
          animationEnabled: true,}}
      />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{headerShown: false,
          animationEnabled: true,}}
      />

      
      
    </Stack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

// Define animation configurations
const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };
const circle1 = { 0: { scale: 0 }, 0.3: { scale: .5 }, 0.5: { scale: .3 }, 0.8: { scale: .7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

require('../assets/snack-icon.png')
const TabArr = [
  { route: 'Homescreen', label: 'Home', icon: "home", component: HomeStack },
  { route: 'Searchscreen', label: 'Search',icon: "search", component: Searchscreen },
  { route: 'Camerascreen', label: 'Camera', icon: "camera", component: Camerascreen },
  { route: 'Plantsscreen', label: 'Plants', icon: "tree", component: Plantsscreen },
  { route: 'Calendarscreen', label: 'Calendar', icon: "calendar", component: Calendarscreen },
];
// const TabArr = [
//   { route: 'Home', label: 'Home', icon: require('../assets/home.svg'), component: Homescreen },
//   { route: 'Calendar', label: 'Searchscreen', icon: require('../assets/search.svg'), component: Searchscreen },
//   { route: 'Camera', label: 'Camerascreen', icon: require('../assets/camera.svg'), component: Camerascreen },
//   { route: 'Tree', label: 'Plantsscreen', icon: require('../assets/tree.svg'), component: Plantsscreen },
//   { route: 'Lupa', label: 'Calendarscreen', icon: require('../assets/calendar.svg'), component: Calendarscreen },
// ];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const isDarkMode = useColorScheme() === 'white';

  const { colors } = useTheme()
  const color = isDarkMode ? 'white' : 'black';
  const bgColor = "white";

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={500}
        style={styles.container}>
        <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
        
                <Ionicons name= {item.icon} size={32} color={focused ? "white" :"green"} />


        </View>
        <Animatable.Text
          ref={textRef}
          style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            height:60,
            position:'absolute',
            
            borderRadius:8
            }}}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
  );
};

export default Tabs;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginBottom: 40
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#488350',
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500'
  }
});




