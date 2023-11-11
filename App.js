import React, { useEffect } from 'react';
import { View,Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import {BlurView} from "@react-native-community/blur"
// import {usenav} from 
import LinearGradient from "react-native-linear-gradient"
import { useSelector } from 'react-redux';
import Routes from './navigation/Routes';
import MusicPlayBack from './component/MusicPlayBack';



const App = () => {
  
  return (
   <>
      {/* <MusicPlayBack/> */}
      <Routes/>
   </>
    
  );
};

export default App;
