import React, { Component } from 'react';
import instaLogo from '../images/insta-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
// import VideoUpload from './VideoUpload';
export default class Leftsidebar extends Component {
    constructor(props){
        super(props);
        this.state={
            showDropdown:false,
        }
    }
    render() {
        return (
            <div className='left-sidebar'>
                <div className='padding20px'>
                    <div className='instagram-logo-sidebar'>
                        <img src={instaLogo} alt='' />
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <HomeIcon/><p className='left-sidebar-button'>Home</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <SearchIcon/><p className='left-sidebar-button'>Search</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <ExploreIcon/><p className='left-sidebar-button'>Explore</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <SlideshowIcon/><p className='left-sidebar-button'>Reels</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <SendIcon/><p className='left-sidebar-button'>Message</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <FavoriteBorderIcon/><p className='left-sidebar-button'>Notification</p>
                    </div>
                    <div className='home left-sidebar-buttons' onClick={()=>this.props.showModal()}>
                        <AddCircleOutlineIcon/><p className='left-sidebar-button'>Create</p>
                    </div>
                    <div className='home left-sidebar-buttons'>
                        <AccountCircleIcon/><p className='left-sidebar-button'>Profile</p>
                    </div>
                    <div className='left-sidebar-more left-sidebar-buttons' onClick={()=>this.setState({showDropdown:!this.state.showDropdown})}>
                        <MenuIcon/><p className='left-sidebar-button'>More</p>
                        {this.state.showDropdown && <div className='more-dropdown'>
                            <ul>
                                <li>Switch Account</li>
                                <li onClick={()=>this.props.logOut()}>Log out</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
