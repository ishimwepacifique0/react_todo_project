import { 
    Text, 
    View,
    TextInput,
    SafeAreaView,
    Platform,
    Button,
    StyleSheet,
    StatusBar
} from 'react-native'
import React, { useState,useEffect } from 'react'

const ImageLog = require('./image/logo-symbol-dark.png')
export default function LoginScreen() {
    return (
      <SafeAreaView style={styles.containerFom}>
        <View style={styles.form}>
            <Text style={styles.header}> Login </Text>
           <View>
             <Text style={styles.label}>Email or Username</Text>
               <View>
                <TextInput 
                style={styles.username}  
                placeholder="Enter you username or email"
                />
               </View>
            </View>
            <View>
             <Text style={styles.label}>Password</Text>
               <View>
                <TextInput 
                style={styles.username}  
                placeholder="Enter your password"
                secureTextEntry={true}
                />
               </View>
            </View>
            <View style={styles.submitButton}>
                <Button 
                title='Login' 
                color='teal'
                />
            </View>
        </View>
      </SafeAreaView>
    );
  }

  const  styles = StyleSheet.create({
    containerFom:{
      margin:20,
      flexDirection:'column',
      marginTop:80

    },
    form:{
        borderWidth:1,
        padding:20,
        borderColor:'#cccccc',
        borderRadius:5,
        paddingBottom:20

        
    },
    header:{
        fontSize:40,
        color:'teal',
        textAlign:'center',
        fontWeight:'bold',
        margin:20
    },
    label:{
       margin:9,
       fontSize:17
    },
    username:{
        borderWidth:1,
        borderRadius:8,
        padding:17,
        borderColor:'#cccccc'
    },
    submitButton:{
        marginTop:20
    }

  })