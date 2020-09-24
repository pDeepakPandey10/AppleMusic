import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity, Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SearchList from '../AppleMusic/src/searchResult';

function HomeScreen({navigation}) {
  const [inputText,setInputText] = useState('');
  const _handle = () => {
    (inputText == '') ? Alert.alert('Enter Any keyWord to search') : 
    navigation.navigate('Result',{
      data : inputText
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={styles.image} source={require('../AppleMusic/src/assests/BG.jpg')}>
        <View style={styles.container}>
          <View style={{height:150, opacity:1,margin:20}}>
            <Text style={styles.text}> Search Your Favorite Music</Text>
          </View>
          <View style={{height:40,backgroundColor:'#fff', opacity:1,flexDirection:'row',margin:10}}>
            <Ionicons name="ios-search" style={{fontSize:24,color:'#000',marginTop:6,marginLeft:5}}/>
            <TextInput style={styles.text_input} onChangeText={(text) => setInputText(text)}></TextInput>
          </View>
          <TouchableOpacity onPress={() => _handle()}>
            <Text style={{color:'#fff',fontSize:24,fontWeight:'bold',alignSelf:'flex-end',margin:20}}
            >Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={SearchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    opacity:0.7
  },
  image: {
    flex: 1
  },
  text_input: {
    marginLeft:20,
    height: 40,
    width:"80%",
    backgroundColor: '#fff',
    borderRadius:10
  },
  text:{
    padding:20,
    color:'#fff',
    fontSize:40,
    fontWeight:'700',
    alignSelf:'center'
  }
});

export default App;
