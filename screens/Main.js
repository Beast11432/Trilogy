
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';

const Main = ({navigation}) => {

  const [userName, setUserName] = useState('');

  let [fontsLoaded] = useFonts({
    BlackOpsOne_Regular,
    BungeeInline_Regular,
    HennyPenny_Regular,
    PressStart2P_Regular,
    Righteous_Regular,
    Shojumaru_Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor: '#F0A500'}}>
        <View style={styles.container}>
        <View style={{marginTop:50}}>
          <Animatable.Text animation="bounceIn" duration={1000} easing="ease-in" style={styles.title}>TRILOGY</Animatable.Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Animatable.Image animation="bounceIn" duration={1000} easing="ease-in" source={require('../assets/img/logo1.png')} style={styles.image}/>
        </View>
        <View style={styles.container}>
        <Animatable.View animation="bounceIn" duration={1000} easing="ease-in">
          <TextInput style={styles.nameInput} value={userName} onChangeText={(username) => setUserName(username)}
          placeholder={'Enter your name'}/>
            <TouchableOpacity animation="bounceIn" onPress={() => navigation.navigate('Home', {paramKey: userName})} style={styles.button}>
              <Text style={styles.getStarted}>Get Started</Text>
              <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" style={{left:100}}/>
            </TouchableOpacity>
            <StatusBar style="light" />
        </Animatable.View >
        </View>
        </View>
        </SafeAreaView>
      );
    }
  }


export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    color: 'black',
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 5,
    width: '80%',
    borderRadius: 20,
    margin: 5,
    textAlign: 'center',
  },
  nameInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 5,
  },
  button: {
    backgroundColor: "#082032",
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Shojumaru_Regular',
    color: '#082032',
    fontSize: 50,
    textAlign: 'center',
    letterSpacing: 10,
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    bottom: '5%',
  },
  getStarted: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
