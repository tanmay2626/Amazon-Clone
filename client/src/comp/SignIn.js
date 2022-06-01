import React,{ useState } from 'react'
import '../css/Auth.css'
import { Container } from '@mui/material'
import { Button, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../state/StateProvider'
import axios from 'axios'

const SignIn = props => {
    // eslint-disable-next-line no-empty-pattern
    const [{},dispatch] = useStateValue()
    
  const navigate = useNavigate()
  const [ credentials, setCredentials ] = useState({
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

    const email = credentials.email
    const password = credentials.password
    
    axios.post('/signin',{ email, password })
    .then(res=>{
      if(!res.data.status){
        setError({
          status: res.data.status,
          message: res.data.message,
        });
      }else{
        dispatch({
          type: 'SET_USER',
          user: res.data.user
        })
        navigate('/')
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
           <span>SignIn</span>
           <div className='form-wrap'>
           <form onSubmit={HandleSubmit}>
               <label>Email</label><br />
               <input  value={credentials.email} onChange={HandleCredentials} name='email' type='email' /><br />
               <label>Password</label><br />
               <input  value={credentials.password} onChange={HandleCredentials} name='password' type='password' />
               <Button variant="contained" size='small' type='submit'
            sx={{ color: 'black', textTransform: 'none',  width : 100+'%' ,
            backgroundColor: '#FBCB0A', marginTop: 2 , ":hover":{ backgroundColor: '#FAC213' }}}>
                Submit
            </Button>
            { (!error.status)&& <p>{error.message}</p>}
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