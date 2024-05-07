import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchLocation, fetchWeatherForecast } from '../api/weather';
import { weatherImages } from '../constants';
import { getData, storeData } from '../utils/asyncStorage';
import _ from 'lodash';
import { debounce } from 'lodash';
import moment from 'moment';
import Tabs from '../navigations/BottomTabNavigation';


export default function Weather() {
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([]);
    const [weather, setWeather] = useState({})



    const handleLocation = (loc) => {
        setLocations([]);
        toggleSearch(false);
        fetchWeatherForecast({
            cityName: loc.name,
            days: '7'
        }).then(data => {
            setWeather(data);
            storeData('city', loc.name)
        })
    }

    const handleSearch = value => {
        if (value.length > 2) {
            fetchLocation({ cityName: value }).then(data => {
                setLocations(data);
            })
        }
    }

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

    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
    const { current, location } = weather;
    const localtimeString = location?.localtime;
    const localtime = moment(localtimeString);
    const formattedDate = localtime.format("DD MMMM");
    console.log(formattedDate)
    console.log(`'${current?.condition?.text}'`);
    return (
        <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={[styles.inputContainer, { backgroundColor: showSearch ? 'rgba(0, 0, 0, 0.2)' : 'transparent' }]}>
                        {showSearch ? (
                            <TextInput onChangeText={handleTextDebounce}
                                placeholder='Search city' placeholderTextColor={'black'} style={styles.input} />
                        ) : <Text style={{fontSize: 29}}>{weather?.location?.name}</Text>}

                        <TouchableOpacity onPress={() => toggleSearch(!showSearch)} style={styles.searchButton}>
                            <Image style={styles.searchIcon} source={require('../assets/search.svg')} />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showSearch ? (
                            <View style={styles.locationList}>
                                {
                                    locations.map((loc, index) => {
                                        let showBorder = index + 1 !== locations.length;
                                        let borderStyle = showBorder ? styles.borderBottom : null;
                                        return (
                                            <TouchableOpacity onPress={() => handleLocation(loc)} key={index} style={[styles.locationItem, borderStyle]}>
                                                <Text style={styles.locationText}>{loc?.name}, {loc?.country}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>

                {/* Forecast */}
                <View style={styles.forecastContainer}>
                    <View style={styles.weatherIconContainer}>
                        <Image source={weatherImages[current?.condition?.text]} style={styles.weatherIcon} />
                    </View>
                    {/* Info container*/}
                    <View style = {styles.infoContainer}>
                        <View style={styles.weatherDetails}>
                            <Text style={styles.dateCurrent}>Today, {formattedDate}</Text>
                            <Text style={styles.temperature}>{current?.temp_c}&#176;</Text>
                            <Text style={styles.weatherCondition}>{current?.condition?.text}</Text>
                        </View>
                        <View style={styles.additionalInfo}>
                            <View style={styles.infoItem}>
                                <Image source={require('../assets/wind.svg')} style={styles.infoIcon} />
                                <Text style={styles.infoText}> Wind</Text>
                                <Text style={styles.infoText}> | </Text>
                                <Text style={styles.infoText}>{current?.wind_kph} km/h</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Image source={require('../assets/drop.svg')} style={styles.infoIcon} />
                                <Text style={styles.infoText}> Hum</Text>
                                <Text style={styles.infoText}> | </Text>
                                <Text style={styles.infoText}>{current?.humidity} %</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.forecast}>
                        <View style={styles.forecastTitle}>
                            <Image source={require('../assets/calendar.svg')} style={styles.calendarIcon} />
                            <Text style={styles.forecastText}>Daily forecast</Text>
                        </View>
                        <ScrollView horizontal contentContainerStyle={styles.forecastScroll} showsHorizontalScrollIndicator={false}>
                            {weather?.forecast?.forecastday?.map((item, index) => {
                                let date = new Date(item.date);
                                let options = { weekday: 'long' };
                                let dayName = date.toLocaleDateString('en-US', options);
                                dayName = dayName.split(',')[0];
                                console.log(item?.day?.condition?.text)
                                return (
                                    <View key={index} style={styles.forecastDay}>
                                        <Image source={weatherImages[item?.day?.condition?.text]} style={styles.forecastIcon} />
                                        <Text style={styles.forecastDayName}>{dayName}</Text>
                                        <Text style={styles.forecastTemperature}>{item?.day?.avgtemp_c}&#176;</Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>


                
            {/* <MainTabNavigator/> */}
            <View>
                <Tabs/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    searchContainer: {
        marginTop: '9%'
        ,marginLeft: '3%'
        ,marginRight:'3%'
        ,position: 'relative'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 9999,
        paddingHorizontal: 8,
        height: '15%'
    },
    input: {
        flex: 1,
        fontSize: 29,
        color: 'black'
    },
    searchButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 9999,
        padding: '3%',
        margin: '2%'
    },
    searchIcon: {
        height: 25,
        width: 25,
        tintColor: 'black'
    },
    locationList: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        top: '16%',
        borderRadius: 20,
        paddingHorizontal: 4
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    borderBottom: {
        borderBottomWidth: 0
    },
    locationText: {
        color: 'black',
        fontSize: 20
    },
    forecastContainer: {
        marginHorizontal: 4,
        // justifyContent: 'space-between',
        flex: 2
    },
    locationName: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    weatherIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    weatherIcon: {
        width: 170,
        height: 172
    },
    weatherDetails: {
        alignItems: 'center'
    },
    temperature: {
        fontSize: 82,
        fontWeight: '600',
        color: 'black',
        paddingBottom: '5%'
    },
    weatherCondition: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
    additionalInfo: {
        flexDirection: 'column'
        ,alignItems: 'center'
        ,paddingTop: '10%'
    },
    infoItem: {
        flexDirection: 'row',
        paddingBottom: '4%'
    },
    infoIcon: {
        width: 24,
        height: 24,
    },
    infoText: {
        fontSize: 23,
        fontWeight: '600',
        color: 'black',        
    },
    forecast: {
        alignItems: 'center',
    },
    forecastTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '4%'
    },
    calendarIcon: {
        width: 24,
        height: 24
    },
    forecastText: {
        fontSize: 23,
        color: 'black',
        marginLeft: 5
    },
    forecastScroll: {
        paddingHorizontal: 15
    },
    forecastDay: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        paddingVertical: 10,
        marginRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 20
    },
    forecastIcon: {
        width: 40,
        height: 40
    },
    forecastDayName: {
        fontSize: 16,
        color: 'black'
    },
    forecastTemperature: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }

    ,dateCurrent: {
        paddingTop: '4%'
        ,fontSize: 23
        ,fontWeight: '600'
    }

    ,infoContainer:{
        marginLeft: '10%'
        ,width: '80%'
        ,backgroundColor: 'rgba(255, 255, 255, 0.3)'
        ,borderRadius: 25
        ,height: "40%"
        ,borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowRadius: 20,
        marginBottom: '5%'
      }
    
});
