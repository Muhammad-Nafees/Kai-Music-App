
import {
   ImageBackground,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   Dimensions,
   ScrollView, 
  TouchableHighlightBase ,
  NativeModules,
  NativeEventEmitter,
  Platform,
  EmitterSubscription,
} from 'react-native'
import React, { useEffect }  from 'react'
import Slider from '@react-native-community/slider';
import TrackPlayer,{AppKilledPlaybackBehavior, Capability, useProgress} from "react-native-track-player"
import Icon from "react-native-vector-icons/Ionicons"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { VolumeManager, } from "react-native-volume-manager"
import SystemSetting from 'react-native-system-setting'
 

const songs=[
  {
    title:"kaimusic.mp3",
    url:"https://audio.jukehost.co.uk/6BU0ZxsvtRK7RHXGXR1xCFAvWYnDjaNh"
 }
]



const Songplay = () => {


  const [volume, setVolume] = useState(0.5);
  const volTypes = ['music', 'ring', 'alarm', 'notification'];

  const changeVol = (value) => {
    SystemSetting.setVolume(value, {
      type: volType,
      playSound: false,
      showUI: false
    });
    console.log("value0---",value)
    setVolume(value);
  };

  const [volIndex, setVolIndex] = useState(0);
  const [volType, setVolType] = useState(volTypes[0]);

  const changeVolType = async () => {
    setVolIndex((prevIndex) => (prevIndex + 1) % volTypes.length);
    const newVolType = volTypes[volIndex];
    const vol = await SystemSetting.getVolume(newVolType);
    changeVol(vol);
    setVolType(newVolType);
  };

  
  const [isvisible, setisVisible] = useState(true);
  const [isAudio, setAudio] = useState("");
  const [isVolume,setIsVolume] = useState(0)
  const navigation=useNavigation()
  const SCREENWIDTH = Dimensions.get("screen").width
  const SCREENHEIGHT = Dimensions.get("screen").height

  const progress= useProgress()

  console.log("positioduration---",progress.position-progress.duration)

  // const position = await TrackPlayer.getPosition();
  // const duration = await TrackPlayer.getDuration();



const setupPlayer= async ()=>{

   try {
    await TrackPlayer.setupPlayer()
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });
   await TrackPlayer.add(songs)
   } catch (error) {
    console.log(error)
   } 
}



const decreaseVolume = () => {
  SystemSetting.getVolume().then((currentVolume) => {
    const newVolume = currentVolume - 0.1; // Decrease by 10%
    SystemSetting.setVolume(SystemSetting.VOLUME_TYPE.MUSIC, newVolume);
  });
};


    const playaudio=async()=>{

      setisVisible(!isvisible)

      if(isvisible){
        await TrackPlayer.play()
      }
      else{
        await TrackPlayer.pause()
      }
    }

useEffect(()=>{
  setupPlayer()
},[])


// TrackPlayer.getVolume()

const remainingSeconds = Math.floor(progress.duration - progress.position) % 60;

// Calculate the remaining minutes

const remainingMinutes = Math.floor((progress.duration - progress.position) / 60);

