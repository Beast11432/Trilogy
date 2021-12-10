import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';


const AndroidComponents = () => {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");
    const changeDrawerPosition = () => {
        if (drawerPosition === "left") {
        setDrawerPosition("right");
        } else {
        setDrawerPosition("left");
        }
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
        <Text style={styles.paragraph}>I'm in the Drawer!</Text>
        <Button
            title="Close drawer"
            onPress={() => drawer.current.closeDrawer()}
        />
        </View>
    );


    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    
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
        <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={drawerPosition} renderNavigationView={navigationView}>
        <View style={styles.container}>
        <View>
        <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'BlackOpsOne_Regular', bottom: 140}}>BackHandler</Text>
        <Text style={styles.text}>Click Back button!</Text>
        </View>
        <View>
        <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'BlackOpsOne_Regular'}}>DrawerLayoutAndroid</Text>
            <Text style={styles.paragraph}>
                Drawer on the {drawerPosition}!
            </Text>
            <Button title="Change Drawer Position" onPress={() => changeDrawerPosition()}/>
                <Text style={styles.paragraph}>
                    Swipe from the side or press button below to see it!
                </Text>
            <Button title="Open drawer" onPress={() => drawer.current.openDrawer()}/>
        </View>
        </View>
        <StatusBar style="light" />
        </DrawerLayoutAndroid>
        );
    }
}

export default AndroidComponents;


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 50,
    },
    container: {
        margin: 50,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    },
    tinyLogo: {
        width: 100,
        height: 100,
        left: 100,
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
        bottom: 140,
        fontSize: 25,
        fontWeight: "bold",
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
    },
    item: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
})