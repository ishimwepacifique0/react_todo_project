import {
   StyleSheet,
   Text,
   View,
   TextInput,
   Pressable,
   Platform,
   SafeAreaView,
   Button,
   ScrollView,
} from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

 export default function Screen(){
    return(
        <SafeAreaView style={{paddingTop:Platform.OS==='android'?30:40}}>
            
            {/* <View styles={{padding:6}}>
                <View style={styles.headercontainer}>
                    <View>
                        <Text style={{fontSize:23, fontWeight:'bold'}}>Hi,Paccy Dev</Text>
                        <Text style={{color:'#000111'}}>Create a better future for yourselves here</Text>
                    </View>
                    <View style={styles.headerButton}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.searchcontainer}>
                  <View style={styles.headerButton1}>
                  <Ionicons name="search" size={34} color="black" />
                  </View>
                  <View>
                    <TextInput placeholder='search...'></TextInput>
                  </View>
 
                </View>
                <View style={styles.twittercontainer}>
                    <View style={{ padding:3}}>
                    <FontAwesome name="twitter-square" size={24} color="white" style={{backgroundColor:'blue'}} />
                    </View>
                    <View>
                        <Text>Twitter</Text>
                        <Text>Waiting to be selected by the twitter team</Text>
                    </View>
                    <View width='30' height="30">
                    <Button title='Submit' color='blue' style={{ borderRadius:10}} />
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Suggestion</Text>
                    <Pressable>
                        <Text style={{ color:'blue'}}>View all</Text>
                    </Pressable>
                </View>
                <ScrollView>
                <View>
                    <View>
                        <View>
                        <FontAwesome name="video-camera" size={24} color="black" />
                        </View>
                        <View>
                            <Text>Product Designer</Text>
                            <Text>Zoom . Untide change</Text>
                        </View>
                        <View></View>
                    </View>
                    <View>
                        <Button title='Fulltime' />
                        <Button title='Remote' />
                        <Button title='Designer' />
                    </View>
                    <View>
                        <Text>$12K-$15k|month</Text>
                        <Button title='Apply now' />
                    </View>
                </View>
                </ScrollView>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Recent</Text>
                    <Pressable>
                        <Text style={{ color:'blue'}}>View all</Text>
                    </Pressable>
                </View>
                <View>
                    <View>
                        <View></View>
                        <View>
                            <Text>Senior UI Designer</Text>
                            <Text>Twitter. japan Indonesia</Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={{ display:'flex',flexDirection:'row'}}>
                        <Button title='Fulltime' />
                        <Button title='Remote' />
                        <Button title='Senior' />
                        <Text>$15k|month</Text>
                    </View>
                </View>
                
            </View>  */}
        </SafeAreaView>

    );
 }
 const styles = StyleSheet.create({
    headercontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:9,
        margin:6
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
        display:'flex',
        flexDirection:'row',
        borderRadius:10

    },
    twittercontainer:{
        borderRadius:9,
        backgroundColor:'#D6E4FF',
        padding:4,
        margin:3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
 })