import {createSlice} from "@reduxjs/toolkit";
const appSlice = createSlice({
    name:"app",
    initialState:{
         open:true,
         video:[],
         category:"All",
         searchSuggestion:[],
         suggestedVideo:null
    },
    reducers:{
        //action
         toggleSidebar:(state) =>{
            state.open=!state.open;
         },
         setHomeVideo:(state,action)=>{
            state.video = action.payload; //set all video
         },
         setCategory:(state,action)=>{
            state.category = action.payload;
         },
         setsearchSuggestion:(state,action)=>{
            state.searchSuggestion = action.payload;
         }
    }
});
export const {toggleSidebar,setHomeVideo,setCategory,setsearchSuggestion,setSuggestVideo} = appSlice.actions;
export default appSlice.reducer;