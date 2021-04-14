import React from 'react';
import { StyleSheet, View } from 'react-native';
import CamHandler from './CamHandler';
import ImagePickerScreen from './ImagePickerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera Handler" component={CamHandler} />
        <Stack.Screen name="Image Picker" component={ImagePickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16ADEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
