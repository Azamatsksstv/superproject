import React, { useState } from 'react'; 
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Alert, 
  TextInput, 
} from 'react-native'; 
import { Agenda, Calendar } from 'react-native-calendars'; 
 
function Calendarscreen() { 
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]); 
  const [newPlan, setNewPlan] = useState(''); 
  const [items, setItems] = useState({ 
    '2023-10-12': [{ name: 'Coding' }, { name: 'Workout' }, { name: 'Dinner' }], 
    '2023-10-13': [{ name: 'Writing' }] 
  }); 
 
  const handleDayPress = (day) => { 
    setSelectedDay(day.dateString); 
  }; 
 
  const handleAddPlan = () => { 
    if (!selectedDay) { 
      alert('Please select a day first'); 
      return; 
    } 
 
    Alert.prompt( 
      'Enter Plan', 
      'Enter your plan for the day:', 
      (text) => { 
        if (text.trim()) { 
          const newItems = { ...items }; 
          const plan = { name: text.trim() }; 
          if (newItems[selectedDay]) { 
            newItems[selectedDay].push(plan); 
          } else { 
            newItems[selectedDay] = [plan]; 
          } 
          setItems(newItems); 
        } else { 
          alert('Please enter a plan'); 
        } 
      } 
    ); 
  }; 
 
  return ( 
    <SafeAreaView style={styles.container}> 
      <Agenda 
      theme={{ 
          todayTextColor: 'white', 
          todayBackgroundColor: '#ABD8BB', 
          arrowColor: '#ABD8BB', 
          selectedDayBackgroundColor: 'green', 
          selectedDayTextColor: 'black', 
          textDayFontWeight: 'bold', 
          'stylesheet.calendar.header': { 
            headerContainer: { 
              flexDirection: 'row', 
              borderRadius: 12, 
              backgroundColor: '#ABD8BB', 
            }, 
          }, 
        }} 
        selected={selectedDay} 
        items={items} 
        onDayPress={handleDayPress} 
        renderItem={(item, isFirst) => ( 
          <TouchableOpacity style={styles.item}> 
            <Text style={styles.itemText}>{item.name}</Text> 
          </TouchableOpacity> 
        )} 
      /> 
      {selectedDay && ( 
        <View style={styles.addButtonContainer}> 
          <TouchableOpacity style={styles.addButton} onPress={handleAddPlan}> 
            <Text style={styles.buttonText}>+</Text> 
          </TouchableOpacity> 
        </View> 
      )} 
       
    </SafeAreaView> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: 'white', // Changed background color to white 
  }, 
  item: { 
    backgroundColor: 'white', 
    flex: 1, 
    borderRadius: 5, 
    padding: 10, 
    marginRight: 10, 
    marginTop: 17, 
  }, 
  itemText: { 
    color: '#888', 
    fontSize: 16, 
  }, 
  addButtonContainer: { 
    position: 'absolute', 
    bottom: 20, 
    right: 20, 
    alignItems: 'center', 
  }, 
  addButton: { 
    backgroundColor: 'green', // Changed button background color to green 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  buttonText: { 
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
  }, 
  
}); 


export default Calendarscreen;




