import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Calendarscreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="permission" />
      </View>
    );
  }

  useEffect(() => {
    // Request camera permissions when the component mounts
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      console.log('Camera permission status:', status);
    })();
  }, []);

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  // Function to handle taking a picture
  const takePicture = async () => {
    if (!isCameraReady) {
      console.warn('Camera is not ready');
      return;
    }

    try {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo);
      // Send the captured photo to the API
      await sendPhotoToAPI(photo);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };

  async function sendPhotoToAPI(photo) {
    try {
      // Convert the photo to a format suitable for sending in a POST request
      let formData = new FormData();
      formData.append('image', {
        uri: photo.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });

      // Send the image to the API endpoint
      let response = await fetch('https://akberdievkakow.pythonanywhere.com/api/v1/identify-plant/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response from the API
      if (response.ok) {
        let data = await response.json();
        console.log('Plant identification result:', data);
      } else {
        console.error('Failed to identify plant:', response.status);
      }
    } catch (error) {
      console.error('Error identifying plant:', error);
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Ionicons style={styles.text} name="refresh-circle" size={44} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    margin: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Calendarscreen;

