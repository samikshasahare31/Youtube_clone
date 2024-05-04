import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosMusicalNote } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { SiPodcastindex } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useSelector } from 'react-redux';

const sidebarItem = [
    //alt+shift+arrowdown
    {
        icons: <IoMdHome size="24px" className='cursor-pointer' />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" className='cursor-pointer' />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" className='cursor-pointer' />,
        title: "Subscription"
    },
    {
        icons: <LuHistory size="24px" className='cursor-pointer' />,
        title: "History"
    },
    {
        icons: <CgPlayListSearch size="24px" className='cursor-pointer' />,
        title: "Playlists"
    },
    {
        icons: <MdOutlineWatchLater size="24px" className='cursor-pointer' />,
        title: "Watch Later"
    },
    {
        icons: <AiOutlineLike size="24px" className='cursor-pointer' />,
        title: "Like video"
    },
    {
        icons: <IoMdTrendingUp size="24px" className='cursor-pointer' />,
        title: "Treding"
    },
    {
        icons: <HiShoppingBag size="24px" className='cursor-pointer' />,
        title: "Shopping"
    },
    {
        icons: <IoIosMusicalNote size="24px" className='cursor-pointer' />,
        title: "Music"
    },
    
    {
        icons: <PiFilmSlateBold size="24px"  className='cursor-pointer'/>,
        title: "Films"
    },
    {
        icons: <SiPodcastindex size="24px"  className='cursor-pointer'/>,
        title: "Live"
    },
    {
        icons: <SiYoutubegaming size="24px" className='cursor-pointer' />,
        title: "Gaming"
    },
    {
        icons: <BiNews size="24px" className='cursor-pointer' />,
        title: "News"
    },
    {
        icons: <GoTrophy size="24px" className='cursor-pointer' />,
        title: "Sport"
    },
    {
        icons: <AiOutlineBulb size="24px" className='cursor-pointer' />,
        title: "Courses"
    },
    {
        icons: <GiHanger size="24px" className='cursor-pointer' />,
        title: "Fashion & beauty"
    },
    {
        icons: <MdPodcasts size="24px" className='cursor-pointer' />,
        title: "Podcasts"
    },
    {
        icons: <IoLogoYoutube size="24px" className='cursor-pointer' />,
        title: "Youtube Premium"
    },
    {
        icons: <SiYoutubemusic size="24px" className='cursor-pointer' />,
        title: "Youtube Music"
    },
    {
        icons: <TbBrandYoutubeKids size="24px" className='cursor-pointer' />,
        title: "Youtube Kids"
    },
    {
        icons: <CiSettings size="24px" className='cursor-pointer' />,
        title: "Settings"
    },
    {
        icons: <MdOutlineFlag size="24px" className='cursor-pointer' />,
        title: "Report history"
    }, {
        icons: <IoIosHelpCircleOutline size="24px" className='cursor-pointer' />,
        title: "Help"
    }, {
        icons: <MdOutlineFeedback size="24px" className='cursor-pointer'/>,
        title: "Send feedback"
    },
]

const Sidebar = () => {
const open = useSelector((store)=>store.app.open);

    return (
        <div className={`relative left-0 ${open? "w-[20%]" : "w-[6%]" }  p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-3 ml-2 '>
                            {item.icons}
                            <p className={`ml-5 ${open ? "" : 'hidden' } `}>{item.title}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Sidebar