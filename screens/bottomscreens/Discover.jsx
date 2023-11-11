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
import { BlurView } from '@react-native-community/blur';
import ImageBackgroundMap from '../../component/ImageBackgroundMap';
import CustomDrawerSlider from '../CustomDrawerSlider';
import DropDownPicker from 'react-native-dropdown-picker';


const Discover = () => {


  const { width, height } = Dimensions.get('screen');
  const [isopenModalDrawerTrue,setIsopenModalDrawerTrue] =useState(false)
  const [isSearchDisplay,isSetSearchDisplay] = useState(false)
  const drawermodalhandle=()=>{
    // setIsopenModalDrawerTrue(true)
    navigation.openDrawer() 

   }

   
   
  const data = [
    {
      id: 1,
      width: width / 2.3,
      height: 235,
      height2: 135,
      width2: 150,
      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "Music  Discovery",
      discover: "“Hey AI, what's a good song to start my day?”",
      arrowimage: require('../../assets/toprightarrow.png'),
      paddingBottom:3,
      image: require('../../assets/first-linear.png'),
      backgroundColortick:"#FFFFFF",
      backgroundtick:require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 2,
      width: width / 2.3,
      height: 235,
      height2: 115,
      width2: 150,
      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "New  Releases",
      discover: "“Check out Taylor Swift’s new Album?”",
      arrowimage: require('../../assets/toprightarrow.png'),
      paddingBottom:3,
      image: require('../../assets/second-linear.png'),
      backgroundColortick:"#FFFFFF",
      backgroundtick:require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 3,
      width: width / 2.3,
      height: 235,
      height2: 135,
      width2: 150,
      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "Interactive Prompts",
      discover: "“Play a game with me! Guess the song I'm thinking of”",
      arrowimage: require('../../assets/toprightarrow.png'),
      image: require('../../assets/third-linear.png'),
      backgroundColortick:"#FFFFFF",
      paddingBottom:3,
      backgroundtick:require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 4,
      width: width / 2.3,
      height: 235,
      height2: 155,
      width2: 150,

      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "Personalized Queries",
      discover: "“Based on my listening history, what new artists would you recommend”",
      arrowimage: require('../../assets/toprightarrow.png'),
      image: require('../../assets/fourth-linear.png'),
      backgroundColortick:"#FFFFFF",
      paddingBottom:3,
      backgroundtick:require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 5,
      width: width / 2.3,
      height: 235,
      height2: 135,
      width2: 150,

      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "News Update",
      discover: "“Has Ed Sheeran announced any new tours”",
      arrowimage: require('../../assets/toprightarrow.png'),
      paddingBottom:3,
      image: require('../../assets/fifth-linear.png'),
      backgroundColortick:"#FFFFFF",
      backgroundtick:require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 6,
      width: width / 2.3,
      height: 235,
      height2: 150,
      width2: 150,
      justifyContent: 'flex-end',
      alignItems: 'center',
      explore: "General Music Queries",
      discover: "“How has music evolved over the decades”",
      arrowimage: require('../../assets/toprightarrow.png'),
      image: require('../../assets/sixth-linear.png'),
      backgroundColortick:"#FFFFFF",
      backgroundtick:require("../../assets/arrowtoprightblack.png"),
      paddingBottom:3,
    }
  ]



const [isOpen,setIsOpen] = useState(false)
const [currentvalue,setCurrentValue] = useState(false)

const items=[
   {
     label:"Artist",value:"Artist",
   },
   {
  label:"Trending",value:"Trending",
   }
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
                      source={require('../../assets/hamburgermenu.png')}
                    />
                  </View>
                </TouchableOpacity>

                 <DropDownPicker
                   containerStyle={{width:135, borderWidth:1,borderColor:"rgba(90, 146, 255, 1)",borderRadius:10}}
                   placeholderStyle={{color:"#FFFFFF",fontWeight:"700"}}
                   dropDownContainerStyle={{backgroundColor:"#444444",}}
                   placeholder="Kai Discover"
                   items={items}
                   open={isOpen}
                   value={currentvalue}
                   setOpen={()=>setIsOpen(!isOpen)}
                   setValue={(val)=>setCurrentValue(val)}
                   maxHeight={80}
                   autoScroll
                   theme="DARK"
                 />
 


  <TouchableOpacity onPress={()=>isSetSearchDisplay(!isSearchDisplay)}>
      <View>
          <Image style={{width:25,height:25,resizeMode:"center",}} source={require("../../assets/whitesearch.png")}/>
      </View>
  </TouchableOpacity>

              </View>


              <View>
     
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
         <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../../assets/sendarrowdiscover.png")}/>
     </View>

</View>
</View>



  </View>

</View>
  )
}

              {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

              <ScrollView>  
                 <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                   <View style={{ flexDirection: 'row', width: '95%', flexWrap: 'wrap',alignItems:"center",justifyContent:"space-around",}}>

                      {
                        data?.map((item, index) => {
                         return (
                          <View style={{justifyContent:"center",alignItems:"center"}}>
                             <ImageBackgroundMap  item={item} index={index} />
                          </View>
                              )
                      })
                     }

              </View>
            </View>
            </ScrollView>
 
            </LinearGradient>
          </View>
  
    </>
  );
};

export default Discover;
 