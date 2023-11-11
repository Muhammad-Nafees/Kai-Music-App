import {StyleSheet, Text, View,Image, TouchableOpacity, Pressable, Dimensions, ScrollView} from 'react-native';
import React, { cloneElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';




const MusicList = () => {

const navigation=useNavigation()

const SCREENWIDTH=Dimensions.get("screen").width
const SCREENHEIGHT=Dimensions.get("screen").height

  return (

    <View>
      <LinearGradient 
        colors={[ 'rgba(117,176,204,1)','rgba(15,27,187,1)',]}
         start={{x: 2.7, y: 0}} end={{x: 0, y: 1}} locations={[0.2, 1]} 
        style={{height: '100%', width: '100%'}}>
      {/* start={{x: 1, y: 0}} end={{x: 0.5, y: 0.3}} locations={[0, 1]} */}
      <ScrollView>

             <View style={{marginTop:100}}>

                  <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Image style={{width:100,height:100,resizeMode:"center"}} source={require("../../assets/kai-logo.png")}/>
                  </View>   
                  {/* --------------------FirstView------------------------ */}
                  <View style={{justifyContent:"center",alignItems:"center",marginTop:120}}>
                  <TouchableOpacity>

                       <View style={{flexDirection:"row",width:"90%",backgroundColor:"#5A92FF",justifyContent:"space-between",alignItems:"center",height:50,borderRadius:50}}>
                        <View style={{width:"50%",flexDirection:"row",justifyContent:"space-between",marginRight:'auto',marginLeft:"8%",alignItems:"center"}}>
                           <View>
                                <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../../assets/spotify.png")}/>
                           </View>

                            <View>
                                  <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textAlign:"center",width:220,}}>Spotify</Text>
                            </View>
                        </View>
                       </View>
                  </TouchableOpacity>

                  </View>

                  {/* --------------------FirstViewClose------------------------ */}

                  {/* --------------------secondView------------------------ */}

                  <View style={{justifyContent:"center",alignItems:"center",marginTop:16}}>
                  <TouchableOpacity>

                       <View style={{flexDirection:"row",width:"90%",backgroundColor:"rgba(112, 144, 176, 0.20)",justifyContent:"space-between",alignItems:"center",height:50,borderRadius:50,borderWidth:0.5,borderColor:"#FFFFFF"}}>
                        <View style={{width:"50%",flexDirection:"row",justifyContent:"space-between",marginRight:'auto',marginLeft:"8%",alignItems:"center"}}>
                           <View>
                                <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../../assets/apple-music.png")}/>
                           </View>

                            <View>
                                  <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textAlign:"center",width:220,}}>Apple Music</Text>
                            </View>
                        </View>
                       </View>
                  </TouchableOpacity>

                  </View>

                  {/* --------------------secondViewClose------------------------ */}

                      {/* --------------------ThirdView------------------------ */}

                      <View style={{justifyContent:"center",alignItems:"center",marginTop:16}}>
                  <TouchableOpacity>

                       <View style={{flexDirection:"row",width:"90%",backgroundColor:"rgba(112, 144, 176, 0.20)",justifyContent:"space-between",alignItems:"center",height:50,borderRadius:50,borderWidth:0.5,borderColor:"#FFFFFF"}}>
                        <View style={{width:"50%",flexDirection:"row",justifyContent:"space-between",marginRight:'auto',marginLeft:"8%",alignItems:"center"}}>
                           <View>
                                <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../../assets/tidle.png")}/>
                           </View>

                            <View>
                                  <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textAlign:"center",width:220,}}>Tidle Music</Text>
                            </View>
                        </View>
                       </View>
                  </TouchableOpacity>

                  </View>

                  {/* --------------------ThirdViewClose------------------------ */}

                      {/* --------------------FourthView------------------------ */}

                      <View style={{justifyContent:"center",alignItems:"center",marginTop:16}}>
                  <TouchableOpacity>

                       <View style={{flexDirection:"row",width:"90%",backgroundColor:"rgba(112, 144, 176, 0.20)",justifyContent:"space-between",alignItems:"center",height:50,borderRadius:50,borderWidth:0.5,borderColor:"#FFFFFF"}}>
                        <View style={{width:"50%",flexDirection:"row",justifyContent:"space-between",marginRight:'auto',marginLeft:"8%",alignItems:"center"}}>
                           <View>
                                <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../../assets/sound-colud.png")}/>
                           </View>

                            <View>
                                  <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textAlign:"center",width:220,}}>Sound Cloud</Text>
                            </View>
                        </View>
                       </View>
                  </TouchableOpacity>

                  </View>


                  {/* --------------------FourthViewClose------------------------ */}


                      {/* --------------------FifthView------------------------ */}

                      <View style={{justifyContent:"center",alignItems:"center",marginTop:16}}>
                  <TouchableOpacity>

                       <View style={{flexDirection:"row",width:"90%",backgroundColor:"rgba(112, 144, 176, 0.20)",justifyContent:"space-between",alignItems:"center",height:50,borderRadius:50,borderWidth:0.5,borderColor:"#FFFFFF"}}>
                        <View style={{width:"50%",flexDirection:"row",justifyContent:"space-between",marginRight:'auto',marginLeft:"8%",alignItems:"center"}}>
                           <View>
                                <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../../assets/amazon-music.png")}/>
                           </View>

                            <View>
                                  <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textAlign:"center",width:220,}}>Amazon Music</Text>
                            </View>
                        </View>
                       </View>
                  </TouchableOpacity>

                  </View>

                  {/* --------------------FifthViewClose------------------------ */}

                  {/* --------------------SoxthView------------------------ */}

                  <View style={{justifyContent:"center",alignItems:"center",paddingBottom:20}}>
                      <TouchableOpacity onPress={()=>navigation?.navigate("Login")} style={{justifyContent:"center",alignItems:"center",marginTop:22,width:"25%",}}>
                          <Text style={{color:"rgba(255, 255, 255, 0.50)",textAlign:"center",fontSize:16,lineHeight:16,fontWeight:"600"}}>Continue</Text>
                      </TouchableOpacity>
</View>


                  {/* --------------------SixthViewClose------------------------ */}


             </View>
</ScrollView>

      </LinearGradient>
    </View>
  );
};



export default MusicList;

const styles = StyleSheet.create({});