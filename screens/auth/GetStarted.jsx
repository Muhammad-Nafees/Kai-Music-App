import {StyleSheet, Text, View,Image, TouchableOpacity, Pressable, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const GetStarted = () => {

const navigation=useNavigation()

const SCREENWIDTH=Dimensions.get("screen").width
const SCREENHEIGHT=Dimensions.get("screen").height

  return (

    <View>
      <LinearGradient  colors={['rgba(15,27,187,1)', 'rgba(117,176,204,1)']}
        start={{x: 0, y: 0.5}} end={{x: 1, y: 1}} locations={[0.2, 1]} 
        style={{height: '100%', width: '100%'}}>
      {/* start={{x: 1, y: 0}} end={{x: 0.5, y: 0.3}} locations={[0, 1]} */}
      <ScrollView>

             <View style={{marginTop:100}}>

                  <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Image style={{width:100,height:100,resizeMode:"center"}} source={require("../../assets/kai-logo.png")}/>
                  </View>   

                  <View style={{justifyContent:"center",alignItems:"center"}}>
                      <View style={{ width:"90%", justifyContent:"center",alignItems:"center",marginTop:70, }}>
                         <Text style={{fontSize:34 ,fontWeight:"700",lineHeight:44,color:"rgba(255, 255, 255, 1)",textAlign:"center", }}>Hey, I’m Kai Your personal AI Music Companion</Text>
                      </View>   
                  </View>
                  
                  <View style={{justifyContent:"center",alignItems:"center",marginTop:12}}>
                    <View style={{ justifyContent:"center",alignItems:"center",width:'70%'}}>
                        <Text style={{fontSize:15 ,fontWeight:"400",lineHeight:21,color:"rgba(255, 255, 255, 1)",textAlign:"center",letterSpacing:0.30}}>Connect your chosen music service to get started</Text>
                    </View>   
                  </View>
                    
                  <TouchableOpacity onPress={()=>navigation?.navigate("MusicList")} style={{justifyContent:"center",alignItems:"center",marginTop:170}}> 
                      <View style={{backgroundColor:"#fff",borderRadius:50,width:"90%",justifyContent:"center",alignItems:"center",height:47}}>
                          <Text style={{color:"#282828",fontSize:16,fontWeight:"600",textAlign:"center",}}>Connect your Music</Text>
                      </View>
                  </TouchableOpacity>

<View style={{justifyContent:"center",alignItems:"center",paddingBottom:20}}>
                      <TouchableOpacity onPress={()=>navigation?.navigate("Login")} style={{justifyContent:"center",alignItems:"center",marginTop:22,width:"25%",}}>
                          <Text style={{color:"#FFF",textAlign:"center",fontSize:16,lineHeight:16,fontWeight:"600"}}>Log in</Text>
                      </TouchableOpacity>
</View>

             </View>
</ScrollView>

      </LinearGradient>
    </View>
  );
};



export default GetStarted;

const styles = StyleSheet.create({});