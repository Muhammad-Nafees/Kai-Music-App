import React from "react"
import {createSlice} from "@reduxjs/toolkit"



const User_slices=createSlice({

    name:"Kai",

   initialState:{
     name:""
   },
  reducers:{
       login(state,action){
          state.name=action.payload
          // console.log("insideRedux",state?.name)
        }
      }
      
    })
    
export default User_slices.reducer
export const {login} =User_slices.actions
