
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import List from './screens/List';
import BasicComponents from './screens/BasicComponents';
import AndroidComponents from './screens/AndroidComponents';
import AndroidComponentsPart2 from './screens/AndroidComponentsPart2';
import UserInterface from './screens/UserInterface';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{headerShown: false}}/>
        <Stack.Screen component={Home} name="Home" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen component={List} name="List" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen component={BasicComponents} name="BasicComponents" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen component={AndroidComponents} name="AndroidComponents" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Stack.Screen component={AndroidComponentsPart2} name="AndroidComponentsPart2" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen component={UserInterface} name="UserInterface" options={{headerStyle: {backgroundColor: '#334756'}, headerTintColor: '#fff', headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}


export default App;


const styles = StyleSheet.create({
  
})