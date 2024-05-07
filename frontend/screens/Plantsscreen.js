import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Plants');
  const [plants, setPlants] = useState([]);
  const [camera, setCamera] = useState([]);
  // Function to add a new plant
  const addPlant = () => {
    // Add your logic to add a new plant to the 'plants' array
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>My Plants</Text>
      <View style={styles.bar}>
        <Pressable style={styles.barText} onPress={() => handleOptionPress('Plants')}>
          <View style={styles.barView}>
            <Text style={styles.text2}>Plants</Text>
          </View>
        </Pressable>
        <Pressable style={styles.barText} onPress={() => handleOptionPress('Reminders')}>
          <View style={styles.barView}>
            <Text style={styles.text2}>Reminders</Text>
          </View>
        </Pressable>
        <Pressable style={styles.barText} onPress={() => handleOptionPress('Snap History')}>
          <View style={styles.barView}>
            <Text style={styles.text2}>Snap History</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.center}>
        {selectedOption === 'Plants' && (
          <View style={styles.centerContainer}>
            {plants.length === 0 ? (
              <View style={styles.containerX}>
                <Text style={{fontSize:19, fontWeight:'bold', margin:'3%'}}>You Have No Plant</Text>
                <Text style={{fontSize:14, margin:'3%'}}>Add your first plant and start caring for it</Text>
              </View>
            ) : (
              <View style={styles.containerX}>
                {plants.map((plant, index) => (
                  <View key={index} style={styles.containerY}>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={camera[index]} style={styles.plantImage} />
                      <Text>{plant.name}</Text>
                    </View>

                    <View style={{padding: 5, marginBottom: 10, marginRight: 5}}>
                      <Image source={require('../assets/forward.svg')} style={{ width: 6, height: 12}}/>
                    </View>
                  </View>
                ))}
                </View>
            )}
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={addPlant}>Add plant</Text>
            </Pressable>
          </View>
        )}

        {selectedOption === 'Reminders' && (
          <View style={styles.centerContainer}>
            {plants.length === 0 ? (
              <View style={styles.containerX}>
                <Text style={{fontSize:19, fontWeight:'bold', margin:'3%'}}>You Have No Plant</Text>
                <Text style={{fontSize:14, margin:'3%'}}>Add your first plant and start caring for it</Text>
              </View>
            ) : (
              <View style={styles.containerX}>
                {plants.map((plant, index) => (
                  <View key={index} style={styles.containerY}>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={camera[index]} style={styles.plantImage} />
                      <Text>{plant.name}</Text>
                    </View>

                    <View style={{padding: 5, marginBottom: 10, marginRight: 5}}>
                      <Image source={require('../assets/forward.svg')} style={{ width: 6, height: 12}}/>
                    </View>
                  </View>
                ))}
                </View>
            )}
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={addPlant}>Add plant</Text>
            </Pressable>
          </View>
        )}

        {selectedOption === 'Snap History' && (
          <View style={styles.centerContainer}>
            {camera.length === 0 ? (
              <View style={styles.containerX}>
                <Text style={{fontSize:19, fontWeight:'bold', margin:'3%'}}>You Have No Plant</Text>
                <Text style={{fontSize:14, margin:'3%'}}>Add your first plant and start caring for it</Text>
              </View>
            ) : (
              <View style={styles.containerX}>
                {camera.map((plant, index) => (
                  <View key={index} style={styles.containerY}>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={camera[index]} style={styles.plantImage} />
                      <Text>{plant.name}</Text>
                    </View>

                    <View style={{padding: 5, marginBottom: 10, marginRight: 5}}>
                      <Image source={require('../assets/drop.svg')} style={{ width: 12, height: 12}}/>
                      <Image source={require('../assets/leaf.svg')} style={{ width: 12, height: 12}}/>
                      <Image source={require('../assets/forward.svg')} style={{ width: 6, height: 12}}/>
                    </View>
                  </View>
                ))}
                </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding:0
  },
  text1:{
    fontSize: 29,
    margin: '5%',
    fontWeight: 'bold'
  },
  bar:{
    flexDirection: 'row',
    width:'95%',
    height:'40',
    marginLeft:'3%',
    borderRadius: 20,
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
  },
  barText:{
    marginTop:'2%',
    marginBottom:'2%',
    marginLeft:'3%',
  },
  barView:{
    width:115,
    height:29,
    borderRadius: 20,
    borderColor: '#DADADA',
    backgroundColor: 'rgba(72, 131, 80, 0.2)',
    elevation: 2,
    borderWidth: 1,
    alignItems: 'center'
  },
  text2:{
    fontSize:17, 
    fontWeight:'600', 
    color:'#3B6D41', 
    marginTop:'5%'
  },


  center: {
    alignItems: 'center',
    marginTop: '10%',
    width: '100%'
  },
  centerContainer: {
    alignItems: 'center',
    width: '100%'
  },

  containerX:{
    width:'90%',
    height: 450,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:"gray",
    borderRadius:20,
    marginBottom:30,
    shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity:  0.4,
        shadowRadius: 1,
        elevation: 5,
    marginLeft: '1%',
  },
  containerY:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginVertical: 10,
    borderBottomColor: "#999999",
    borderBottomWidth: 2
  },





  button: {
    backgroundColor: '#488350',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: 20,
    marginTop: '1%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  plantImage:{
    width: 40,
    height: 40,
    marginRight: 5
  },
  
});

export default YourComponent;
