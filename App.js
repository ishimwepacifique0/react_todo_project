import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import MyComponent from './components/MainNav';
import Screen from './components/MainNav';
import LoginScreen from './components/Navigation/loginscreen';
import ScreenHome from './components/ScreenHome';
import Navbottom from './components/MainNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignScreen from './components/signupScreen';


const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='login'>
        <stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
        <stack.Screen name='signup' component={SignScreen} options={{headerShown:false}} />
        <stack.Screen name='home' component={Navbottom} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
     
    // <Navbottom/>
  )
}