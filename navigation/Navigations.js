import React, { useEffect, useReducer, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, LayoutChangeEvent, ImageBackground } from "react-native";
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from "../screens/bottomscreens/Discover";
import Plusmain from "../screens/bottomscreens/Plusmain";
import Svg, { Path } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useDerivedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawerSlider from "../screens/CustomDrawerSlider";
import Musicplayer from "../screens/bottomscreens/MusicPlayer";
import Gold_Rush from "../screens/bottomscreens/Gold_Rush";
import Songplay from "../screens/Songplay";
import TravitScott from "../component/TravitScott";

const Stack = createStackNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);



const Navigations = ({ navigation }) => {
    return (
        <Drawer.Navigator screenOptions={{ drawerStyle: { width: "100%", } }}
            drawerContent={props => <CustomDrawerSlider {...props} />}>
            <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Songplay" component={Songplay} options={{headerShown:false}}/>
        </Drawer.Navigator>
    );
};



const Drawer = createDrawerNavigator()


const Tab = createBottomTabNavigator();



const BottomTabNavigation = () => {



    return (

        <Tab.Navigator  screenOptions={{ tabBarHideOnKeyboard: true, tabBarStyle: { display: "none" } }} tabBar={(props) => <AnimatedTapBar {...props} />}>
            <Tab.Screen name="Discover" component={Discover}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 60, height: 38, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 27, height: 27, resizeMode: 'center' }}
                                source={require('../assets/discovericon.png')}
                            />
                            <Text style={{ color: "#FFFFFF" }}>Discover</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ focused }) => (
                            <Image style={{ resizeMode: "center", width: 110, height: 110 }} source={require("../assets/plus-icon.png")} />
                    ),
                }}
                name="Plusmain" component={Plusmain}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 60, height: 38, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 22, height: 22, resizeMode: 'center' }}
                                source={require('../assets/musictapbar.png')}
                            />
                            <Text style={{ color: "#FFFFFF" }}>Player</Text>
                        </View>
                    ),
                }}
                name="MusicStack" component={MusicStack} />
        </Tab.Navigator>
    );
};

const MusicStack=()=>{
     return(
           <Tab.Navigator initialRouteName="Musicplayer">
                        <Tab.Screen  name="Musicplayer" component={Musicplayer} options={{headerShown:false,tabBarStyle:{display:"none"}}}/>
                        <Tab.Screen name="GoldRush" component={Gold_Rush} options={{headerShown:false,tabBarStyle:{display:"none"}}} />
                        <Tab.Screen name="TravitScott" component={TravitScott} options={{headerShown:false,tabBarStyle:{display:"none"}}} />
           </Tab.Navigator>
     )
}

const AnimatedTapBar = ({ state: { index: activeIndex, routes }, navigation, descriptors }) => {



    const route = useRoute();
    const { bottom } = useSafeAreaInsets();

    const reducer = (state, action) => {
        return [...state, { x: action.x, index: action.index }];
    };

    const [layout, dispatch] = useReducer(reducer, []);

    const handleLayout = (event, index) => {
        dispatch({ x: event.nativeEvent.layout.x, index });
    };

    if (activeIndex === 1) {
        return null
   }

    return (
        <View style={[styles.tabBar, { paddingBottom: bottom }]}>

            <View style={styles.tabBarContainer}>
                {
                    routes.map((route, index) => {
                        console.log("route--------",route?.name)

                        const active = index === activeIndex;
                        const { options } = descriptors[route.key];



                        return (
                            <TabBarComponent
                                //    descriptors={descriptors?.tabBarStyle}
                                key={route.key}
                                route={route?.name}
                                active={active}
                                options={options}
                                index={index}
                                onLayout={(e) => handleLayout(e, index)}
                                onPress={() => navigation.navigate(route.name)}
                            />
                        );
                    })}
            </View>
        </View>
    );
};



const TabBarComponent = ({ active, options, onLayout, onPress, route, index, descriptors }) => {

    // console.log('descriptors0-0=-=',descriptors)
    const ref = useRef(null);

    const animatedIconContainerStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(index != 1 ? (active ? 1 : 0.4) : 1, { duration: 250 })
        };
    });

    return (
        <Pressable onPress={onPress} onLayout={onLayout} style={{ ...styles.component }}>
            {/* <Animated.View
                style={[styles.componentCircle,{ opacity: active && index === 0 ? 1 : 0.4 }]}
            /> */}

            <Animated.View style={[styles.iconContainer, animatedIconContainerStyles]}>
                {options.tabBarIcon ? options.tabBarIcon({ ref, active, }) : <Text>?</Text>}
            </Animated.View>
        </Pressable>
    );
};



const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        height: 110,
    },

    activeBackground: {
        position: 'absolute',
    },

    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    component: {
        height: 60,
        width: 60,
        marginTop: 20
    },

    componentCircle: {
        flex: 1,
        borderRadius: 30,
    },

    iconContainer: {
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        height: 36,
        width: 36,
    },

    tab_icon: {
        marginHorizontal: 10,
        paddingHorizontal: 10
    },

    icon_badge: {
        color: '#fff',
        top: -6,
        right: -10,
        borderRadius: 20,
        width: 15,
        height: 15,
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center'
    }
});

export default Navigations;
