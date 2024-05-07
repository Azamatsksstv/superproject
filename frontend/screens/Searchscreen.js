import React from 'react';
import {Text, View,SafeAreaView,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Searchscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Image source={require('../assets/search1.png')} style = {styles.img} />
        <Text  style={{flexWrap: 'wrap',fontSize: 15}}>Ask the question</Text>
        <Image source={require('../assets/search2.png')} style = {styles.img} />


      </View>

      <View style={{
        flexDirection:"row",
                        width: "90%",
                        height: 28,
                        borderColor: "gray",
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 22,
                        marginTop:'140%'
                    }}>
                        <TextInput
                            placeholder='Message AI...'
                            placeholderTextColor="gray"
                            style={{
                                width: "100%",
                                color:"gray"
                            }}
                        />

<EvilIcons name="chevron-right" size={22} color="gray" />
                        
                    </View>

      
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
  flex: 1,
        alignItems: 'center',
        backgroundColor:"white",
  },

  header:{
    flexDirection:'row',
    borderRadius:20,
     alignItems:'center',
     justifyContent: 'space-evenly',
      width:'90%',
      height:'8%',
      backgroundColor:'white',
      marginTop:'10%',
      shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 10,
        elevation: 5,
  },
  img:{
   flexWrap: 'wrap',
    width: 30,
    height:30
  },
  
  
 
});

export default Searchscreen;