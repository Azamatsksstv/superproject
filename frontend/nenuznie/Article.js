import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



export default function Article() {
  const navigation = useNavigation();
  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };
  const route = useRoute();
  const { topic, articleText } = route.params;

  return (
    <View style={styles.container}>
      {/* icon */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={goToHomeScreen}>
          <Image source={require('../assets/back.svg')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Text */}
      <View style={styles.main}>
        <Text style={{ fontSize: 60, fontWeight: 'bold' }}>{topic}</Text>
      </View>

      {/* articles */}
      <View style={styles.article}>
        <Text>{articleText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flexDirection: 'row',
    padding: 15,
    marginTop: '5%'
  },
  image: {
    width: 45,
    height: 45
  },
  main: {
    marginLeft: '5%',
    padding: 10,
  },
  article: {
    paddingTop: '2%',
    paddingBottom: '5%'
  }
});
