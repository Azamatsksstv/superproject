import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Button from '../components/Button';
import COLORS from '../constants/color.js';


const Just = ({navigation}) => {
  return (
    <View style={styles.container}>

           <Image source={require("../assets/mainicon.png")} style={styles.ourIcon} resizeMode='contain'/>


      <Button title="Login" filled onPress={() => navigation.navigate("Login")} style={styles.btn1} />
      <Button title="Register" textColor = 'green' filled onPress={() => navigation.navigate("Signup")} style={styles.btn2}/>
      
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  btn1:{
    position:'absolute',
    top:'50%',
    width:'80%',
    borderRadius:6,
    backgroundColor:COLORS.primary,
    alignSelf: 'center',
  }, 
  btn2:{
    position:'absolute',
    top:'58%',
    width:'80%',
    borderRadius:6,
    backgroundColor:COLORS.white,
    borderWidth:2,
    borderColor:COLORS.primary,
    alignSelf:'center',

  }, 

    ourIcon:{
      flex: 1,
      width:'100%',
      alignSelf: 'center',
      position:'absolute',
    top:'25%',
    },
});

export default Just;
