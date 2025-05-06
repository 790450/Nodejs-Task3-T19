import React, { useState } from 'react'
import '../App.css'
import api from '../services/api'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('/auth/login', {
      email, 
      password ,
    }).then(response =>{
      if(response.data.status){
        navigate('/')
      } 
    }).catch(err => {
      console.log(err)
    })
  };
  return (
    <div className="sign-up-container">

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder='******'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="Submit">Login</button>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>Don't Have Account? <Link to="/signup">Sign up</Link></p>
      </form></div>
  )
}

export default Login