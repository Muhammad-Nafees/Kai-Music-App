import React, { useState } from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'



const CustomDrawerSlider = ({navigation}) => {

    const [openmodalDrawer,setopenModal] =useState(false)


    return (
        <>
 
 
    
       <View style={{ height: "100%", width: '100%', backgroundColor:"rgba(0,0,0,0.90)" }}>
                <View style={{ marginTop: 30 }}>

                    <View style={{ width: "95%", marginLeft: "auto", }}>
                        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                            <Image style={{ width: 30, height: 30, resizeMode: "center" }} source={require("../assets/cross-drawer.png")} />
                        </TouchableOpacity>
                    </View>
            
                    {/* ---------FirstView-------------- */}
                <View style={{marginLeft:"auto",width:"95%",marginTop:20}}>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Searchat</Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>For You</Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Player</Text>
                     </View>
                </TouchableOpacity>

                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Genius</Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Curator</Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Moods</Text>
                     </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Shop</Text>
                     </View>
                </TouchableOpacity>
                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Live</Text>
                     </View>
                </TouchableOpacity>

                <TouchableOpacity>
                     <View>
                          <Text style={{color:"#FFFFFF",fontWeight:"400",fontSize:20,lineHeight:38,letterSpacing:0.4}}>Social</Text>
                     </View>
                </TouchableOpacity>

                </View>

 
 
{/* -------------------------XXXXXXXXXXXXXXXXXXX----------------------------- */}

                </View>
            </View>
 
        </>
    )
}

export default CustomDrawerSlider;
