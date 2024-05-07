import React from 'react';
import { View, Text,StyleSheet,SafeAreaView,TextInput,Image,Pressable} from 'react-native';
import Button from '../components/Button';





const CameraImage = ({navigation}) => {
  return (
     <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/sunflower.jpg')}/>
        </View>

        <View style={styles.containerX}>
            <View style={{marginLeft:'3%'}}>
                <Text style={{fontSize:'29', fontWeight:"bold"}}>Sunflower</Text>
                <Text style={{fontSize:'18'}}>Flowering plants</Text>

                <View style={styles.containerY}>
                    <Text style={{fontSize:'29', fontWeight:"bold"}}>Description</Text>
                    <Text style={{fontSize:'18'}}>Sunflowers plants display a behavior called heliotropism. The flower buds and young blossoms will face east in the morning and follow the sun as the earth moves during the day.</Text>
                </View>

            <View style={styles.containerY}>
                <Text style={{fontSize:'29', fontWeight:"bold"}}>Watering</Text>
                <Text style={{fontSize:'18'}}>You need to give your plant 5000 ml of water every 3 days. </Text>
            </View>

            <View style={styles.containerY}>
                <Text style={{fontSize:'29', fontWeight:"bold"}}>Temperature</Text>
            </View>
            <Text style={{fontSize:'29', fontWeight:"bold"}}>Reminders</Text>
            <View style={styles.containerY}>
                <View style={styles.settingItem}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/drop.svg')} style={{ width: 24, height: 24}}/>
                        <Text style={{fontSize:'24', fontWeight:"bold"}}>Watering</Text>
                    </View>
                    <View style={styles.switchBorder}>
                        <Switch
                            trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                            thumbColor={notificationEnabled ? "#767577" : "#767577"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleNotification}
                            value={notificationEnabled}
                        />
                    </View>
                </View>

                <View style={styles.settingItem}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/leaf.svg')} style={{ width: 24, height: 24}}/>
                        <Text style={{fontSize:'24', fontWeight:"bold"}}>Fertilizing</Text>
                    </View>
                    <View style={styles.switchBorder}>
                        <Switch
                            trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                            thumbColor={notificationEnabled ? "#767577" : "#767577"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleNotification}
                            value={notificationEnabled}
                        />
                    </View>
                </View>

            </View>
            </View>
        </View>
     </View>
  );
};

 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width: '100%',
        height: 242
    },
    containerX:{
        borderTopWidth: 20,
    },
    switchBorder: {
        borderWidth: 5,
        borderColor: 'gray',
        borderRadius: 20,
        padding: 5,
        marginBottom: 10,
        marginRight: 5
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginVertical: 15,
        borderBottomColor: "#999999",
        borderBottomWidth: 2
    },
    containerY:{
        width: '90%',
        backgroundColor:'#F7F8F9',
        borderWidth:1,
        borderColor:"gray",
        borderRadius:20,
        marginBottom:5,
        shadowColor: '#000',
            shadowOffset: { width: 2, height: 5 },
            shadowOpacity:  0.4,
            shadowRadius: 1,
            elevation: 5,
        marginLeft: '5%',
        padding:5
      },
});

export default CameraImage;
