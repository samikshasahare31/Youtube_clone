import {createSlice} from "@reduxjs/toolkit";



const chatSlice = createSlice({
    name: "chat",
    initialState:{
    message:[],
    // like this message is go in array message:[{name:"programming", message:"input"}],

    },
    reducers:{
        setMessage:(state,action)=>{
            state.message.splice(100,1);//top message are delete and only show latest
            state.message.push(action.payload)
        }
    }
})
export const {setMessage} = chatSlice.actions;
export default chatSlice.reducer;