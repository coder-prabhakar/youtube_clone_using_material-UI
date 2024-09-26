import React from 'react'
import './Header.css'

// import icon from Material UI
import {
    Menu,
    YouTube,
    VideoCall,
    NotificationsNone,
    AccountCircle,
} from '@mui/icons-material';

import {
    Box,
    Toolbar,
    IconButton,
    Badge,
} from '@mui/material';


// import searchBar from ant design
import { Input } from 'antd';
const { Search } = Input;
const onSearch = (value) => console.log(value);


function Header() {
    return (
        <Toolbar 
        component="header"
        sx={{
            width: '100%',
            position:'fixed',
            top:'0',
            left:'0',
            backgroundColor:'white',
            zIndex:'100',
        }}
        >

            {/* Menu Button */}
            <IconButton size="large" color="inherit">
                <Menu/>
            </IconButton>

            {/* Youtube Logo */}
            <Toolbar sx={{ marginLeft: '-12px', cursor: 'pointer' }}>
                <YouTube sx={{ color: '#FF0000',  fontSize: 35  }}/>
                
                <Badge badgeContent='IN'>
                    <h1 className='yt-text'>
                        YouTube
                    </h1>
                </Badge>
            </Toolbar>

            <Box sx={{ flexGrow: 1 }} />

            {/* Search Bar */}
            <Search
                placeholder="Search"
                allowClear
                onSearch={onSearch}
                size="large"
                style={{
                    width: 400,
                }}
            />

            <Box sx={{ flexGrow: 1 }} />

            {/* Upload, Notification, and Upload Icon */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large"  color="inherit">
                    <VideoCall/>
                </IconButton>

                <IconButton size="large"  color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsNone/>
                    </Badge>
                </IconButton>

                <IconButton>
                    <AccountCircle sx={{ fontSize: 35 }}/>
                </IconButton>
            </Box>

        </Toolbar>
    );
}

export default Header;