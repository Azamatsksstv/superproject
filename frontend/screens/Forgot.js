import React from 'react';
import { View, Text,StyleSheet,SafeAreaView,TextInput,Pressable,Image } from 'react-native';
import COLORS from '../constants/color.js';
import Button from '../components/Button';




const Forgot = ({navigation}) => {
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
                        Forgot Password?
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                </View>
                <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                    <Button title="Send code" filled onPress={() => navigation.navigate("Otp")
} style={styles.btn1} />
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

export default Forgot;
