import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
  


const Artists = () => {

  
  const { width, height } = Dimensions.get('screen');
  const [isopenModalDrawerTrue,setIsopenModalDrawerTrue] =useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [currentvalue,setCurrentValue] = useState(false)
  const [isSearchDisplay,isSetSearchDisplay] = useState(false)
  

  console.log("currenVal",currentvalue)

  
    if (currentvalue === 'Artists') {
      console.log('Welcome Artists Page');
       
      // Navigate to the Artists page here
    } else if (currentvalue === 'Moods') {
      console.log('Welcome Moods Page');
      // Navigate to the Moods page here
    } else if (currentvalue === 'Playlists') {
      console.log('Welcome Playlists Page');
      // Navigate to the Playlists page here
    }
 


  const drawermodalhandle=()=>{
    // setIsopenModalDrawerTrue(true)
    navigation.openDrawer() 

   }

   
//   const data = [
//       {
//        image:require("../assets/for-you-image.png"),
//        text:"DIE FOR YOU",
//        text2:"SINGLE BY THE WEEKND"
//       },
//       { 
//         image:require("../assets/thinking-loud.png"),
//         text:"THINKING OUT LOUD",
//         text2:"ALBUM BY ED SHEERAN"
//       },
//       {
//         image:require("../assets/gold-rush-player.png"),
//         text:"GREEN GREEN GRASS",
//         text2:"SINGLE BY GEORGE EZRA",
//       },
//       {
//         image:require("../assets/red-men.png"),
//         text:"LIKE YOU DO",
//         text2:"SINGLE BY JOJI"
//       },
//       {
//         image:require("../assets/3-mens-singing.png"),
//         text:"PEACHES",
//         text2:"SINGLE BY JSUTIN BIEBER"
//       },
//       {
//         image:require("../assets/ariana-girl.png"),
//         text:" FOCUS",
//         text2:"SINGLE BY ARIANA GRANDE"
//       }
   
//   ]
 


const items=[
   {label:"Artists",value:"Artists",},
   {label:"Moods",value:"Moods",},
   {label:"Playlists",value:"Playlists",},
 ]

 

  const navigation = useNavigation();

  return (
    <>
          <View>
            <LinearGradient
               colors={['rgba(27,27,27,1)', 'rgba(0,0,0,0.9)']} start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 0.3 }} locations={[0, 1]}
               style={{ height: "100%", width: '100%' }}>

<View style={{justifyContent:"center",alignItems:"center",marginTop:26,zIndex:9999}}>
              <View style={{ flexDirection:"row",justifyContent:"space-between",width:"90%",alignItems:"center",paddingBottom:12 }}>

                <TouchableOpacity onPress={drawermodalhandle}>
                  <View>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={require('../assets/hamburgermenu.png')}
                    />
                  </View>
                </TouchableOpacity>

                 <DropDownPicker
                   containerStyle={{width:133,borderWidth:1,borderColor:"rgba(90, 146, 255, 1)",borderRadius:10}}
                   placeholderStyle={{color:"#FFFFFF",fontWeight:"700",}}
                   dropDownContainerStyle={{backgroundColor:"#444444",}}
                   placeholder="Artists"
                   items={items}
                   open={isOpen}
                   value={currentvalue}
                   setOpen={()=>setIsOpen(!isOpen)}
                   setValue={(val)=>setCurrentValue(val)}
                   maxHeight={120}
                   autoScroll
                   theme="DARK"
                 />

<TouchableOpacity onPress={()=>isSetSearchDisplay(!isSearchDisplay)}>
    <View>
        <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../assets/search.png")}/>
    </View>
</TouchableOpacity>

              </View>
</View>



{
 isSearchDisplay&&(
 <View style={{justifyContent:"center",alignItems:"center",paddingBottom:12}}>
   <View style={{borderWidth:0.5 ,borderRadius:50,borderColor:"#FFF",flexDirection:"row",alignItems:"center",width:"90%",justifyContent:'space-between',backgroundColor:'rgba(255, 255, 255, 0.10)'}}>
     <View style={{justifyContent:"center",alignItems:"center"}}>

<View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',width:"95%"}}>

      <View style={{ width:"96%"}}>
          <TextInput placeholder="I'm feeling a bit down. Play me something uplifting" placeholderTextColor="#fff" style={{color: '#fff',fontSize:13}} />
      </View>

     <View>
         <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/sendarrowdiscover.png")}/>
     </View>

</View>
</View>



  </View>

</View>
)
}

              {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

              <ScrollView>  
            <View style={{justifyContent:"center",alignItems:"center" }}>
              <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', flexWrap: 'wrap',}}>
            <Text>HIHIIIH</Text>

              </View>
            </View>
          </ScrollView>

 
            </LinearGradient>
          </View>
  
    </>
  );
};

export default Artists;
 