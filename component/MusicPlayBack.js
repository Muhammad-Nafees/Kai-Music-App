import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const MusicPlayBack = () => {

  const [isvisible, setIsVisible] = useState(false)


  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 12 }}>
      <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", borderRadius: 50 }}>

        <View style={{ flexDirection: 'row', width: "70%", justifyContent: "space-between" }}>

          <View>
            <Image style={{ width: 40, height: 40, borderRadius: 50, resizeMode: 'center' }} source={require("../assets/gold-rush-kid.png")} />
          </View>

          <View>
            <Text style={{ color: "#1D1D1D", fontSize: 16, fontWeight: "600", letterSpacing: 0.32 }}>GREEN GREEN GRASS</Text>
          </View>

        </View>

        <View>
          <View>

            <Icon name={isvisible ? "play" : "pause"} color="rgba(81, 128, 243, 1)" size={30} />

          </View>
        </View>

      </View>
    </View>
  )
}

export default MusicPlayBack;
