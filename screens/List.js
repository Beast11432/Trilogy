import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, ScrollView, SectionList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BlackOpsOne_Regular, BungeeInline_Regular, HennyPenny_Regular, PressStart2P_Regular, Righteous_Regular,  Shojumaru_Regular} from '@expo-google-fonts/inter';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DATA2 = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const List = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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
                <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                  <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular', marginTop: 50, marginBottom: 10}}>FlatList</Text>
                  <View>
                  <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
                  </View>
                  <View style={styles.container}>
                  <Text style={{textAlign: 'center', fontSize: 50, fontFamily: 'BlackOpsOne_Regular', marginTop: 50, marginBottom: 10}}>SectionList</Text>
                  <SectionList sections={DATA2} keyExtractor={(item, index) => item + index} renderItem={({ item }) => <Item title={item} />} renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)}/>
                  </View>
                </View>
                <StatusBar style="light" />
                </SafeAreaView>
        );
    }
}

export default List;


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 50,
        textAlign: 'center'
    },    
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    header: {
      fontSize: 32,
      textAlign: 'center',
      backgroundColor: "#fff"
    },
})