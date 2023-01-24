import {
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    View,
    Image,
    StatusBar,
    Platform,
    Alert

} from 'react-native'
import React,{useState,useEffect} from 'react'

const imageplace = require('./image/logo-symbol-dark.png')

export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.textHeader}>
                <Text style={styles.text} onPress={()=>Alert.alert(
                    "Todo Project",
                    'Hey you should signed in please',
                    ['Yes',]['No']
                    )}>Todo Project</Text>
                </View>
                <View>
                <Image source={imageplace}  style={styles.imageHeader}/>
                </View>
                 
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS==='android'?30:40,
    },
    headerContainer:{
        backgroundColor:'teal',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        
    },
    imageHeader:{
        width:50,
        height:50
    },
    textHeader:{
        justifyContent:'flex-end',
        marginRight:20,
        fontSize:80
    },
    text:{
        fontSize:20,
        lineHeight:30,
        color:'white',
        fontWeight:'bold',
    }

})