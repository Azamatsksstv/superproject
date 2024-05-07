import React, { useState }  from 'react';
import { View, Text,StyleSheet,SafeAreaView,TextInput,Image,Pressable} from 'react-native';
import COLORS from '../constants/color.js';
import Button from '../components/Button';
import { OtpInput } from "react-native-otp-entry";
import axios from 'axios'; // импортируем Axios
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const email = AsyncStorage.getItem('email');
    const handleVerify = () => {
    console.log(email['_j'])
    axios.post('https://akberdievkakow.pythonanywhere.com/api/v1/accounts/verify/', {
        email: email['_j'],
        otp: otp,
    })
    .then(response => {
        if (response.status === 200) {
            // Если успешно, перейдите на следующий экран (например, на экран с изменением пароля)
            navigation.navigate('InfoUser');
        } else {
            // В случае ошибки, выведите сообщение об ошибке
            console.error(response.data);
            Alert.alert('Error', 'Failed to verify OTP');
        }
    })
    .catch(error => {
        // Обработка ошибок сети или сервера
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred, please try again later');
    });
};
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22,marginTop:'10%' }}>
            <Pressable onPress={() => navigation.goBack()}>
            <Image style={styles.back} source={require('../assets/back.png')}/>
       </Pressable>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        OTP Verification
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Enter the verification code we just sent on your email address.</Text>
                </View>

                <OtpInput
  numberOfDigits={4}
  focusColor="green"
  onTextChange={setOtp}
  focusStickBlinkingDuration={500}
  // onTextChange={(text) => console.log(text)}
  onFilled={(text) => console.log(`OTP is ${text}`)}
  theme={{
    containerStyle: styles.container,
    inputsContainerStyle: styles.inputsContainer,
    pinCodeContainerStyle: styles.pinCodeContainer,
    pinCodeTextStyle: styles.pinCodeText,
    focusStickStyle: styles.focusStick,
    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
  }}
/>


                    <Button title="Verify" 
                    onPress= 
                      {handleVerify}
                      // navigation.navigate("Newpassword")
                     filled style={styles.btn1} 
                      />
              </View>
       </SafeAreaView>
  );
};

 
const styles = StyleSheet.create({
  btn1:{
    width:'100%',
    borderRadius:6,
    backgroundColor:COLORS.primary,
    alignSelf: 'center',
    marginTop:"10%",
  }, 
   back: {
    width: 40,
    height: 40,
  },
 
 
});

export default Otp;
