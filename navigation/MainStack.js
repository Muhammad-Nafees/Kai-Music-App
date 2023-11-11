import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Navigations, { DrawerNavigation, Drawerslider } from "./Navigations";
import MusicPlayBack from "../component/MusicPlayBack";


const Stack = createStackNavigator()

const Mainstack = () => {

   return (
      <NavigationContainer independent={true}>
       {/* <MusicPlayBack/> */}
         <Navigations />
      </NavigationContainer>
   )

}

export default Mainstack;
