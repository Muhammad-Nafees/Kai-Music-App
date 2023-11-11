import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



const TravitScott = () => {


  const SCREENWIDTH = Dimensions.get("screen").width
  const SCREENHEIGHT = Dimensions.get("screen").height



  const data = [
    {
      backgroundimg: require("../assets/tenet.png"),
      Tenet: "TENET",
      travisScott: "Travis Scott",
      text: "TENET",
      spotify: "Spotify",
      applemusic: "Apple Music",
    },
  ]

  
  const dataimg = [
    {
      imgbg: require("../assets/the-weekend.png"),
      weekend: "The Weekend"
    },
    {
      imgbg: require("../assets/ariana-grande.png"),
      weekend: "Arianna Grande"
    },
    {
      imgbg: require("../assets/fifth-pic.png"),
      weekend: "George Ezra"
    }
  ]

  const navigation = useNavigation();



  return (
    <View>
      <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "#1D1D1D" }}>
        <View>

          <ImageBackground style={{ width: "100%", height: SCREENHEIGHT / 2.1, }} source={require("../assets/travis-scott-big.png")}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }}>

                <TouchableOpacity onPress={() => navigation?.goBack()}>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 14, height: 14, resizeMode: "center" }} source={require("../assets/back-arrow-goldrush.png")} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/menu.png")} />
                  </View>
                </TouchableOpacity>
              </View>



              <TouchableOpacity activeOpacity={0.7} style={{ width: 70, height: 70, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, marginTop: 240 }}>
                <Image style={{ width: 90, height: 80, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
              </TouchableOpacity>

            </View>

          </ImageBackground>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "#FFF", textAlign: "center", fontSize: 26, fontWeight: "700", lineHeight: 30, letterSpacing: 0.6 }}>Travis Scott</Text>
            <Text style={{ color: "#FFF", fontWeight: "400", lineHeight: 24, letterSpacing: 0.36, textAlign: "center" }}>Hip-Hop/Rap</Text>
          </View>
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>

            <View style={{ width: "70%", justifyContent: "center", alignItems: "center", }}>

              <LinearGradient
                colors={['rgba(90, 146, 255, 1)', 'rgba(54, 76, 214, 1)']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0.3 }}
                locations={[0, 1]}
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", backgroundColor: "#5A92FF", borderRadius: 50, height: 55 }}>

                <View style={{ width: "90%", flexDirection: 'row', alignItems: "center" }}>

                  <LinearGradient colors={['rgba(90, 146, 255, 1)', 'rgba(54, 76, 214, 1)']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0, 1]}
                    style={{ borderWidth: 1, borderColor: "#FFF", borderRadius: 50, width: 40, height: 40, justifyContent: "center", alignItems: "center", }}>
                    <Image style={{ width: 25, height: 25, resizeMode: "center" }} source={require("../assets/music-travis.png")} />
                  </LinearGradient>

                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: "#FFF", fontWeight: "500", letterSpacing: 0.32, fontSize: 16, textAlign: "center" }}>PLAY FULL SONGS</Text>
                  </View>
                </View>

              </LinearGradient>
            </View>
          </TouchableOpacity>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ marginTop: 12 }}>
            <Text style={{ color: "#FFF", textAlign: "center", fontSize: 16, fontWeight: "400", letterSpacing: 0.28 }}>Get up to 3 months free of Kai music</Text>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}
          {/* rgba(29, 29, 29, 0), rgba(29, 29, 29, 1) */}

          <View style={{ marginTop: 26, justifyContent: "center", alignItems: "center" }}>
            <LinearGradient
              colors={['rgba(29, 29, 29, 0),', 'rgba(29, 29, 29, 1)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0.3 }}
              locations={[0, 1]}

              style={{ width: "90%", }}>
              <Text style={{ color: "#FFF", fontSize: 26, fontWeight: "700", letterSpacing: 0.6 }}>About</Text>
              <Text style={{ width: 300, textAlign: "left", color: "#FFF", lineHeight: 19 }}>Travis Scott is an American rapper, singer, and record producer. Throughout his career, Scott  has achieved four number-one hits on the US Billboard Hill 100 chart, along with 80 total charted songs. Throughout his career, Scott has achieved
              </Text>

              <TouchableOpacity>
                <Text style={{ color: "#4F86F9", fontWeight: "700", fontSize: 12, }}>MORE</Text>
              </TouchableOpacity>

            </LinearGradient>

          </View>
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ width: "95%", marginLeft: "auto", marginTop: 18 }}>
            <View >
              <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "700", }}>CONCERTS IN UNITED STATES</Text>
            </View>
          </View>
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}


          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18, }}>
            <View style={{ borderWidth: 0.5, borderColor: "#FFF", width: "90%", height: 150, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>


              <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>

                <View style={{ marginTop: 12, width: "60%" }}>

                  <View style={{ flexDirection: 'row', borderColor: "#fff", justifyContent: 'space-between', width: 145, marginLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/CalendarBlank.png")} />
                    <Text style={{ color: "#4F86F9", fontWeight: "700", }}>OCTOBER 17,2023</Text>
                  </View>

                  <View style={{ marginLeft: 10, marginTop: 12 }}>
                    <Text style={{ color: "#FFF", fontSize: 16.5, width: 190, height: 20, textAlign: "left", fontWeight: "700" }}>American Airlines Center</Text>
                    <Text style={{ color: "rgba(255, 255, 255, 1)", fontSize: 15, fontWeight: "300", lineHeight: 26 }}>Dallas</Text>
                  </View>

                  {/* <View style={{marginLeft:10}}>
                </View> */}

                  <View style={{ marginLeft: 10, marginTop: 20 }}>
                    <Text style={{ color: "#CACACA", fontSize: 13, fontWeight: "300" }}>Powered by bandsintown</Text>
                  </View>

                </View>

                <View>
                  <Image style={{ width: 130, height: 130, resizeMode: "center" }} source={require("../assets/map-image.png")} />
                </View>

              </View>



            </View>
          </View>


          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}


          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18, }}>
            <View style={{ borderWidth: 0.5, borderColor: "#FFF", width: "90%", height: 80, borderRadius: 10, justifyContent: "center", alignItems: "center", }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }}>

                <View>
                  <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/oct-18.png")} />
                </View>


                <View>

                  <View>
                    <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500" }}>More upcoming concerts by Travis Scott</Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", width: 65, justifyContent: "space-between" }}>

                    <View>
                      <Text style={{ color: "#4F86F9", fontSize: 13, fontWeight: "600" }}>SEE ALL</Text>
                    </View>

                    <View>
                      <Image style={{ width: 12, height: 12, resizeMode: "center" }} source={require("../assets/right-blue-arrow.png")} />
                    </View>

                  </View>

                </View>

              </View>

            </View>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
            <View style={{ width: "90%", height: 0.5, backgroundColor: "#3C3C3C" }} />
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}


          <View style={{ width: "95%", marginLeft: 'auto', marginTop: 18 }}>
            <Text style={{ color: "#FFF", fontWeight: "700", fontSize: 16 }}>IN MY MUSIC</Text>
          </View>
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 22, width: "90%", alignItems: "center" }}>

              <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "43%" }}>

                <View style={{}}>
                  <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/iknow-img.png")}>
                    <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                      <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>



              <View>
                <View>
                  <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500" }}>I Know</Text>
                  <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>Travis Scott</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between" }}>



                  <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                    <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>Spotify</Text>
                  </View>



                  <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                    <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>Apple Music</Text>
                  </View>


                </View>


              </View>

            </View>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ justifyContent: "center", alignItems: "center", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 22, width: "90%", alignItems: "center" }}>

              <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "43%" }}>

                <View style={{}}>
                  <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/astro-thunder.png")}>
                    <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                      <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>



              <View>

                <View>
                  <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500" }}>ASTROTHUNDER</Text>
                  <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>Travis Scott</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between" }}>

                  <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                    <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>Spotify</Text>
                  </View>

                  <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                    <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>Apple Music</Text>
                  </View>

                </View>



              </View>

            </View>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
            <View style={{ width: "90%", height: 0.5, backgroundColor: "#3C3C3C" }} />
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 22, width: "96%", alignItems: "center", paddingRight: 26 }}>
                  {/* <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", alignItems: "center", }}> */}

                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/tenet.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>


                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/travis-scott-tenet.jpg")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>


                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/tenet.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>
                  {/* ---------xxxxxxxxxxxx------------- */}
                </View>
              </View>

            )}
          />
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 22, width: "96%", alignItems: "center", paddingRight: 26 }}>
                  {/* <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", alignItems: "center", }}> */}

                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/utopio.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>


                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/screw-right.jpg")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <TouchableOpacity>
                        <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                          <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                        </View>
                      </TouchableOpacity>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>
                  {/* 
                    <View style={{}}>
                      <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/stragazing.jpg")}>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                          <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                        </TouchableOpacity>
                      </ImageBackground>
                    </View> */}
                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/utopio.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>
                  {/* ---------xxxxxxxxxxxx------------- */}
                </View>
              </View>
              // </View>

            )}
          />
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 22, width: "96%", alignItems: "center", paddingRight: 26 }}>
                  {/* <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "100%", alignItems: "center", }}> */}

                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/screw.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>


                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/stragazing.jpg")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>
                  {/* 
                    <View style={{}}>
                      <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/stragazing.jpg")}>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                          <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                        </TouchableOpacity>
                      </ImageBackground>
                    </View> */}
                  <View style={{}}>
                    <ImageBackground resizeMode='center' style={{ width: 115, height: 115, justifyContent: "center", alignItems: "center", }} source={require("../assets/screw.png")}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                        <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <View style={{ width: "78%" }}>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", }}>UTOPIO(LEAK)</Text>
                      <Text style={{ width: 220, color: "#FFF", fontSize: 16, fontWeight: "500", lineHeight: 28 }}>{item?.travisScott}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, width: 180, justifyContent: "space-between", alignItems: "center" }}>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 70, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.spotify}</Text>
                      </View>

                      <View style={{ borderWidth: 1, borderColor: "#4F86F9", width: 100, borderRadius: 50, height: 35, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(79, 134, 249, 0.05)" }}>
                        <Text style={{ color: "#FFF", fontWeight: "400", textAlign: "center" }}>{item.applemusic}</Text>
                      </View>

                    </View>
                  </View>
                  {/* ---------xxxxxxxxxxxx------------- */}
                </View>
              </View>
            )}
          />
          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}


          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <View style={{ width: "95%", marginLeft: 'auto', marginTop: 18 }}>
            <Text style={{ color: "#FFF", fontWeight: "700", fontSize: 16 }}>YOU MAY ALSO LIKE</Text>
          </View>

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}

          <FlatList
            data={dataimg}
            horizontal
            // style={{paddingRight:20}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

              <View style={{ marginTop: 18, paddingBottom: 14, paddingRight: 6, paddingLeft: 18 }}>
                <ImageBackground borderRadius={8}
                  style={{ width: 145, height: 200, resizeMode: 'center', }}
                  source={item.imgbg}
                >

                  <View style={{ justifyContent: "center", alignItems: "center", height: 280, }}>

                    <TouchableOpacity onPress={() => navigation.navigate("TravitScott")} activeOpacity={0.7} style={{ width: 50, height: 50, backgroundColor: "rgba(255, 255, 255, 0.3)", justifyContent: "center", alignItems: "center", borderRadius: 50, }}>
                      <Image style={{ width: 50, height: 50, resizeMode: "center", }} source={require("../assets/pause-img.png")} />
                    </TouchableOpacity>

                    <Text style={{ lineHeight: 30, color: '#FFF', fontSize: 17, fontWeight: '600', letterSpacing: 0.32, textAlign: "center", marginTop: 30 }}>{item.weekend}</Text>

                  </View>

                </ImageBackground>
              </View>
            )}
          />

          {/* -----------------xxxxxxxxxxxxxxxxxxxx------------------------ */}
        </View>

      </ScrollView>

    </View>
  )
}

export default TravitScott

const styles = StyleSheet.create({})
