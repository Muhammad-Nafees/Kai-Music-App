import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import GetStarted from "../screens/auth/GetStarted";
import MusicList from "../screens/auth/MusicList";



const AuthStack = () => {

   const Stack = createStackNavigator()

   return (
      <Stack.Navigator initialRouteName="GetStarted">
         <Stack.Screen options={{ headerShown: false }} name="GetStarted" component={GetStarted} />
         <Stack.Screen options={{ headerShown: false }} name="MusicList" component={MusicList} />
         <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
         <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Stack.Navigator>

   )

}

export default AuthStack
