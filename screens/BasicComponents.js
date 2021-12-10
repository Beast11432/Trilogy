import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';


const BasicComponents = () => {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

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
            <ScrollView>
                <SafeAreaView>
                <View style={styles.customcontainer}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>View</Text>
                <View style={{flexDirection: 'row', height: 100, padding:20}}>
                <View style={{ backgroundColor: "blue", flex: 1, }}/>
                <View style={{ backgroundColor: "red", flex: 1, }}/>
                </View>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>Text</Text>
                <Text style={{textAlign: 'center', fontSize: 50}}>Hello World!</Text>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>IMAGE</Text>
                <View style={styles.container}>
                <Image style={styles.tinyLogo} source={require('../assets/img/logo1.png')}/>
                </View>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>TextInput</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
                <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} placeholder="useless placeholder" keyboardType="numeric"/>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>ScrollView</Text>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                </ScrollView>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>StyleSheet</Text>
                <View style={styles.customContainer}>
                <Text style={styles.titleStyle}>React Native</Text>
                </View>
                </View>
                </SafeAreaView>
                <StatusBar style="light" />
            </ScrollView>
        );
    }
}

export default BasicComponents;


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 50,
    },
    customcontainer: {
        margin: 50,
    },
    container: {
        margin: 50,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
    },
    customContainer: {
        flex: 1,
        padding: 24,
    },
    titleStyle: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      }
})