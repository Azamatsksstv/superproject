import React from 'react';
import { StyleSheet, Image, View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Tabs from '../navigations/BottomTabNavigation';
import AssetExample from '../components/AssetExample';
import { useNavigation } from '@react-navigation/native';


export default function Favourites() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Articles */}
      <View style={styles.articlesContainer}>
      <ScrollView style={styles.scrollView}>
        {/* Icon */}
        {/* <View style={styles.imageContainer}> */}
          <Pressable  onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.svg')} style={styles.image} />
          </Pressable>
        {/* </View>  */}

        {/* Text */}
        <View style={styles.main}>
          <Text style={{ fontSize: 60, fontWeight: 'bold' }}>Favorites</Text>
        </View>

        {/* Articles */}
        <AssetExample/>
        <AssetExample/>
        </ScrollView>
      </View>
      
      {/* Tabs */}
      <View style={styles.footer}>
        <Tabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  articlesContainer: {
    flex: 1, 
    alignItems: 'center',
  },
  footer: {},
  imageContainer: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  image: {
    marginTop: '5%',
    width: 41,
    height: 41,
  },
  main: {
    marginLeft: '5%',
    padding: 10,
  },
  article: {
    paddingTop: '2%',
    paddingBottom: '5%',
  },
  scrollView: {
    width: '90%',
    backgroundColor: '',
    marginHorizontal: 0,
  },
});
