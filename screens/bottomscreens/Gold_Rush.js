
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MusicList from '../auth/MusicList'
import { useNavigation } from '@react-navigation/native'



const Gold_Rush = () => {
  const navigation=useNavigation()
  const SCREENWIDTH = Dimensions.get("screen").width
  const SCREENHEIGHT = Dimensions.get("screen").height

  const data = [
    {
      couting: "1",
      text: "Die For You",
      text2: "BY THE WEEKND",

    },
    {
      couting: "2",
      text: "Thinking Out Loud",
      text2: "BY ED SHEERAN",
    }
    ,
    {
      couting: "3",
      text: "Like You Do",
      text2: "BY JOJI",
    }
    ,
    {
      couting: "4",
      text: "Peaches",
      text2: "BY JUSTIEN BIEBER",
    }
    ,
    {
      couting: "5",
      text: "FOCUS",
      text2: "BY ARIANA GRANDE",
    }
    ,
    {
      couting: "6",
      text: "I'm Not Afraid",
      text2: "BY ENEMIM",
    }
  ]



  return (
    <View>
      <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "#2E2E2E" }}>
        <View>

          <ImageBackground style={{ width: "100%", height: SCREENHEIGHT / 2.1, }} source={require("../../assets/gold-rush-image.png")}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }}>

                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 14, height: 14, resizeMode: "center" }} source={require("../../assets/back-arrow-goldrush.png")} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{ width: 32, height: 32, backgroundColor: "rgba(29,29,29,0.3)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../../assets/menu.png")} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ height: SCREENHEIGHT / 2.9, justifyContent: 'flex-end', alignItems: "flex-end" }}>

                <View style={{ marginBottom: 14 }}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "600", textAlign: "center", fontSize: 20, letterSpacing: 0.4, lineHeight: 24 }}>GREEN GREEN GRASS</Text>
                  <Text style={{ color: "#FFFFFF", fontSize: 15, lineHeight: 24, letterSpacing: 0.3, fontWeight: "400", textAlign: 'center' }}>SINGLE BY GEORGE EZRA</Text>
                  <Text style={{ color: "#FFFFFF", fontSize: 12, textAlign: 'center', fontWeight: "400", lineHeight: 20 }}>Gold Rush Kid 2022 . 2:47 . 233,550,835</Text>
                </View>

              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%", alignItems: "center" }}>
                <View style={{ width: "47.5%", height: 45, backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: 11, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 0.5, borderColor: "#5A92FF" }}>


                  <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "40%", }}>

                      <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../../assets/play.png")} />
                      </TouchableOpacity>
                      <Text style={{ color: "#FFF", fontWeight: "500", }}>Play</Text>

                    </View>
                  </View>

                </View>


                <View style={{ width: "47.5%", height: 45, backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: 11, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 0.5, borderColor: "#5A92FF" }}>


                  <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "52%", }}>

                      <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../../assets/shuffle.png")} />
                      </TouchableOpacity>
                      <Text style={{ color: "#FFF", fontWeight: "500", }}>Shuffle</Text>

                    </View>
                  </View>



                  {/* <View>
    <Text>HIHIH</Text>
</View> */}


                </View>

              </View>

            </View>

          </ImageBackground>

       

          {
            data?.map((item, index) => {
              return (
                <View>
                  <View style={{ justifyContent: "center", alignItems: "center", marginTop: 12, borderBottomWidth: 1, borderColor: "#7E7E7E", paddingBottom: 12 }}>
                    <TouchableOpacity onPress={()=>navigation?.navigate("Songplay")} style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center", }}>

                      <View style={{ flexDirection: 'row', width: "40%", justifyContent: "space-between" }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "20%", alignItems: "center" }}>
                          <View style={{ width: 7, height: 7, backgroundColor: "#7E7E7E", borderRadius: 50, }} />
                          <Text style={{ color: "#7E7E7E" }}>{item?.couting}</Text>
                        </View>

                        <View style={{ borderColor: "#FFF", justifyContent: 'flex-start', alignItems: "flex-start", width: SCREENWIDTH / 2, marginLeft: "10%" }}>
                          <Text style={{ color: "#FFF", fontWeight: "400", fontSize: 18, }}>{item.text}</Text>
                          <Text style={{ color: "#C7C7C7", fontWeight: "300", fontSize: 9 }}>{item.text2}</Text>
                        </View>
                      </View>


                      <TouchableOpacity>
                        <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../../assets/menu.png")} />
                      </TouchableOpacity>




                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }

        </View>

      </ScrollView>

    </View>
  )
}



export default Gold_Rush

const styles = StyleSheet.create({})
