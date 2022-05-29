import React from 'react'
import '../css/Auth.css'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

const Register = props => {
  return (
    <Container className='signin'>
        <div className='signin-box'>
          <div className='logo'>
           <img alt='logo' src='https://github.com/tanmay2626/images/blob/main/download__1_-removebg-preview.png?raw=true' />
          </div>
          <div className='signin-form'>
           <span>Create Account</span>
           <div className='form-wrap'>
           <form>
               <label>Your Name</label><br />
               <input type='text'  /><br />
               <label>Email</label><br />
               <input type='email' /><br />
               <label>Password</label><br />
               <input type='password' />
               <Button variant="contained" size='small'
            sx={{ color: 'black', textTransform: 'none',  width : 100+'%' ,
            backgroundColor: '#FBCB0A', marginTop: 2 , ":hover":{ backgroundColor: '#FAC213' }}}>
                Register
            </Button>
           </form>
           </div>
          </div>
        </div>
    </Container>
  )
}

export default Register