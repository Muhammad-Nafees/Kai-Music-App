import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  BackHandler,
  FlatList,
  Easing,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { useIsFocused } from '@react-navigation/native';
import InputField from '../../component/InputField';
import { TypingAnimation } from 'react-native-typing-animation';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';


const Plusmain = ({ route }) => {


  
  const { width, height } = Dimensions.get('screen');
  const [iscolorChange, setIsColorchange] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  const [imageChange, setImageChange] = useState(
    require('../../assets/recordinginput.png'),
  );
  const [inputfieldvalue, setInputFieldValue] = useState(false);
  const [showContentView, setShowContentView] = useState(false);
  const [secondshowContentView, setsecondShowContentView] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showDots, setShowDots] = useState(true);
  const [openmodal, setopenModal] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [animationView, setAnimationView] = useState(false);

  const scrollViewRef = useRef(null);

  const data = [
    {
      id: '1',
      image:require("../../assets/for-you-image.png"),
      text:"DIE FOR YOU",
      text2:"SINGLE BY THE WEEKND"
    },
    {
      id: '2',
      image:require("../../assets/red-men.png"),
      text:"LIKE YOU DO",
      text2:"SINGLE BY JOJI"
    },
  ];



  const navigation = useNavigation();

  const inputchange = text => {

    if (text.length > 0) {
      setImageChange(require('../../assets/sendchat.png'), setInputValue(text));
    } else {
      setImageChange(
        require('../../assets/recordinginput.png'),
        setInputValue(''),
      );
    }
  };


  const handleSubmit = () => {


    if (inputvalue.trim() !== '') {
      setDisplayText(inputvalue);
      setShowContentView(true);
      setAnimationView(true);

      scrollViewRef.current?.scrollToEnd();
      if (!secondshowContentView || !animationView) {
        setTimeout(() => {
          setAnimationView(false);

          if (!secondshowContentView) {
            setsecondShowContentView(true);
          }
        }, 3000);
      }
    }
  };



  scrollViewRef.current?.scrollToEnd();


  const handleSend = () => {
    setopenModal(true);
  };

  const handleFilter = () => {
    setFilterModalVisible(true);
  };



  const position = useSharedValue(0);

  const [isOpen, setIsOpen] = useState(false)
  const [currentvalue, setCurrentValue] = useState(false)

  const items = [
    {
      label: "kai Discover", value: "Kai discover",
    },
    {
      label: "Trending", value: "Trending",
    }
  ]

  // Define gestureHandler after position

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => { },

    onActive: (event, ctx) => {
      position.value = event.translationX;
    },
    onEnd: () => { },
  });

  const Styleline = useAnimatedStyle(() => {
    return {
      backgroundColor: 'orange',
      height: 3,
      marginTop: -3,
      borderRadius: 3,
      width: 100,
      transform: [{ translateX: 0 }],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
    };
  });

  return (
    <>
      <View style={{}}>
        <LinearGradient
          colors={["#1D1D1D", "#1D1D1D",]}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 2 }}
          locations={[0.2, 1,]}

          style={{ height: '100%', width: '100%' }}>

          <View style={{ marginTop: 18, flexDirection: 'row', justifyContent: "space-between", alignItems: "center", width: "65%", marginLeft: "5%" ,paddingBottom:12}}>

            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
              <View>
                <Image
                  style={{ width: 25, height: 25, resizeMode: 'center' }}
                  source={require('../../assets/hamburgermenu.png')}
                />
              </View>
            </TouchableOpacity>

            <View>
              <View style={{ flexDirection: "row", width: 125, height: 48, backgroundColor: "#444444", borderWidth: 0.5, borderRadius: 10, justifyContent: "center", alignItems: "center",borderColor:"#FFF" }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", alignItems: "center" }}>
                  <View style={{ width: 28, height: 28, backgroundColor: "#CACAFF", borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                    <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../../assets/kai-logo.png")} />
                  </View>

                  <View>
                    <Text style={{ color: "#FFF" }}>Kai Music</Text>
                  </View>

                </View>
              </View>
            </View>
          </View>


          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <ScrollView
            ref={scrollViewRef}
            style={{ flex: 1, }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
            {showContentView && (
              <View
                style={{ marginTop: 65, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', width: '90%', borderRadius: 10, paddingBottom:12 }}>
                  <View
                    style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 10, }}>
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '27%', }}>
                      <Image style={{ width: 40, height: 40, resizeMode: 'center' }} source={require('../../assets/image-man.png')} />
                      <Text style={{ color: '#000000', fontSize: 18, fontWeight: '700', }}> You </Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 40, height: 40, resizeMode: 'center' }}
                          source={require('../../assets/PencilSimpleLine.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                <View style={{ width: '80%', marginTop: 12 }}>
                    <Text style={{ color: '#000000' }}>{`“${displayText}”`}</Text>
                </View>

                </View>
              </View>
            )}

            {!showContentView && (
              <View
                style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300, width:'100%' }}>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', width:'100%' }}>
                  <LinearGradient colors={["rgba(255, 255, 255, 0.04)","rgba(0, 0, 0, 0.00)"]}
                    style={{   width: '90%', borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, marginBottom: 18, }}>
                      <View
                        style={{  width: '90%',  borderWidth: 0.3,  borderColor: '#255AE1',  borderRadius: 50, justifyContent: 'center', alignItems: 'center',
                        }}>
                        <Text
                          style={{ color: '#FFFFFF',marginBottom: 12, marginTop: 12, width: 250,textAlign:"left"}}>
                          Hi, I’m Kai your personalized AI music companion
                        </Text>
                      </View>

                      <View
                        style={{width: '90%',borderWidth: 0.3,borderColor: '#255AE1',borderRadius: 50,marginTop: 10, justifyContent: 'center',alignItems: 'center', }}>
                        <Text style={{color: '#FFFFFF', marginBottom: 12,marginTop: 12,width: 250,textAlign:"left" }}>
                          What are you in the mood to listen to today?
                        </Text>
                      </View>

                      <View
                        style={{ width: '90%', borderWidth: 0.3, borderColor: '#255AE1',borderRadius: 50, marginTop: 10,justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#5A92FF', marginBottom: 12, marginTop: 12, width: 250,textAlign:"left"}}>
                          For example: "I need some background music for studying. Any ideas?"
                        </Text>
                      </View>
                    </View>

                    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}

                    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}
                  </LinearGradient>
                </View>
              </View>
            )}

            {/*----------------AnimationsView---------------------- */}

            {/*----------------AnimationsViewClose---------------------- */}

            {secondshowContentView && (
              <View
                style={{ marginTop: 10, justifyContent: 'center',alignItems: 'center', paddingBottom:45 }}>
                <LinearGradient
                  colors={['rgba(255, 255, 255, 0.04)', 'rgba(255, 255, 255, 0.04)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.6, y: 0.6 }}
                  locations={[0.2, 1]}
                  style={{ justifyContent: 'center',alignItems: 'center',width: '90%',borderRadius: 10,paddingBottom: 10, borderWidth:0.5,borderColor:"#5A92FF" }}>

                  <View  style={{ flexDirection: 'row', width: '90%',justifyContent: 'space-between',marginTop: 12, alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between', alignItems: 'center', marginRight: 'auto', }}>
                      
                      <View style={{ width: 28, height: 28, backgroundColor: "#CACAFF", borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                          <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../../assets/kai-logo.png")} />
                      </View>
    

                      <Text style={{ fontWeight: '700', fontSize: 18,  color: '#FFFFFF', }}>kai</Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/reload.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: '90%', marginTop: 10 }}>
                    <Text style={{fontWeight: '400', lineHeight: 20,fontSize: 15,color: '#FFF',}}>
                      Here are some of the latest songs of your favorite genre:
                    </Text>
                  </View>

                  {/*----------------Third View---------------------- */}

                  <View>
                    <View style={{ width:"95%" }}>
                       
                        <FlatList
                          data={data}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={item => item.id}
                          renderItem={({ item }) => (

  <View>
    <View style={{marginTop:14,width:"100%",justifyContent:"space-around" }}>

    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:"rgba(68, 68, 68, 0.6)",borderBottomRightRadius:10,paddingBottom:10,borderBottomLeftRadius:10, borderRadius:10,margin:5}}>   

    <View>
        <Image style={{width:168,height:168,resizeMode:"center"}} source={item?.image}/>
    </View>  

    <View style={{justifyContent:"center",alignItems:"center",  }}>
       <Text style={{lineHeight:30,color:"#FFF",fontSize:16,fontWeight:"600",letterSpacing:0.32}}>{item?.text}</Text>
       <Text style={{color:"#FFF",fontSize:12,letterSpacing:0.24}}>{item?.text2}</Text>
    </View>
</TouchableOpacity>

  </View>
</View>

                          )}
                        />
                      </View>
                    </View>

                  {/*----------------Third View---------------------- */}

                  <View style={{ width: '95%',paddingTop:10 }}>
                    <Text
                      style={{ color: '#FFF', fontSize: 15, fontWeight: '400' }}>
                      I hope this helps! Let me know if you need more.
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            )}



            {animationView && (
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                 <LinearGradient
                  colors={['rgba(255, 255, 255, 0.04)', 'rgba(255, 255, 255, 0.04)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.6, y: 0.6 }}
                  locations={[0.2, 1]}
                  style={{ justifyContent: 'center', alignItems: 'center', width: '90%', borderRadius: 10, paddingBottom: 24,borderWidth:1,borderColor:"rgba(90, 146, 255, 1)" }}>
                  <View
                    style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 12, alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', width: '32%', justifyContent: 'flex-start', alignItems: 'center', marginRight: 'auto', }}>
                      <View
                        style={{backgroundColor: '#FFF', width: 35, height: 35, borderRadius: 50,justifyContent: 'center',alignItems: 'center', }}>
                        <Image
                          style={{ width: 32, height: 32, resizeMode: 'center' }}
                          source={require('../../assets/kai-logo.png')}
                        />
                      </View>
                      <Text
                        style={{ fontWeight: '700', fontSize: 18, color: '#FFFFFF',marginLeft: 10 }}>
                        Kai
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/reload.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  {/*----------------Third View---------------------- */}

                  <View style={{ width: '90%', marginTop: 12,marginLeft: 40 }}>
                    <TypingAnimation
                      dotColor="#FFFFFF"
                      dotMargin={10}
                      dotAmplitude={3}
                      dotRadius={4}
                      dotX={12}
                      dotY={6}
                    />
                  </View>
                  {/*----------------Third View---------------------- */}
                </LinearGradient>
              </View>
            )}
          </ScrollView>

          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}


          <View style={{ justifyContent: "center", alignItems: "center", borderTopWidth: 1, paddingTop: 12, borderColor: "#575757" }}>
            <View style={{ flexDirection: "row", width: "92%", justifyContent: "space-between", }}>
              <View style={{width:"65%"}}>

                <View style={{ borderWidth: 0.95, width: "100%", borderRadius: 50, borderColor: "#E2E8F0" }}>
                  <TextInput autoCorrect={false} returnKeyType="send" onChangeText={inputchange} placeholder="How can i help you?" placeholderTextColor='#fff' onSubmitEditing={() => handleSubmit()}
                    style={{ paddingLeft: 12, color: '#fff' }}
                  />
                </View>

              </View>

              <View style={{ flexDirection: "row", width:108, justifyContent: "space-between",  }}>

                <TouchableOpacity>
                  <View style={{ backgroundColor: "#FFF", width: 50, height: 50, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 25, height: 25, resizeMode: "center" }} source={require("../../assets/audio-recording-input.png")} />
                  </View>
                </TouchableOpacity>



                <TouchableOpacity onPress={handleSubmit}>
                  <View style={{ backgroundColor: "#255AE1", width: 50, height: 50, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../../assets/send-button-input2.png")} />
                  </View>
                </TouchableOpacity>

              </View>



            </View>
            <View style={{ paddingBottom: 20, paddingTop: 18 }}>
              <Text style={{ fontSize: 10, textAlign: "center", lineHeight: 14, color: "#9E9E9E" }}>Free Research Preview. KaiGPT may produce inaccurate information about people, places and facts. KaiGPT September Version</Text>
            </View>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}

          {/* {isModalVisiblefiltermain && <FilterModal isModalVisiblefilter={isModalVisiblefiltermain} setIsModalVisible={setIsModalVisiblemain} />} */}

          {isFilterModalVisible && (
            <FilterModal
              isFilterModalVisible={isFilterModalVisible}
              setFilterModalVisible={setFilterModalVisible}
            />
          )}

          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}
        </LinearGradient>
      </View>
    </>
  );
};



export default Plusmain;

const styles = StyleSheet.create({
  animatedview: {
    width: 20,
    height: 20,
    backgroundColor: '#9747FF',
    position: 'absolute',
    left: -10,
    borderRadius: 10,
  },
  header: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#cccdb2',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#777',
    fontSize: 12,
  },
  rangContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#cccdb2',
    borderBottomWidth: 1,
  },
  labelsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  label: {
    color: '#333',
    fontSize: 12,
  },
  track: {
    height: 3,
    backgroundColor: '#cccdb2',
    borderRadius: 3,
  },
  knob: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#9c44dc',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -12,
    marginLeft: -10,
    // zIndex:-99999
  },
});
