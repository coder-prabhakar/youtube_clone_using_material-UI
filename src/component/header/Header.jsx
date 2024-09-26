import React from 'react'

// import icon from Material UI
import {
    Menu,
    YouTube,
    VideoCall,
    NotificationsNone,
    AccountCircle,
} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

import {
    Box,
    Toolbar,
    IconButton,
    Badge,
    Typography 
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
            <IconButton size="large" color="inherit"  sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Menu/>
            </IconButton>

            {/* Youtube Logo */}
            <Toolbar sx={{ marginLeft: '-12px', cursor: 'pointer' }}>
                <YouTube sx={{ color: '#FF0000',  fontSize: {xs: 30, sm: 35}  }}/>
                
                <Badge badgeContent='IN'>
                    <Typography 
                    variant="h1"
                    sx={{
                        all: 'unset',
                        fontSize: {xs:'23px', md:'25px'},
                        fontWeight: 'bolder',
                        letterSpacing: '-1px'
                    }}
                    >
                        YouTube
                    </Typography>
                </Badge>
            </Toolbar>

            <Box sx={{ flexGrow: 1 }} />

            {/* Mobile Search Bar */}
            <IconButton size="large" sx={{ display: { xs: 'inherit', sm: 'none' } }}>
                <SearchIcon />
            </IconButton>
            {/* Desktop Search Bar */}
            <Box sx={{width: {xs: '300px', md: '400px'}, display: { xs: 'none', sm: 'inherit', md: 'inherit'}}}>
                <Search
                    placeholder="Search"
                    allowClear
                    onSearch={onSearch}
                    size="large"
                />
            </Box>
            

            <Box sx={{ flexGrow: {xs: 0, md: 1} }} />

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