import { View, Text,SafeAreaView, Pressable, TouchableOpacity, Alert ,Dimensions} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'


const Setting = () => {
  const [name,setName ] = React.useState('')
  const [salary,setSalary ] = React.useState('')
  const [amount,setAmount] = React.useState('')
  const [detail,setDetail] = React.useState('')
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const Calculate = () =>{
    setName('')
    setSalary('')
    if(name == '' && salary == ''){
      alert('Please fill all field')
    }
    if(salary==0){
      setDetail(name)
      alert(`Hey,${detail} please enter salary above 0`)
    }
    if(salary==30000){
      setDetail(name)
      alert(`Thank you ${detail} , you are not classified to pay taxes`)
    }if(salary >=30001){
      setDetail(name)
       setAmount(salary-((salary*20)/1000))
    }if(salary==100001){
      setDetail(name)
       setAmount(salary-((salary*30)/1000))
    }

  }
  console.log(salary);
  return (
    <SafeAreaView style={{paddingTop:Platform.OS==='android'?30:40 }}>
      <ScrollView>
      <View style={{flexDirection:'column',justifyContent:'center',backgroundColor:'#ffffff',width:windowWidth,height:windowHeight}}>
     <View>
      <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'darkblue'}}>
        Welcome to Tax Calculator
      </Text>
     </View>
      <View>
      <View style={{ margin:10}}>
        <Text style={{fontSize:20,textAlign:'center'}}>Please provide Detail</Text>
      </View >
      <TextInput 
        mode='outlined'
        label='Name'
        left={<TextInput.Icon name="account" />}
        style={{ margin:10}} 
        keyboardType='default' 
        activeOutlineColor='darkblue'
        value={name}
        onChangeText={value=>setName(value)}
        />
       <TextInput 
        mode='outlined'
        label= 'Salary'
        left={ <TextInput.Icon name='Salary' />}
        style={{ margin:10}} 
        keyboardType="phone-pad" 
        activeOutlineColor='darkblue'
        value={salary}
        onChangeText={value=>setSalary(value)}
        />
       <TouchableOpacity>
       <View style={{margin:10,backgroundColor:'darkblue',borderRadius:14,padding:10}}>
        <Pressable onPress={Calculate}>
          <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'bold'}}>Calculate</Text>
        </Pressable>
       </View>
       </TouchableOpacity>
       <View style={{ margin:20}}>
       <Text style={{fontSize:24}}>
          Name: {detail}
         </Text>
         <Text style={{fontSize:24}}>
          Total taxes:{amount}
         </Text>
        </View>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Setting;