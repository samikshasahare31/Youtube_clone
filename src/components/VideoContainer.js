import React, { useEffect, useState } from 'react'
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from '../constant/youtube';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../utils/appSlice';
import store from '../utils/store';
import Videolength from './Videolength';
const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  //jab bhi api call/network call kr rhe ho toh apko hmesha useEffect use krn hai

  const dispatch = useDispatch();
  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log('res', res);
      // setVideo(res?.data?.items);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }
  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      console.log(res.data);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (category == "All") {
      fetchYoutubeVideo();

    }
    else {
      fetchVideoByCategory();

    }
  }, [category]) //when jab jab change tab tab call ho
  return (
    <div className='grid grid-cols-3 gap-3 '>
      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ?  item.id.videoId : item.id}`} key={typeof item.id === 'object' ?  item.id.videoId : item.id}>
              <VideoCart item={item} />
              {video.lengthSeconds &&(
              <Videolength time={video?.lengthSeconds}/>
              
              )}
            </Link>
          )
        })
      }

    </div>
  )
}

export default VideoContainer;

