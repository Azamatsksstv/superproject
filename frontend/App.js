import React from 'react';
import AppNavigation from './navigations/AppNavigation';

export default function App() {
  return (
    <AppNavigation/>
  );
}














































// import React, { useEffect, useRef } from 'react'
// import { StyleSheet, Image, View, useColorScheme, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { HomeScreen, Profile, Favorite, Edit, Setting, Article, Camera, Calendar, MyPlants, Lupa, Weather } from './component';
// import * as Animatable from 'react-native-animatable'; 
// import { useTheme } from '@react-navigation/native';


// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // Define animation configurations
// const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
// const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };
// const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } };
// const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

// const TabArr = [
//   { route: 'Home', label: 'Home', icon: require('./assets/home.svg'), component: HomeScreen },
//   { route: 'Calendar', label: 'Calendar', icon: require('./assets/calendar.svg'), component: Calendar },
//   { route: 'Camera', label: 'Camera', icon: require('./assets/camera.svg'), component: Camera },
//   { route: 'Tree', label: 'Tree', icon: require('./assets/tree.svg'), component: MyPlants },
//   { route: 'Lupa', label: 'Lupa', icon: require('./assets/search.svg'), component: Lupa },
// ];

// const TabButton = (props) => {
//   const { item, onPress, accessibilityState } = props;
//   const focused = accessibilityState.selected;
//   const viewRef = useRef(null);
//   const circleRef = useRef(null);
//   const textRef = useRef(null);
//   const isDarkMode = useColorScheme() === 'white';

//   const { colors } = useTheme()
//   const color = isDarkMode ? 'white' : 'black';
//   const bgColor = colors.white;

//   useEffect(() => {
//     if (focused) {
//       viewRef.current.animate(animate1);
//       circleRef.current.animate(circle1);
//       textRef.current.transitionTo({ scale: 1 });
//     } else {
//       viewRef.current.animate(animate2);
//       circleRef.current.animate(circle2);
//       textRef.current.transitionTo({ scale: 0 });
//     }
//   }, [focused])

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       activeOpacity={1}
//       style={styles.container}>
//       <Animatable.View
//         ref={viewRef}
//         duration={1000}
//         style={styles.container}>
//         <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
//           <Animatable.View
//             ref={circleRef}
//             style={styles.circle} />
//           <Image source={item.icon} style={{ width: 24, height: 24, tintColor: focused ? 'white' : '#488350', marginBottom: '2%'}} />

//         </View>
//         <Animatable.Text
//           ref={textRef}
//           style={[styles.text, { color }]}>
//           {item.label}
//         </Animatable.Text>
//       </Animatable.View>
//     </TouchableOpacity>
//   )
// }

// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: styles.tabBar,
//         }}
//       >
//         {TabArr.map((item, index) => {
//           return (
//             <Tab.Screen key={index} name={item.route} component={item.component}
//               options={{
//                 tabBarShowLabel: false,
//                 tabBarButton: (props) => <TabButton {...props} item={item} />
//               }}
//             />
//           )
//         })}
//       </Tab.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//           headerShown: false
//         }}>
//         <Stack.Screen name="Main" component={MainTabNavigator} />
//         <Stack.Screen name="Favorite" component={Favorite} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Edit" component={Edit} />
//         <Stack.Screen name="Setting" component={Setting} />
//         <Stack.Screen name="Article" component={Article} />
//         <Stack.Screen name="Weather" component={Weather} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 80,        
//   },
//   btn: { 
//     width: 64,
//     height: 64,
//     borderRadius: 25,
//     borderWidth: 4,
//     borderColor: 'white',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   circle: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#488350',
//     borderRadius: 25,
//   },
//   text: {
//     fontSize: 12,
//     textAlign: 'center',
//     fontWeight: '500'
//   }
// });
