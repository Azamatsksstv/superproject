import React, { useEffect, useState } from 'react';
import {Text, SafeAreaView,StyleSheet,View,Image,ScrollView,Pressable} from 'react-native';
import AssetExample from '../components/AssetExample';
import { fetchWeatherForecast } from '../api/weather';
import { weatherImages } from '../constants';
import { getData } from '../utils/asyncStorage';
import _ from 'lodash';
import moment from 'moment';

const Homescreen = ({navigation}) => {
    const [weather, setWeather] = useState({})
    useEffect(() => {
        fetchMyWeatherData();
    }, [])

    const fetchMyWeatherData = async () => {
        let myCity = await getData('city');
        let cityName = 'Almaty';
        if (myCity) cityName = myCity;
        fetchWeatherForecast({
            cityName: cityName,
            days: '7'
        }).then(data => {
            setWeather(data);
        })
    }

    const { current, location } = weather;
    const localtimeString = location?.localtime;
    const localtime = moment(localtimeString);
    const formattedDate = localtime.format("DD MMMM");
    console.log(formattedDate)
  return (
    <SafeAreaView style={styles.container}>

          <ScrollView style={styles.scrollView}>

      <View style={styles.header}>
      
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image source={require('../assets/profile.png')} style = {styles.img} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Favourites")}>
        <Image source={require('../assets/fav.png')} style = {styles.img} />
      </Pressable>

      </View>
      <View style={styles.weather}>
        <Pressable onPress={() => navigation.navigate("Weather")}>
          <Text style = {{ fontSize: 40,fontWeight: 'medium',}}>{current?.temp_c}&#176;</Text>
          <Image source={weatherImages[current?.condition?.text]} style = {styles.cloud} />
        </Pressable>
      </View>

      <AssetExample/>
      <AssetExample/>
      <AssetExample/>
      <AssetExample/>
      </ScrollView> 
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems:'center',
  backgroundColor:'white'
      
  },
  scrollView: {
    width:'90%',
    backgroundColor: '',
    marginHorizontal: 0,
  },

  header:{
    flexDirection:'row',
     alignItems:'center',
     alignSelf:'center',
     justifyContent: 'space-between',
      width:'90%',
      height:'8%',
      marginTop:'6%',
      
  },
  img:{
   flexWrap: 'wrap',
    width: 33,
    height:30
  },

  weather:{
    flexDirection:'row',
     alignItems:'center',
     alignSelf:'center',
     justifyContent: 'space-between',
      marginTop:'1%',
      
  },
  cloud:{
   flexWrap: 'wrap',
    width: 103,
    height:120,
    marginTop:0
  },
  
  
 
});

export default Homescreen;