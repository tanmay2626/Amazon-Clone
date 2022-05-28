import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../css/Navigation.css'
import { InputBase } from '@mui/material';



const Navigation = () => {

  return (
    <Box className='navigation' sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#131921', padding: 0 }} className='navigation'  position="static">
        <Toolbar>
         <img src='https://github.com/tanmay2626/images/blob/main/amazon-logo-removebg-preview.png?raw=true' alt='logo' />
         
         <Box sx={{ marginLeft: 5 , width: 65+'%'}}>
         <InputBase sx={{ padding:1, backgroundColor: 'white' , borderRadius: '3px 0 0 3px' , width: 90+'%', height: 35+'px' }} />
         <IconButton sx={{ backgroundColor: '#E48900' ,marginTop: -0.4,padding: 0 ,borderRadius: '0 3px 3px 0' }}>
           <SearchIcon sx={{  color: 'black', padding: 0.35}} />
         </IconButton>
         </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex', width: 30+'%', height: 50+'px' } }}>
            <Button sx={{ textTransform: 'none' , overflow: 'hidden'}} variant="text"   color="inherit">
            <p><span>Hello Guest</span>, Sign in</p>
            </Button>
            <Button sx={{ textTransform: 'none' }} variant="text"  color="inherit">
            <p><span>Returns </span>& Orders</p>
            </Button>
            <IconButton sx={{ textTransform: 'none' }} variant="text" color="inherit">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 35, color: '#DDDDDD' }} />
            <p>Cart</p>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation