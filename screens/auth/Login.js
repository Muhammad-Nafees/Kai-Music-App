import {StyleSheet, Text, View,Image, TouchableOpacity, Pressable, Dimensions, ScrollView, TextInput} from 'react-native';
import React, { cloneElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../store/UserSlices';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

const navigation=useNavigation()

const SCREENWIDTH=Dimensions.get("screen").width
const SCREENHEIGHT=Dimensions.get("screen").height
const duneuser =useSelector((state)=>state)

console.log("duneUser---",duneuser)

const dispatch=useDispatch()

const userlogin=(userLogin)=>{
    dispatch(login(userLogin))
}

  return(
    <View>
      <LinearGradient colors={['rgba(15,27,187,1)', 'rgba(117,176,204,1)']}
        start={{x: 0, y: 0}} end={{x: 1, y: 1}} locations={[0.5, 1]} 
        style={{height: '100%', width: '100%'}}>
      <ScrollView>

<View>

        <View style={{justifyContent:"center",alignItems:"center", marginTop:45}}>
            <View style={{borderWidth:0.5,borderColor:"#FFF",width:"65%",height:115,borderRadius:10,backgroundColor:"rgba(255, 255, 255, 0.1)" }}>

               <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
                  <View style={{flexDirection:"row",width:90, justifyContent:"space-between",alignItems:"center",}}>

                       <View style={{borderWidth:1,borderRadius:50,borderColor:"#FFF"}}>
                           <Image style={{width:45,height:45,resizeMode:"center"}} source={require("../../assets/kai-logo-login.png")}/>
                       </View>
                       <View style={{justifyContent:"center",alignItems:"center"}}>
                           <Text style={{color:"#FFF",fontSize:24}}>Kai</Text>
                       </View>
                </View>
       </View>

                       <View style={{justifyContent:"center",alignItems:"center",marginTop:12}}>
                           <Text style={{fontWeight:"600",fontSize:16,textAlign:"center",color:"#FFF"}}>Your AI Music Companion</Text>
                       </View>

            </View>
        </View>
     
        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
                  <View style={{ borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.2)',width: "90%", }}>

                    <View style={{ justifyContent: 'center',alignItems: 'center', marginTop: 22,  }}>
                              <Text style={{fontWeight:'700',fontSize:20,color:"#FFF"}}>Log-In</Text>
                              <Text style={{marginTop:8,fontWeight:'500',fontSize:11,color:"rgba(255, 255, 255, 1)",textAlign:"center", width:"90%"}}>Sign-In to use this exiting feature</Text> 
                    </View>


<View style={{paddingBottom:20}}>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
             <View style={{borderWidth:0.8,borderColor:"#FFFFFF",width:"90%",borderRadius:50,justifyContent:"center",height:48,backgroundColor:"rgba(255, 255, 255, 0.15)"}}>
                  <TextInput style={{paddingLeft:20, color: '#fff'}} placeholderTextColor='#fff' placeholder="Email"/>
             </View>                
      </View>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:12,}}>
             <View style={{borderWidth:0.8,borderColor:"#FFFFFF",width:"90%",borderRadius:50,justifyContent:"center",height:48,backgroundColor:"rgba(255, 255, 255, 0.15)"}}>
                  <TextInput style={{paddingLeft:20, color: '#fff'}} placeholderTextColor='#fff' secureTextEntry placeholder="Password"/>
             </View>                
      </View>

     <TouchableOpacity>
        <View style={{width:'90%',justifyContent:"flex-end",alignItems:'flex-end',marginTop:6}}>
            <Text style={{color:"#FFF",fontSize:10,fontWeight:'500',textAlign:'right',}}>Forget Password?</Text>
        </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>userlogin("LoginSuccessfull")} style={{justifyContent:"center",alignItems:"center",marginTop:22,}}>
             <LinearGradient colors={["#5A92FF","#255AE1"]} style={{ width:"90%",borderRadius:50,justifyContent:"center",height:48,alignItems:"center",backgroundColor:"#5A92FF"}}>
                 <Text style={{color:"#FFF",fontWeight:"600",textAlign:"center"}}>Continue</Text>
             </LinearGradient>                
      </TouchableOpacity>

               <View style={{justifyContent:"center",alignItems:"center",}}>
                      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginTop:14,width:"60%",}}>
                          <Text style={{color:"#FFF",textAlign:"center",fontSize:12,lineHeight:16,fontWeight:"400"}}>Or You Can Just</Text>
                       </TouchableOpacity>
               </View>

                <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginTop:14}}> 
                      <View style={{backgroundColor:"#fff",borderRadius:50,width:"90%",justifyContent:"center",alignItems:"center",height:47}}>
                          <Text style={{color:"#282828",fontSize:16,fontWeight:"600",textAlign:"center",}}>Connect</Text>
                      </View>
                </TouchableOpacity>


</View>
                    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}

                  </View>
                </View>
             
                <View style={{justifyContent:"center",alignItems:"center",}}>
                      <View style={{justifyContent:"center",alignItems:"center",marginTop:80,width:"60%",flexDirection:"row"}}>
                          <Text style={{color:"#FFF",textAlign:"center",  fontWeight:"400"}}>Didn’t have an account? </Text>
                          <TouchableOpacity onPress={()=>navigation?.navigate("Register")}>
                            <Text style={{color:"#FFF",textAlign:"center", fontWeight:"700",textDecorationLine:"underline"}}>Create</Text>
                          </TouchableOpacity>
                      </View>
        </View>

</View>

     </ScrollView>

      </LinearGradient>
    </View>
  );
};



export default Login;

const styles = StyleSheet.create({});