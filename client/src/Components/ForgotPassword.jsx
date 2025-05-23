import React, { useState } from 'react'
import '../App.css'
import api from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      api.post('/auth/forgot-password', { 
        email, 
      }).then(response =>{
        if(response.data.status){
            alert("Check your Email for reset Password link")
          navigate('/login')
        }
        
      }).catch(err => {
        console.log(err)
      })
    };
  return (
    <div className="sign-up-container">
    
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
          
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
    
          
    
            <button type="Submit">Submit</button>
            
          </form>
        </div>
  )
}

export default ForgotPassword