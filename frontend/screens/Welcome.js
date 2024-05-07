import React, { useState } from "react";
import { View, Text,Image,StyleSheet,ImageBackground} from 'react-native';
// import COLORS from '../constants/color';
import AppIntroSlider from "react-native-app-intro-slider";
import {COLORS, SIZES } from '../constants/theme.jsx';


const slides = [
  {
    id: 1,
    title: 'Discover your type of plant',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../assets/welcome1.png')
  },
  {
    id: 2,
    title: 'Connect with other',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../assets/welcome2.png')
  },
  {
    id: 3,
    title: 'Try diagnostics via scan',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../assets/welcome3.png')
  }
]


const Welcome = ({navigation}) => {
    const [showHomePage, setShowHomePage] = useState(false);

  // return (
  //   <View style={styles.container}>
  //   <ImageBackground source={require('../assets/welcomeBg.png')} resizeMode="cover" style={styles.image}>

  //     <Image style={styles.logo} source={require('../assets/welcomeIcon.png')}/>
  //     <Text style={styles.text1}>Welcome</Text>
  //     <Text style={styles.text2}>Make your home green withour plants</Text>

  //     <Button title="Start" onPress={() => navigation.navigate("Just")} style={styles.btn} />
  //   </ImageBackground>
  //   </View>

  // );

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image
                source={item.image}
                style={{
                  width: '60%',
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          navigation.navigate("Just")
        }}
      />
    )
  }
};

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    // },
    // image: {
    //   flex: 1,
    //   justifyContent: 'center',
    // },
    // text1: {
    //   color: COLORS.black,
    //   fontSize: 26,
    //   fontWeight: 'bold',
    //   textAlign: 'center',
    //   width:'100%',
    //   position: 'absolute',
    //   top: '56%',
      
    // },
    // text2: {
    //     color: COLORS.black,
    //     fontSize: 16,
    //     textAlign: 'center',
    //     width:'100%',
    //     position: 'absolute',
    //     top: '62%',
    //   },
    //   btn:{
    //     position: 'absolute',
    //     top: '72%',
    //     width:'50%',
    //     color:COLORS.white,
    //     backgroundColor:'grey',
    //     alignSelf: 'center',

    //   },
    //   logo:{
    //     position: 'absolute',
    //     bottom:'50%',
    //     alignSelf: 'center',
    //     width: 250,
    //     height: 250,
        
    //   }
});

export default Welcome;


