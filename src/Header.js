import React from 'react'
import './Header.css'
import linkedin from './linkedin.png';
import profile from './profile.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
//import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useSelect } from '@mui/base';
    
function Header(){
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };
    return (
            <div className="header">
            <div className='header__left'>
                <img src={linkedin} className="" alt="" />
                <div className='header__search'>
                    { <SearchIcon /> }
                    <input type="text"/>
                </div>
            </div>
            <div className='header__right'>  
         <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
            </div>
            </div>
    ) 
}
export default Header 