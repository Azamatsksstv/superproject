import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import {Login,Signup,Welcome,Just,Forgot,Otp,Newpassword,Favourites,Profile, Edit, Setting, Weather, InfoUser} from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{

    return (
        <NavigationContainer>
          
          <Stack.Navigator initialRouteName='Welcome'>



            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Just"
              component={Just}
              options={{
                headerShown: false
              }}
            />
    
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={{
                headerShown: false,
                animationEnabled: true,
              }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />
            <Stack.Screen
              name="Newpassword"
              component={Newpassword}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />

            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />

            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />

            <Stack.Screen
              name="Weather"
              component={Weather}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />


            <Stack.Screen
              name="Favourites"
              component={Favourites}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />
            <Stack.Screen
              name="InfoUser"
              component={InfoUser}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />

            <Stack.Screen
              name="Main"
              component={BottomTabNavigation}
              options={{
                headerShown: false,
                 animationEnabled: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}



export default AppNavigation