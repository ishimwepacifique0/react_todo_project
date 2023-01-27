import { View,Text,ScrollView, SafeAreaView,Platform,StyleSheet,Image} from "react-native";
import { Ionicons,MaterialIcons,Feather} from "@expo/vector-icons";

import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function User({navigation}){
    return(
    <SafeAreaView style={{paddingTop:Platform.OS==='android'?30:40 }}>
       <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.titlebar}>
                 <Pressable onPress={() => navigation.navigate('Home') }>
                 <Ionicons  name='ios-arrow-back' size={24} color='#52575D' 
                />
                 </Pressable>
                 <Text style={{fontWeight:"bold", fontSize:20}}>
                     Profile
                 </Text>
                 <Pressable onPress={()=> navigation.navigate('login')}>
                 <Feather name="bar-chart-2" size={24} color="black" />
                 </Pressable>
                 
            </View>
          <View style={{ alignSelf:'center'}}>
            <View style={styles.profileImage}>
              <Image source={require('./profile.jpg')}  style={styles.image} resizeMode="center"/>
            </View>
            <View style={styles.dm}>
                <MaterialIcons name='chat' size={24}  color='#DFD8C6'/>
            </View>
            <View style={styles.active}></View>
            <View style={styles.add} >
                <Ionicons  name='ios-add' color={'#DFD8c6'} size={24} style={{marginTop:6,marginLeft:2}}/>
            </View>
            </View>
            <View style={styles.infocontianer}>
              <Text style={[ styles.text,{fontSize:24,fontWeight:"500"},]} >Paccy Dev</Text>
              <Text style={[ styles.text,{fontSize:20,color:'darkblue'},]} >Mobile Developer</Text> 
              <Text style={[ styles.text,{fontSize:20,color:'darkblue'},]} >Back-end Developer</Text>
              <Text style={[ styles.text,{fontSize:20,color:'darkblue'},]} >Front-end Developer</Text>
            </View>

            <View style={styles.statscontainer}>
              <View style={[styles.statbox,{borderRightWidth:1}]}>
                <Text>Reactjs</Text>
                <Text>Nodejs</Text>
              </View>
              <View style={[styles.statbox,{borderRightWidth:1}]}>
                <Text>Django</Text>
                <Text>Python</Text>
              </View>
              <View style={[styles.statbox,{borderRightWidth:1}]}>
                <Text>Flutter</Text>
                <Text>Dart</Text>
              </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
    },
    text:{
      color:'#52575D'
    },
    image:{
      flex:1,
      marginTop:10,
      width:undefined,
      height:undefined,
      borderRadius:100
    },
    titlebar:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:24,
      marginHorizontal:16,
      marginBottom:20,


    },
    profileImage:{
      width:200,
      height:200,
      borderRadius:100,
      overflow:'hidden'
    },
    dm:{
      backgroundColor:'#41444B',
      position:'absolute',
      top:20,
      width:48,
      height:48,
      padding:10,
      borderRadius:50,
      alignContent:'center',
      justifyContent:'center'
    },
    active:{
      backgroundColor:'#34FFB9',
      position:'absolute',
      bottom:28,
      left:10,
      padding:4,
      height:28,
      width:28,
      borderRadius:50
    },
    add:{
      backgroundColor:'#41444B',
      position:'absolute',
      bottom:0,
      right:0,
      width:48,
      height:48,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center'
  
    },
    infocontianer:{
      alignItems:'center',
      textAlign:'center',
      marginTop:16
  
    },
    statscontainer:{
      flexDirection:'row',
      alignSelf:'center',
      margin:32
    },
    statbox:{
      alignItems:'center',
      flex:1
  
    }
  })
