import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/my_profile/');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
   
  const handleEditPress = () => {
    navigation.navigate('Edit', { userData });
  };

  return (
    <View style={styles.container}>
      {/* Icons */}
      <View style={styles.imageContainer}>
        <Pressable onPress={handleEditPress}>
          <Image source={require('../assets/Edit.png')} style={styles.image} />
        </Pressable>
        <Text style={{ fontSize: 38, fontWeight: 'bold' }}>Profile</Text>
        {/* Add other icons as needed */}
        <Pressable onPress={handleEditPress}>
          <Image source={require('../assets/Settings.png')} style={styles.image} />
        </Pressable>
      </View>

      {/* Profile page*/}
      <View style={{ alignSelf: "center", paddingTop: 50 }}>
        <View style={styles.profileImage}>
          <Image source={userData?.profileImage} style={styles.circle} resizeMode="center" />
        </View>
      </View>

      {/* Info */}
      <View style={{ marginTop: 40 }}>
        <View style={styles.infoCont}>
          <Text style={{ fontSize: 24, color: "#8391A1", paddingTop: 10 }}>{userData ? userData.name : 'name'}</Text>
        </View>
        <View style={styles.infoCont}>
          <Text style={{ fontSize: 24, color: "#8391A1", paddingTop: 10 }}>{userData ? userData.email : 'email'}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.footer}>
        <BottomTabNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: '7%',
    marginLeft: "3%",
    marginRight: "3%",
  },
  image: {
    width: 42,
    height: 42,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  infoCont: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
    width: "90%",
    height: 55,
    borderRadius: 10,
    borderColor: '#DADADA',
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
  },
  footer: {
    marginTop: "auto", // Place the tabs at the bottom
  },
});

export default Profile;
