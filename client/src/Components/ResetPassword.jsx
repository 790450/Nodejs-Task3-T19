import React, { useState } from 'react'
import '../App.css'
import api from '../services/api';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const {token} = useParams()
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      api.post(`/auth/reset-password/${token}`, {
        password, 
      }).then(response =>{
        if(response.data.status){
           navigate('/login')
        } 
        console.log(response.data) 
      }).catch(err => {
        console.log(err)
      })
    };
  return (
    <div className="sign-up-container">
    
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
          
        <label htmlFor="password"> New Password</label>
        <input
          type="password"
          placeholder='******'
          onChange={(e) => setPassword(e.target.value)}
        />

    
          
    
            <button type="Submit">Submit</button>
            
          </form>
        </div>
  )
}

export default ResetPassword