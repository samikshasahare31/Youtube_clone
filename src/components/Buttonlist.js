import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';

const buttonList = ["All", "Music", "Live", "Javascript", "Java", "Songs", "Vlogs", "Trending", "Programming", "Software Engineering", "Recruitment", "News", "Technology", "Comedy", "Cricket", "New to you", "Storytelling", "Watched", "Recently uploaded", "Watched", "web development","computer programming","Netlify","Coding"]

const Buttonlist = () => {
const[active,setActive] = useState("All");
const dispatch = useDispatch();
const videoByTag = (tag) =>{
  if(active!=tag) {
    dispatch(setCategory(tag));
    setActive(tag);
  } 
}
console.log(active);
  return (
    <div className='flex w-full py-4 overflow-x-scroll no-scrollbar my-1'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div  key={index}>
          <button onClick={()=>{videoByTag(buttonName)}} className={`${active== buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}><span className='whitespace-nowrap'>{buttonName}</span></button>
            </div>

          )


        })
      }

    </div>
  )
}

export default Buttonlist