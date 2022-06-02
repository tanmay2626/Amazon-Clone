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
import { useStateValue } from '../state/StateProvider'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const [{ cart, user }, dispatch] = useStateValue()

  const authStatus = () =>{
    (user) &&  dispatch({
      type: 'SET_USER',
      user: null
    })
  }
  
  return (
    <Box className='navigation' sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#131921', padding: 0 }} className='navigation'  position="static">
        <Toolbar>
        <Link to='/'>
         <img src='https://github.com/tanmay2626/images/blob/main/amazon-logo-removebg-preview.png?raw=true' alt='logo' />
        </Link>
         <Box sx={{ marginLeft: 5 , width: 65+'%'}}>
         {/* Todo - fix buttons for 80% zoom */}
         <InputBase sx={{ padding:1, backgroundColor: 'white' , borderRadius: '3px 0 0 3px' , width: 90+'%', height: 35+'px' }} />
         <IconButton sx={{ backgroundColor: '#E48900' ,marginTop: -0.4,padding: 0 ,borderRadius: '0 3px 3px 0' }}>
           <SearchIcon sx={{  color: 'black', padding: 0.35}} />
         </IconButton>
         </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex', width: 30+'%', height: 50+'px' } }}>
            <Link className='link' to={(!user)?'/signin':'/'}>
            <Button onClick={authStatus} sx={{ textTransform: 'none' , overflow: 'hidden', marginTop: -4}} variant="text"   color="inherit">
            {(!user)?(<p><span>Hello Guest</span>, Sign in</p>):(<p><span>Hello {user.username}</span>, Sign Out</p>)}
            </Button>
            </Link>
            <Link className='link' to='/orders'>
            <Button  sx={{ textTransform: 'none',marginTop: -4 }} variant="text"  color="inherit">
            <p><span>Returns </span>& Orders</p>
            </Button>
            </Link>
            <Link className='link' to='/cart'>
            <IconButton  sx={{ marginTop: -5 }} variant="text" color="inherit">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 35, color: '#DDDDDD' }} />
            <h4>{cart?.length}</h4>
            </IconButton>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation