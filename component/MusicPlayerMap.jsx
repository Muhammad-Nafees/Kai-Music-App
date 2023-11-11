import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {NavigationRouteContext, useNavigation} from '@react-navigation/native';



const MusicPlayerMap = ({item, index, currentvalue}) => {
  console.log('currentvalue', currentvalue);

  const navigation = useNavigation();


  const navigatehandling=()=>{
    if(currentvalue=="Playlists"){
      navigation?.navigate("TravitScott")
    }
    else if(currentvalue=="Moods"){
      navigation?.navigate("TravitScott")
    }
    else{
      navigation?.navigate('GoldRush')
    }
  }


  return (
    <>
    
<View style={{ marginTop: 18, }}>
    {currentvalue === 'Artists' ? (
      <View style={{}}>      
       <ImageBackground 
        style={{ width: item.width, height: item.height, resizeMode: 'center',}}
        source={item.image}
      >
      
    <View style={{justifyContent:"center",alignItems:"center",height:280}}>

    <TouchableOpacity onPress={()=>navigation.navigate("TravitScott")} activeOpacity={0.7} style={{width:50,height:50,backgroundColor:"rgba(0, 0, 0, 0.30)",justifyContent:"center",alignItems:"center",borderRadius:50,}}>
        <Image style={{width:50,height:50,resizeMode:"center",}} source={require("../assets/pause-img.png")}/>   
    </TouchableOpacity>

     <Text style={{ lineHeight: 30, color: '#FFF', fontSize: 17, fontWeight: '600', letterSpacing: 0.32,textAlign:"center",marginTop:30 }}> {item.textartist} </Text>

    </View>

       </ImageBackground>
      </View>

    ) :

     (
      
      <View style={{ height:currentvalue=="Playlists"?  item.height3:item.height2}}>
      <TouchableOpacity 
        onPress={navigatehandling}
        activeOpacity={0.7}
        style={{ backgroundColor: 'rgba(68, 68, 68, 0.6)', borderBottomRightRadius: 10, paddingBottom:currentvalue=="Trending"? 10:null, borderBottomLeftRadius: 10, borderRadius: 10 }}>
        <View>
          <Image 
            style={{ width: 155, height: 155, resizeMode: 'center' }}
            source={item?.image}
          />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ lineHeight: 30, color: '#FFF', fontSize: 14.5, fontWeight: '600', letterSpacing: 0.32 }}>
            {item?.text}
          </Text>
          <Text style={{ color: '#FFF', fontSize: 11, letterSpacing: 0.24 }}>
            {item?.text2}
          </Text>
        </View>
      </TouchableOpacity>
      </View>

    )}
  </View>

    </>
  );
};

export default MusicPlayerMap;

const styles = StyleSheet.create({});
