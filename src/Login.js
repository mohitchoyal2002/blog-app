import React, { useState } from 'react'
import './Login.css'
import PersonIcon from '@mui/icons-material/Person';
import ErrorIcon from '@mui/icons-material/Error';
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux';


const Login = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(login({
      name:name,
      password: password,
      loggedIn: true
    }))
    isIncorrect()
  }

  const isIncorrect = ()=>{
    if(name !== 'ly277423@gmail.com' || password !== '12345'){
      const error = document.querySelector('.error')
      error.style.display = 'block'
      // console.log('Now Open')
    }
  }

  return (
    <>
    <div className='login__container'>
      <h2><PersonIcon sx={{ fontSize: 30 }} />Login From</h2>
      <h5 className="error"> <ErrorIcon sx={{ fontSize: 20 }}/> Incorrect Credentials</h5>
      <form method="post" onSubmit={handleLogin}>
        <input className = 'text-input'type="email"  name='email' placeholder='Enter Mail' value={name} onChange = {e=>setName(e.target.value)}required autoFocus/>
        <input className = 'text-input'type="password"  name='password' placeholder='Enter Password' value={password} onChange={e=>setPassword(e.target.value)} required/>
        <input className='sub__btn' type="submit" value="Login" />
      </form>
    </div>
    </>
  )
}

export default Login