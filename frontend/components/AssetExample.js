import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        How to water the plant?
      </Text>
      <Text>Lorem ipsum dolor sit amet, tempor ut labore aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</Text>

      <AntDesign style = {styles.logo} name="hearto" size={24} color="green" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor:'#F7F8F9',
    borderWidth:1,
    borderColor:"gray",
    borderRadius:20,
    marginBottom:30,
    shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity:  0.4,
        shadowRadius: 1,
        elevation: 5,
  },
  paragraph: {
    width:'100%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
   alignSelf: 'flex-end'
  }
});
