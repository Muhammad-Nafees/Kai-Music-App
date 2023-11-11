import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import ImageBackgroundMap from '../../component/ImageBackgroundMap';
import CustomDrawerSlider from '../CustomDrawerSlider';
import DropDownPicker from 'react-native-dropdown-picker';
import MusicPlayerMap from '../../component/MusicPlayerMap';
import Artists from '../../component/Artists';

const Discover = () => {
  const {width, height} = Dimensions.get('screen');
  const [isopenModalDrawerTrue, setIsopenModalDrawerTrue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentvalue, setCurrentValue] = useState("Trending");
  const [isSearchDisplay, isSetSearchDisplay] = useState(false);

  console.log('currenVal', currentvalue);

  const drawermodalhandle = () => {
    navigation.openDrawer();
  };

  const data = [
    {
      image: require('../../assets/for-you-image.png'),
      text: 'DIE FOR YOU',
      text2: 'SINGLE BY THE WEEKND',
      type:"Trending",
      height2:205

    },
    {
      image: require('../../assets/thinking-loud.png'),
      text: 'THINKING OUT LOUD',
      text2: 'ALBUM BY ED SHEERAN',
      type:"Trending",
      height2:205

    },
    {
      image: require('../../assets/gold-rush-player.png'),
      text: 'GREEN GREEN GRASS',
      text2: 'SINGLE BY GEORGE EZRA',
      type:"Trending",
      height2:205

    },
    {
      image: require('../../assets/red-men.png'),
      text: 'LIKE YOU DO',
      text2: 'SINGLE BY JOJI',
      type:"Trending",
      height2:205
    },
    {
      image: require('../../assets/3-mens-singing.png'),
      text: 'PEACHES',
      text2: 'SINGLE BY JSUTIN BIEBER',
      type:"Trending",
      height2:205
    },
    {
      image: require('../../assets/ariana-girl.png'),
      text: ' FOCUS',
      text2: 'SINGLE BY ARIANA GRANDE',
      type:"Trending",
      height2:205
    },

    {
      image: require('../../assets/travis-scott.png'),
      textartist: 'Travis Scott',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/joji.png'),
      textartist: 'Joji',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/the-weekend.png'),
      textartist: 'The weekend',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/ariana-grande.png'),
      textartist: 'Ariana grande',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/fifth-pic.png'),
      textartist: 'George Ezra',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/sixth-pic.png'),
      textartist: ' Justin Bieber',
      width: 150,
      height: 200,
      type:"Artists"
    },
    {
      image: require('../../assets/the-idol.png'),
      text: 'The Idol',
      type:"Playlists",
      height3:200

    },
    {
      image: require('../../assets/slaying.png'),
      text: 'Slaying',
      type:"Playlists",
      height3:200

    },
    {
      image: require('../../assets/belibers.png'),
      text: 'Belibers',
      type:"Playlists",
      height3:200

    },
    {
      image: require('../../assets/selfcare.png'),      
      text: 'Self Care',
      type:"Playlists",
      height3:200

    },
    {
      image: require('../../assets/gym.png'),
      text: 'Gym',
      type:"Playlists",
      height3:200

    },
    {
      image: require('../../assets/Jojis.png'),
      text: 'Jojis',
      type:"Playlists",
      height3:200

    },
    {
      image: require("../../assets/sad.png"),
      text: 'Sad',
      type:"Moods",
    },
    {
      image: require('../../assets/romantic.png'),
      text: 'Romantic',
      type:"Playlists",
      type:"Moods"

    },
    {
      image: require('../../assets/happy.png'),
      text: 'Happy',
      type:"Moods"
    },
    {
      image: require('../../assets/calm.png'),
      text: 'Calm',
      type:"Moods"
    },
    {
      image: require('../../assets/angry.png'),      
      text: 'Angry',
      type:"Moods"
    },
    {
      image: require('../../assets/motivated.png'),
      text: 'Gym',
      type:"Moods"
    },
  ];



const items = [
    {label: 'Artists', value: 'Artists'},
    {label: 'Moods', value: 'Moods'},
    {label: 'Trending', value: 'Trending'},
    {label: 'Playlists', value: 'Playlists'},
];



  const navigation = useNavigation();


  return (
    <>
      <View>
        <LinearGradient
          colors={['rgba(27,27,27,1)', 'rgba(0,0,0,0.9)']}
          start={{x: 1, y: 0}}
          end={{x: 0.5, y: 0.3}}
          locations={[0, 1]}
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 26,
              zIndex: 9999,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignItems: 'center',
                paddingBottom: 12,
              }}>
              <TouchableOpacity onPress={drawermodalhandle}>
                <View>
                  <Image
                    style={{width: 25, height: 25, resizeMode: 'center'}}
                    source={require('../../assets/hamburgermenu.png')}
                  />
                </View>
              </TouchableOpacity>

              <DropDownPicker
                containerStyle={{
                  width: 133,
                  borderWidth: 1,
                  borderColor: 'rgba(90, 146, 255, 1)',
                  borderRadius: 10,
                }}
                placeholderStyle={{color: '#FFFFFF', fontWeight: '700'}}
                dropDownContainerStyle={{backgroundColor: '#444444'}}
                placeholder="Trending"
                items={items}
                open={isOpen}
                value={currentvalue}
                setOpen={() => setIsOpen(!isOpen)}
                setValue={val => setCurrentValue(val)}
                maxHeight={155}
                autoScroll
                theme="DARK"
              />

              <TouchableOpacity
                onPress={() => isSetSearchDisplay(!isSearchDisplay)}>
                <View>
                  <Image
                    style={{width: 25, height: 25, resizeMode: 'center'}}
                    source={require('../../assets/search.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {isSearchDisplay && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 12,
              }}>
              <View
                style={{
                  borderWidth: 0.5,
                  borderRadius: 50,
                  borderColor: '#FFF',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(255, 255, 255, 0.10)',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '95%',
                    }}>
                    <View style={{width: '96%'}}>
                      <TextInput
                        placeholder="I'm feeling a bit down. Play me something uplifting"
                        placeholderTextColor="#fff"
                        style={{color: '#fff', fontSize: 13}}
                      />
                    </View>

                    <View>
                      <Image
                        style={{width: 20, height: 20, resizeMode: 'center'}}
                        source={require('../../assets/sendarrowdiscover.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>

                {data?.map((item, index) => {
                  return (
                    item.type==currentvalue&&
                    <MusicPlayerMap
                      currentvalue={currentvalue}
                      item={item}
                      index={index}
                    />
                  );
                })}

              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

export default Discover;
