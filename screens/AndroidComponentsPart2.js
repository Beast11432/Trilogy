import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ToastAndroid, Text, View, StyleSheet, PermissionsAndroid} from 'react-native';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
};

const AndroidComponentsPart2 = () => {

    const showToast = () => {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      };
    
      const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Us",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
    
      const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
          "A wild toast appeared!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      };

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
            <View style={styles.container}>
                <View style={{bottom: 140}}>
                <Text style={styles.item}>Try permissions</Text>
                <Button title="request permissions" onPress={requestCameraPermission} />
                </View>
                <View>
                <Text style={styles.item}>ToastAndroid</Text>
                <Button title="Toggle Toast" onPress={() => showToast()} />
                <Button title="Toggle Toast With Gravity" onPress={() => showToastWithGravity()}/>
                <Button title="Toggle Toast With Gravity and Offset" onPress={() => showToastWithGravityAndOffset()}/>
                </View>
                <StatusBar style="light" />
            </View>
            
        )
    }
}

export default AndroidComponentsPart2;

const styles = StyleSheet.create({
    container: {
        margin: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    item: {
        fontFamily: 'BlackOpsOne_Regular',
        margin: 10,
        fontSize: 40,
        textAlign: "center"
    }
  });