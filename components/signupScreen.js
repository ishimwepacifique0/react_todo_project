import { 
    View, 
    Text,
    Pressable,
    SafeAreaView,
    Image,
    Platform,
    StyleSheet,
} from 'react-native'
import React from 'react'
import { 
    FontAwesome, 
    Ionicons,
    MaterialCommunityIcons,
    Feather,
    FontAwesome5 
} from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'

const SignScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.containerfull}>
        <ScrollView>
        <View style={styles.container}>
            <View style={{ flex:1,flexDirection:'column',justifyContent:'center'}}>
            <View>
                <Text style={{fontWeight:'bold',color:'#3E4685',fontSize:30,margin:6,textAlign:'center',marginBottom:20}}>
                    Signup TODO
                </Text>
            </View>
      <View>
      <View style={{ margin:10}}>
      </View >
      <TextInput 
        mode='outlined'
        label='Name'
        style={{ margin:10}} 
        keyboardType='default' 
        activeOutlineColor='darkblue'
        />
       <TextInput 
        mode='outlined'
        label= 'Phonenumber'
        style={{ margin:10}} 
        keyboardType="phone-pad" 
        activeOutlineColor='darkblue'
        />
        <TextInput 
        mode='outlined'
        label= 'Age'
        style={{ margin:10}} 
        keyboardType="phone-pad" 
        activeOutlineColor='darkblue'
        />
        <TextInput 
        mode='outlined'
        label= 'Phonenumber'
        style={{ margin:10}} 
        keyboardType='email-address' 
        activeOutlineColor='darkblue'
        />
        <TextInput 
        mode='outlined'
        label= 'Password'
        style={{ margin:10}} 
        keyboardType='email-address' 
        activeOutlineColor='darkblue'
        secureTextEntry={false}
        />
       <TouchableOpacity>
       <View style={{margin:10,backgroundColor:'darkblue',borderRadius:14,padding:10}}>
        <Pressable>
          <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'bold'}}>Signup</Text>
        </Pressable>
       </View>
       </TouchableOpacity>
      </View>
    </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                <Pressable onPress={ () => navigation.navigate('login')}>
                    <Text style={{fontWeight:'bold',color:'#4B4747',fontSize:20}}>
                        Already  have account login
                    </Text>
                </Pressable>
            </View>
             
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignScreen

const styles =  StyleSheet.create({
     containerfull:{
        paddingTop:Platform.OS==='android'?30:40,
        backgroundColor:'#ffffff',
        height:600,
        padding:10
     },
     container:{
            flexDirection:'column',
            justifyContent:'center'
     },
     formContainer:{
       flexDirection:'column',
       justifyContent:'space-around',
     },
     inputContainer:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:5,
        padding:9,
        paddingLeft:25,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        height:70
     },
     inputContainer1:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:7,
        paddingLeft:25,
        marginTop:10,
        paddingTop:4,
        paddingBottom:7,
        height:70,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
     },
     inputContainer2:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:7,
        paddingLeft:25,
        marginTop:10,
        paddingTop:4,
        paddingBottom:7,
        height:65,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
     },
     inputContainer3:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:7,
        paddingLeft:25,
        marginTop:10,
        paddingTop:4,
        paddingBottom:7,
        height:65,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
     },
     inputContainer4:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:7,
        paddingLeft:25,
        marginTop:10,
        paddingTop:4,
        paddingBottom:7,
        height:65,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
     },
     inputContainer5:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:7,
        paddingLeft:25,
        marginTop:10,
        paddingTop:4,
        paddingBottom:7,
        height:65,
        shadowColor:'#E2E8F5',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
     },
     buttonContainer:{
        backgroundColor:'#4752A9',
        padding:16,
        marginTop:13,
        margin:5,
        borderRadius:12,
     }
})