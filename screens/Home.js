
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';
  
  const Home = ({route, navigation}) => {

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
      return(
        <ScrollView>
          <SafeAreaView>
          <Animatable.View easing="ease-in" style={styles.container}>
            <Text style={styles.title}> Welcome {route.params.paramKey}! </Text>
            <TouchableOpacity animation="bounceIn" style={styles.BasicButton} onPress={() => navigation.navigate('BasicComponents')}>
              <Text style={styles.basicTitle}>Basic Components Examples</Text>
            </TouchableOpacity>
            <TouchableOpacity animation="bounceIn" style={styles.ListButton} onPress={() => navigation.navigate('List')}>
              <Text style={styles.buttonTitle}>List Views Examples</Text>
            </TouchableOpacity>
            <TouchableOpacity animation="bounceIn" style={styles.UserButton} onPress={() => navigation.navigate('UserInterface')}>
              <Text style={styles.userTitle}>User Interface Examples</Text>
            </TouchableOpacity>
            <TouchableOpacity animation="bounceIn" style={styles.Android1Button} onPress={() => navigation.navigate('AndroidComponents')}>
              <Text style={styles.androidTitle}>Android Components and APIs Examples (Part 1)</Text>
            </TouchableOpacity>
            <TouchableOpacity animation="bounceIn" style={styles.Android2Button} onPress={() => navigation.navigate('AndroidComponentsPart2')}>
              <Text style={styles.androidTitle}>Android Components and APIs Examples (Part 2)</Text>
            </TouchableOpacity>
            <StatusBar style="light" />
          </Animatable.View>
          </SafeAreaView>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0A500',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageList: {
        margin: 5,
    },
    title: {
    fontFamily: 'Shojumaru_Regular',
    color: '#334756',
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    },
    basicTitle: {
      fontSize: 30,
      color: '#fff',
      textAlign: 'center',
      marginTop: 30,
      fontFamily: 'BlackOpsOne_Regular',
    },
    androidTitle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center',
      marginTop: 30,
      fontFamily: 'BlackOpsOne_Regular',
    },
    userTitle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center',
      marginTop: 35,
      fontFamily: 'BlackOpsOne_Regular',
    },
    buttonTitle: {
      fontSize: 30,
      color: '#fff',
      textAlign: 'center',
      marginTop: 35,
      fontFamily: 'BlackOpsOne_Regular',
    },
    BasicButton: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
      borderColor: 'white',
    },
    ListButton: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
    },
    Android1Button: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
    },
    Android2Button: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
    },
    UserButton: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
    },
    OthersButton: {
      backgroundColor: "#082032",
      padding: 20,
      borderRadius: 50,
      width: '80%',
      height: 150,
      margin: 10,
    },
  })

  export default Home;