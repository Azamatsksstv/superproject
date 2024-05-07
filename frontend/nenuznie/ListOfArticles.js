import React, { useState }from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Text, View, Image} from 'react-native';

export default function ListOfArticles({el, topic}) {
  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    setLiked(!liked);
  };



  return (
    <TouchableHighlight>
      <View style={styles.box}>
        <View>
          
            <Text style={styles.topic}>{topic}</Text>
            <Text style={styles.text}>{el.text}</Text>
          
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image source={liked ? require('../assets/liked.svg') : require('../assets/heart.svg')} 
            style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  box:{
    padding: 30
    ,borderRadius: 25
    ,borderColor: '#DADADA'
    ,shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 2
    ,borderWidth:1
    ,marginTop:20
    ,width:'90%'
    ,marginLeft:'5%'
    ,backgroundColor:'#F7F8F9'
  }
  ,topic:{
    textAlign: 'center'
    ,marginBottom: 20
    ,fontSize: 24
    ,color: 'black'
    ,height: '30%'
  }
  ,text:{
    textAlign: 'center'
    ,fontSize: 16
    ,color: '#999999'
    ,height:'50%'
  }
  ,imageContainer: {
    position: 'absolute', // Position the container absolutely
    bottom: 10, // Align to the bottom of the parent container
    right: 10, // Align to the right of the parent container
  },
  image: {
    width: 20,
    height: 20,
  }
});