const remainingTime = `${remainingMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;

console.log(`Time remaining: ${remainingTime}`);

const totalSeconds = Math.floor(progress.position);

// Calculate minutes and remaining seconds

const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;

console.log(`Time: ${minutes}:${seconds.toString().padStart(2, '0')}`);

  return (

    <View>
      <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "#2E2E2E" }}>
        <View>

          <ImageBackground style={{ width: "100%", height: SCREENHEIGHT / 2.1, }} source={require("../assets/gold-rush-image.png")}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }}>

                <TouchableOpacity onPress={()=>navigation?.goBack()}>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                     <Image style={{ width: 14, height: 14, resizeMode: "center" }} source={require("../assets/back-arrow-goldrush.png")}/>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                     <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/menu.png")} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ height: SCREENHEIGHT / 3.1, justifyContent: 'flex-end', alignItems: "flex-end" }}>

                <View style={{ marginBottom: 14 }}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "600", textAlign: "center", fontSize: 20, letterSpacing: 0.4, lineHeight: 24 }}>GREEN GREEN GRASS</Text>
                  <Text style={{ color: "#FFFFFF", fontSize: 15, lineHeight: 24, letterSpacing: 0.3, fontWeight: "400", textAlign: 'center' }}>SINGLE BY GEORGE EZRA</Text>
                  <Text style={{ color: "#FFFFFF", fontSize: 12, textAlign: 'center', fontWeight: "400", lineHeight: 20 }}>Gold Rush Kid 2022 . 2:47 . 233,550,835</Text>
                </View>

              </View>
 
                {/* </View>

              </View> */}

            </View>

          </ImageBackground>


 
{/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}
  <View style={{justifyContent:"center",alignItems:"center"}}>

<View style={{flexDirection:'row',justifyContent:'space-between',width:"90%",marginTop:12}}>

        <View style={{ }}>
                <View style={{ marginBottom: 14 }}>
                   <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 20, letterSpacing: 0.4, lineHeight: 24, }}>GREEN GREEN GRASS</Text>
                   <Text style={{ color: "#FFF", fontSize: 14, lineHeight: 24, letterSpacing: 0.3, fontWeight: "400",   }}>SINGLE BY GEORGE EZRA</Text>
                   <Text style={{ color: "#C0C0C0", fontSize: 12,   fontWeight: "400", lineHeight: 20,letterSpacing: 0.3, }}>Gold Rush Kid 2022.</Text>
                </View>
        </View>


       <View>
           <Image style={{width:25,height:25,resizeMode:"center"}} source={require("../assets/menu.png")}/>
       </View>
  
</View>  
   
       <Slider
              style={{width:"100%",  }}
              value={progress.position}
              maximumValue={progress.duration}
              minimumValue={0}
              thumbTintColor='#FFFFFF'
              maximumTrackTintColor="#FFFFFF"
              minimumTrackTintColor="#FFFFFF"
              onValueChange={async value =>{
                await TrackPlayer.seekTo(value)
               setAudio(value)
               console.log("progress.position",progress.position)
               console.log("progress.duraion",progress.duration)
               console.log("progress.buffered",progress.buffered)
              }}
            />



     <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%"}}>

          <View>
              <Text style={{color:"#FFF",fontWeight:'400',letterSpacing:0.24}}>{minutes}:{seconds.toString().padStart(2, '0')}</Text>
          </View>

          <View>
             <Text style={{color:"#FFF",fontWeight:'400',letterSpacing:0.24}}>{remainingTime}</Text>
          </View>

        </View>

  <View style={{flexDirection:"row",width:"85%",justifyContent:"space-between",marginTop:18,alignItems:"center"}}>

   <TouchableOpacity>
      <View>
          <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/shuffleaudio.png")}/>
      </View>
   </TouchableOpacity>

 <TouchableOpacity>
      <View>
          <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/previous-icon.png")}/>
      </View>
 </TouchableOpacity>

  <TouchableOpacity onPress={playaudio}>
 <View style={{backgroundColor:"rgba(255,255,255,0.2)",width:65,height:65,justifyContent:"center",alignItems:"center",borderRadius:50}}>
      <View>
      <Icon name={isvisible ? "play" : "pause"} color="#FFF" size={30} />
      
      </View>
 </View>
  </TouchableOpacity>



<TouchableOpacity>
      <View>
          <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/next-icon.png")}/>
      </View>
</TouchableOpacity>

<TouchableOpacity>
      <View>
          <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/repeat.png")}/>
      </View>
</TouchableOpacity>

   </View>
   


   <View style={{flexDirection:'row',marginTop:35}}>
        <TouchableOpacity onPress={ ()=>{changeVol(volume - 0.1)}}>
            <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/mute-sound.png")} />
        </TouchableOpacity>

     <Slider
        style={{ width: '80%' }}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={changeVol}
        thumbTintColor="#FFFFFF"
        maximumTrackTintColor="#FFFFFF"
        minimumTrackTintColor="#FFFFFF"
      />

           {/* <SliderVolumeController style={{width:"100%",backgroundColor:'red'}}/> */}

     <TouchableOpacity onPress={()=>changeVol(volume+ 0.1)}>
          <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/full-sound.png")} />
     </TouchableOpacity>

  </View>


    <View style={{flexDirection:"row",justifyContent:'space-between',width:'90%',marginTop:35}}>

    <TouchableOpacity>
          <View>
              <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/left-icon.png")} />
          </View>
    </TouchableOpacity>

          <TouchableOpacity>
            <View>
               <Image style={{width:20,height:20,resizeMode:"center"}} source={require("../assets/share.png")} />
            </View>
          </TouchableOpacity>
    </View>

  </View>

{/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}
        </View>

      </ScrollView>

    </View>
  )
}



export default Songplay

const styles = StyleSheet.create({})