import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Edit() {
  const route = useRoute();
  const userData = route.params?.userData || { name: '', email: '' }; // Add null check here
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/my_profile/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userData, name, email }),
      });
      if (response.ok) {
        navigation.navigate('Profile', { userData: { ...userData, name, email } });
      } else {
        console.error('Failed to save changes:', response.status);
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  }; 

  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      {/* icons */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={goToProfile}>
          <Image source={require('../assets/back.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* profile page*/}
      <View style={{ alignSelf: "center", paddingTop: 50 }}>
        <View style={styles.profileImage}>
          <Image source={userData.profileImage} style={styles.circle} resizeMode="center" />
        </View>
        <View style={styles.edit}>
          <Image source={require('../assets/edit.svg')} style={{ marginTop: 6, marginLeft: 2, width: 48, height: 48 }} />
        </View>
      </View>

      {/* info */}
      <View style={{ marginTop: 40 }}>
        <View style={styles.infoCont}>
          <TextInput
            value={name}
            onChangeText={handleNameChange}
            placeholder="Name"
            placeholderTextColor={'black'}
            style={{ fontSize: 24, color: "#8391A1", paddingTop: 10 }} />
        </View>

        <View style={styles.infoCont}>
          <TextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email"
            placeholderTextColor={'black'}
            style={{ fontSize: 22, color: "#8391A1", paddingTop: 10 }}
          />
        </View>
        <View style={styles.infoCont}>
            <TouchableOpacity onPress={handleSave}>
              <Text style={{fontSize: 22, color: "black", paddingTop: 10}}>Save</Text>
            </TouchableOpacity>
        </View>
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
    // padding: 15,
    marginTop: '5%',
    justifyContent: 'space-around'
  },
  image: {
    width: 45,
    height: 45
  },
  circle: {
    width: undefined,
    height: undefined
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  edit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  infoCont: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
    width: "80%",
    height: 55,
    borderRadius: 10,
    borderColor: '#DADADA',
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1
  }
});
