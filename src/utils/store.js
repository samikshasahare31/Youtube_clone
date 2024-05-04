import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./appSlice";   //why write reducer
import chatReducer from "./chatSlice"; //why write reducer

const store = configureStore({
      reducer:{
        app:appReducer,
        chat:chatReducer
      }
})
export default store;