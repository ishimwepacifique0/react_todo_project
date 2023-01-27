import {
    StyleSheet,
    View,
    Text,
    Platform,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native';
 import { Ionicons,Entypo,FontAwesome,Feather,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ScreenHome(){
    return(
        <SafeAreaView style={{paddingTop:Platform.OS==='android'?30:40}}>
            <ScrollView>
            <View style={{ margin:2}}>
            <View style={styles.headercontainer}>
                    <View>
                        <Text style={{fontSize:23, fontWeight:'bold'}}>Hi, Paccy dev 👋</Text>
                        <Text style={{color:'#A4A8B1'}}>Create a better future for yourselves here</Text>
                    </View>
                    <TouchableHighlight>
                    <View style={styles.headerButton}>
                    <Ionicons name="notifications-outline" size={30} color="black" style={{padding:7}}/>
                    </View>
                    </TouchableHighlight>
                    
                </View>
             <View style={styles.searchcontainer}>
                  <View style={{margin:5}}>
                     <Ionicons name="search" size={23} color="#878A8C" />
                  </View>
                  <View>
                    <TextInput placeholder='search...'></TextInput>
                  </View>
 
                </View>
                <View  style={styles.twittercontainer}>
                    <View style={{ height : 40, width:40,padding:6,backgroundColor:'#7A9FFF',borderRadius:8,marginTop:8}}>
                    <FontAwesome name="twitter" size={30} color="white"/>
                    </View>
                    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Twitter</Text>
                        <Text>Waiting to be selected by the</Text>
                        <Text>twitter team</Text>
                    </View>
                    <View style={{ marginTop:13}}>
                    <Pressable style={{ backgroundColor:'#A5C0FA',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'blue', textAlign:'center'}}>
                            Submit
                        </Text>
                    </Pressable>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:7}}>
                    <Text style={{fontWeight:'bold'}}>Suggestion</Text>
                    <Pressable>
                        <Text style={{ color:'#6A7EB9'}}>View all</Text>
                    </Pressable>
                </View>
                <ScrollView style={{flexDirection:'row'}} horizontal showsHorizontalScrollIndicator={false}>
                <View style={{backgroundColor:'#091A7A',borderRadius:10,margin:7,padding:1, width:339}}>
                <View  style={styles.twittercontainer1}>
                    <View style={{ height : 40, width:40,padding:6,backgroundColor:'#7A9FFF',borderRadius:8,marginTop:8}}>
                    <FontAwesome name="video-camera" size={30} color="white"/>
                    </View>
                    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Product Designer</Text>
                        <Text style={{color:'#4F5B92'}}>Zoom . Untide change</Text>
                    </View>
                    <View style={{ marginTop:13}}>
                        <MaterialCommunityIcons name="bookmark-minus-outline" size={24} color="white" />
                    </View>
                </View>
                    <View style={{flexDirection:'row',margin:5,justifyContent:'space-evenly'}}>
                    <Pressable style={{ backgroundColor:'#2e3993',padding:3,borderRadius:9,width:100,height:30}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Fulltime
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#2e3993',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Remote
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#2e3993',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Designer
                        </Text>
                    </Pressable>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',margin:9,paddingBottom:8}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>$12K-$15k|</Text>
                            <Text style={{marginTop:8}}>month</Text>
                            </View>
                        
                        <Pressable style={{ backgroundColor:'#3D6EFF',paddingBottom:6,borderRadius:14,width:100}}>
                        <Text style={{color:'white', textAlign:'center',padding:5}}>
                            Apply now
                        </Text>
                    </Pressable>
                    </View>
                </View>
                <View style={{backgroundColor:'#fff',borderRadius:10,margin:7,padding:1, width:339}}>
                <View  style={styles.twittercontainer1}>
                    <View style={{ height : 45, width:45,padding:6,backgroundColor:'silver',borderRadius:8,marginTop:8}}>
                    <Feather name="slack" size={30} color="teal" />
                    </View>
                    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'teal'}}>Product Designer</Text>
                        <Text style={{color:'#4F5B92'}}>Zoom . Untide change</Text>
                    </View>
                    <View style={{ marginTop:13}}>
                    <MaterialCommunityIcons name="bookmark" size={24} color="teal" />
                    </View>
                </View>
                    <View style={{flexDirection:'row',margin:5,justifyContent:'space-evenly'}}>
                    <Pressable style={{ backgroundColor:'teal',padding:3,borderRadius:9,width:100,height:30}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Fulltime
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'teal',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Remote
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'teal',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'white', textAlign:'center',fontSize:15}}>
                            Designer
                        </Text>
                    </Pressable>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',margin:9,paddingBottom:8}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>$12K-$15k|</Text>
                            <Text style={{marginTop:8,color:'#4F5B92'}}>month</Text>
                            </View>
                        
                        <Pressable style={{ backgroundColor:'#3D6EFF',paddingBottom:6,borderRadius:14,width:100}}>
                        <Text style={{color:'white', textAlign:'center',padding:5}}>
                            Apply now
                        </Text>
                    </Pressable>
                    </View>
                </View>
                <View style={{backgroundColor:'teal',borderRadius:10,margin:7,padding:1, width:339}}>
                <View  style={styles.twittercontainer1}>
                    <View style={{ height : 45, width:45,padding:6,backgroundColor:'#fff',borderRadius:8,marginTop:8}}>
                    <Entypo name="tree" size={30} color="black" />
                    </View>
                    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Product Designer</Text>
                        <Text style={{color:'#4F5B92'}}>Zoom . Untide change</Text>
                    </View>
                    <View style={{ marginTop:13}}>
                    <FontAwesome name="bookmark" size={24} color="white" />
                    </View>
                </View>
                    <View style={{flexDirection:'row',margin:5,justifyContent:'space-evenly'}}>
                    <Pressable style={{ backgroundColor:'#ffffff',padding:3,borderRadius:9,width:100,height:30}}>
                        <Text style={{color:'teal', textAlign:'center',fontSize:15,fontWeight:'bold'}}>
                            Fulltime
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#ffffff',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'teal',fontWeight:'bold' ,textAlign:'center',fontSize:15}}>
                            Remote
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#ffffff',padding:3,borderRadius:9,width:70}}>
                        <Text style={{color:'teal', fontWeight:'bold',textAlign:'center',fontSize:15}}>
                            Designer
                        </Text>
                    </Pressable>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',margin:9,paddingBottom:8}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>$12K-$15k|</Text>
                            <Text style={{marginTop:8}}>month</Text>
                            </View>
                        
                        <Pressable style={{ backgroundColor:'#3D6EFF',paddingBottom:6,borderRadius:14,width:100}}>
                        <Text style={{color:'white', textAlign:'center',padding:5}}>
                            Apply now
                        </Text>
                    </Pressable>
                    </View>
                </View>
                </ScrollView>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:7}}>
                    <Text style={{fontWeight:'bold'}}>Recent job</Text>
                    <Pressable>
                        <Text style={{ color:'#6A7EB9'}}>View all</Text>
                    </Pressable>
                </View>
                <View  style={styles.twittercontainer1}>
                    <View style={{ height : 40, width:40,padding:6,backgroundColor:'#7A9FFF',borderRadius:8,marginTop:8}}>
                    <FontAwesome5 name="slack" size={30} color="black" />
                    </View>
                    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Senior UI Designer</Text>
                        <Text style={{color:'#4F5B92'}}>Zoom . Untide change</Text>
                    </View>
                    <View style={{ marginTop:13}}>
                    <MaterialCommunityIcons name="bookmark-minus" size={30} color="blue" />
                    </View>
                </View>
                    <View style={{flexDirection:'row',margin:8}}>
                    <Pressable style={{ backgroundColor:'#D5E3FF',padding:3,borderRadius:12,width:100,height:30,margin:4}}>
                        <Text style={{color:'#86A6FF', textAlign:'center',fontSize:15}}>
                            Fulltime
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#D5E3FF',padding:3,borderRadius:12,width:70,margin:4}}>
                        <Text style={{color:'#86A6FF', textAlign:'center',fontSize:15}}>
                            Remote
                        </Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor:'#D5E3FF',padding:3,borderRadius:12,width:70,margin:4}}>
                        <Text style={{color:'#86A6FF', textAlign:'center',fontSize:15}}>
                            Designer
                        </Text>
                    </Pressable>
                    <Pressable style={{padding:3,flexDirection:'row'}}>
                        <Text style={{color:'#0D761D',fontWeight:'bold', textAlign:'center',fontSize:20}}>
                            $15K|
                        </Text>
                        <Text>
                        <Text style={{marginTop:15,fontSize:8}}>month</Text>
                        </Text>
                    </Pressable>

                    </View>
            </View>
            </ScrollView>
         </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    headercontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:9,
        marginLeft:5
    },
    headerButton:{
        borderWidth:1,
        borderColor:'#cccccc',
        height:50,
        width:50,
        borderRadius:45
    },
    headerButton1:{
        borderWidth:1,
        borderColor:'#cccccc',
        height:30,
        width:30,
        padding:9,
        borderRadius:45
    },
    searchcontainer:{
        borderColor:'silver',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:23,
        borderWidth:1,
        padding:5,
        margin:6,
        width:340

    },

    twittercontainer:{
        borderRadius:9,
        backgroundColor:'#D6E4FF',
        padding:5,
        margin:6,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    twittercontainer1:{
        borderRadius:9,
        padding:5,
        margin:6,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    
 })