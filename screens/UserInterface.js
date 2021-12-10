import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Text, View, Button, ScrollView, Switch } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';

const Separator = () => (
    <View style={styles.separator} />
  );

const BasicComponents = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>Button</Text>
                <View>
                <Text style={styles.customTitle}>
                    The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
                <Separator />
                <View>
                <Text style={styles.customTitle}>
                    Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
                </View>
                <Separator />
                <View>
                <Text style={styles.customTitle}>
                    All interaction for the component are disabled.
                </Text>
                <Button
                    title="Press me"
                    disabled
                    onPress={() => Alert.alert('Cannot press this one')}
                />
                </View>
                <Separator />
                <View>
                <Text style={styles.customTitle}>
                    This layout strategy lets the title define the width of the button.
                </Text>
                <View style={styles.fixToText}>
                    <Button
                    title="Left button"
                    onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                    title="Right button"
                    onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                </View>
                <View style={styles.container}>
                <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular'}}>Switch</Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
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
    customTitle: {
        textAlign: 'center', 
        marginVertical: 8, 
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    container: {
        margin: 50,
        justifyContent:'center',
        marginHorizontal: 16,
        alignItems: "center",
        flex: 1,
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
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})