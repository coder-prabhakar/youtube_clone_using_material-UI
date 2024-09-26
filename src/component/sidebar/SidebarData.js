// import Avatar from Material UI
import Avatar from '@mui/material/Avatar';

// React Icons
import { GoHome , GoHistory , GoVideo , GoLightBulb , GoTrophy } from "react-icons/go";
import { MdOutlineSubscriptions , MdOutlineSwitchAccount , MdOutlineWatchLater , MdOutlineLocalFireDepartment , MdPodcasts , MdOutlineFlag } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { RiShoppingBag4Line , RiFeedbackLine } from "react-icons/ri";
import { CiMusicNote1 } from "react-icons/ci";
import { PiFilmSlateDuotone , PiVinylRecord } from "react-icons/pi";
import { IoGameControllerOutline , IoNewspaperOutline , IoSettingsOutline } from "react-icons/io5";
import { SiYoutube , SiYoutubeshorts , SiYoutubestudio , SiYoutubemusic , SiYoutubekids } from "react-icons/si";
import { IoIosHelpCircleOutline } from "react-icons/io";

// Sidebar Item Data
export const itemData = [
    {divider: false, icon: <GoHome/> , text: 'Home' },
    {divider: false, icon: <SiYoutubeshorts/>, text: 'Shorts' },
    {divider: false, icon: <MdOutlineSubscriptions/>, text: 'Subscription' },
    {divider: true, text: 'You'},
    {divider: false, icon: <MdOutlineSwitchAccount/>, text: 'Your Channel' },
    {divider: false, icon: <GoHistory/>, text: 'History' },
    {divider: false, icon: <CgPlayList/>, text: 'Playlist' },
    {divider: false, icon: <GoVideo/>, text: 'Your Videos' },
    {divider: false, icon: <GoLightBulb/>, text: 'Your Courses' },
    {divider: false, icon: <MdOutlineWatchLater/>, text: 'Watch Later' },
    {divider: false, icon: <BiLike/>, text: 'Liked Videos' },
    {divider: true, text: 'Subscriptions'},
    {divider: false, icon: <Avatar alt="PewDiePie" color='primary' sx={{ width: 24, height: 24, bgcolor: 'green' }} />, text: 'PewDiePie' }, 
    {divider: false, icon: <Avatar alt="MrBeast" sx={{ width: 24, height: 24, bgcolor: 'red' }} />, text: 'MrBeast' }, 
    {divider: false, icon: <Avatar alt="Markiplier" sx={{ width: 24, height: 24, bgcolor: 'yellow' }} />, text: 'Markiplier' }, 
    {divider: false, icon: <Avatar alt="Jacksepticeye" sx={{ width: 24, height: 24, bgcolor: 'orange' }} />, text: 'Jacksepticeye' }, 
    {divider: false, icon: <Avatar alt="James Charles" sx={{ width: 24, height: 24, bgcolor: 'pink' }} />, text: 'James Charles' }, 
    {divider: false, icon: <Avatar alt="Dude Perfect" sx={{ width: 24, height: 24, bgcolor: 'blue' }} />, text: 'Dude Perfect' }, 
    {divider: false, icon: <Avatar alt="Nastya" sx={{ width: 24, height: 24, bgcolor: 'aqua' }} />, text: 'Nastya' },
    {divider: true, text: 'Explore'},
    {divider: false, icon: <MdOutlineLocalFireDepartment/>, text: 'Trending' },
    {divider: false, icon: <RiShoppingBag4Line/>, text: 'Shopping' },
    {divider: false, icon: <CiMusicNote1/>, text: 'Music' },
    {divider: false, icon: <PiFilmSlateDuotone/>, text: 'Music' },
    {divider: false, icon: <PiVinylRecord/>, text: 'Live' },
    {divider: false, icon: <IoGameControllerOutline/>, text: 'Gaming' },
    {divider: false, icon: <IoNewspaperOutline/>, text: 'News' },
    {divider: false, icon: <GoTrophy/>, text: 'Sports' },
    {divider: false, icon: <MdPodcasts/>, text: 'Podcasts' },
    {divider: true, text: 'More From Youtube'},
    {divider: false, icon: <SiYoutube style={{color:'var(--red)'}}/>, text: 'YouTube Premium' },
    {divider: false, icon: <SiYoutubeshorts style={{color:'var(--red)'}}/>, text: 'YouTube Shorts' },
    {divider: false, icon: <SiYoutubestudio style={{color:'var(--red)'}}/>, text: 'YouTube Studio' },
    {divider: false, icon: <SiYoutubemusic style={{color:'var(--red)'}}/>, text: 'YouTube Music' },
    {divider: false, icon: <SiYoutubekids style={{color:'var(--red)'}}/>, text: 'YouTube Kids' },
    {divider: true, text: ''},
    {divider: false, icon: <IoSettingsOutline/>, text: 'Settings' },
    {divider: false, icon: <MdOutlineFlag/>, text: 'Report history' },
    {divider: false, icon: <IoIosHelpCircleOutline/>, text: 'Help' },
    {divider: false, icon: <RiFeedbackLine/>, text: 'Send feedback' },
    {divider: true, text: ''},
]