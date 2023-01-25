import { View, Text } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenHome from './ScreenHome'

//screen 

import HomeScreen from './Navigation/HomeScreen'
import Setting from './Navigation/Setting'
import Detail from './Navigation/Detail'
import { Feather, Ionicons } from '@expo/vector-icons'
import LoginScreen from './loginscreen'


const { Navigator,Screen } = createBottomTabNavigator()


export default function Navbottom(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                name='Home' 
                component={ScreenHome}
                options={{
                    tabBarIcon: () =>{
                        return <Feather name='home' size={30} />
                    }
                }}
                />
                <Screen 
                name='Messange' 
                component={Setting}
                options={{
                    tabBarIcon: () =>{
                        return <Feather name='inbox' size={30} />
                    }
                }}/>
                <Screen 
                name='File' 
                component={Setting}
                options={{
                    tabBarIcon: () =>{
                        return <Feather name='file' size={30} />
                    }
                }}/>
                <Screen 
                name='Notification' 
                component={Setting}
                options={{
                    tabBarIcon: () =>{
                        return <Ionicons name='search' size={34} />
                    }
                }}/>
                <Screen 
                name='Profile' 
                component={LoginScreen}
                options={{
                    tabBarIcon: () =>{
                        return <Feather name='user' size={30} />
                    }
                }}/>
            </Navigator>
        </NavigationContainer>
    );
}