import React, { useState } from 'react'
import '../css/Auth.css'
import { Container } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = props => {
  const navigate = useNavigate()
  const [ credentials, setCredentials ] = useState({
    username : '',
    email: '',
    password: '',
  })
  const [ error, setError ] = useState({
    status: true,
    message: '',
  })

  const HandleCredentials = (e)=>{
    const { value , name } = e.target

    setCredentials(prev=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const HandleSubmit = (e) =>{
    e.preventDefault()

    const username = credentials.username
    const email = credentials.email
    const password = credentials.password
    
    axios.post('/register_user',{ username, email, password })
    .then(res=>{
      setError({
        status: res.data.status,
        message: res.data.message,
      })
      if(res.data.status){
        navigate('/signin')
      }
    })

  }

  return (
    <Container className='signin'>
        <div className='signin-box'>
          <div className='logo'>
           <img alt='logo' src='https://github.com/tanmay2626/images/blob/main/download__1_-removebg-preview.png?raw=true' />
          </div>
          <div className='signin-form'>
           <span>Create Account</span>
           <div className='form-wrap'>
           <form onSubmit={HandleSubmit}>
               <label>Your Name</label><br />
               <input value={credentials.username} onChange={HandleCredentials} name='username' type='text'  /><br />
               <label>Email</label><br />
               <input value={credentials.email} onChange={HandleCredentials} name='email' type='email' /><br />
               <label>Password</label><br />
               <input value={credentials.password} onChange={HandleCredentials} name='password' type='password' />
               <Button variant="contained" size='small' type='submit'
            sx={{ color: 'black', textTransform: 'none',  width : 100+'%' ,
            backgroundColor: '#FBCB0A', marginTop: 2 , ":hover":{ backgroundColor: '#FAC213' }}}>
                Register
            </Button>
            { (!error.status)&& <p>{error.message}</p> }
           </form>
           </div>
          </div>
        </div>
    </Container>
  )
}

export default Register