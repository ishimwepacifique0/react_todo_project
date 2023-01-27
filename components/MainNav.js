import { View, Text } from 'react-native'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenHome from './ScreenHome'

//screen 
import { Feather, Ionicons } from '@expo/vector-icons'
import Setting from './Navigation/Calculate'
import User from './user'


const { Navigator,Screen } = createBottomTabNavigator()


export default function Navbottom(){
    return(
            <Navigator screenOptions={{
                headerShown:false,
                tabBarHideOnKeyboard:true
            }} >
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
                name='Tax' 
                component={Setting}
                options={{
                    tabBarIcon: () =>{
                        return <Feather name='inbox' size={30} />
                    }
                }}/>
                <Screen 
                name='Profile' 
                component={User}
                options={{
                    tabBarIcon: () =>{

                        return <Feather name='user' size={30} />
                    }
                }}/>

            </Navigator>
    );
}