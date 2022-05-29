import React from 'react'
import '../css/Auth.css'
import { Container } from '@mui/material'
import { Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const SignIn = props => {
  return (
    <Container className='signin'>
        <div className='signin-box'>
          <div className='logo'>
           <img alt='logo' src='https://github.com/tanmay2626/images/blob/main/download__1_-removebg-preview.png?raw=true' />
          </div>
          <div className='signin-form'>
           <span>SignIn</span>
           <div className='form-wrap'>
           <form>
               <label>Email</label><br />
               <input type='email' /><br />
               <label>Password</label><br />
               <input type='password' />
               <Button variant="contained" size='small'
            sx={{ color: 'black', textTransform: 'none',  width : 100+'%' ,
            backgroundColor: '#FBCB0A', marginTop: 2 , ":hover":{ backgroundColor: '#FAC213' }}}>
                Submit
            </Button>
           </form>
           </div>
          </div>
          <Divider sx={{ marginTop: 2, fontSize: 2, color: 'gray' }}>
            New to Amazon?
          </Divider>
          <Link className='link' to='/register'>
          <Button variant="contained" size='small'
            sx={{ color: 'black', textTransform: 'none',  width : 100+'%' ,
            backgroundColor: '#EEEEEE', marginTop: 2 , ":hover":{ backgroundColor: '#EFEFEF' }}}>
               Create your Amazon account
            </Button>
          </Link>
        </div>
    </Container>
  )
}

export default SignIn