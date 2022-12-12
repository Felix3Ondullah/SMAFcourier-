import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    })

    return(
        <div className='log-in-container'>
        <div className='box'>
         <form className='login-form' onSubmit={handleSubmit}>
          <div className='field text-black'>
              <input id='username' 
               type='text'
               value={username}
               onChange={(e) => setUsername(e.target.value)}
              required
               autoComplete="off"
              placeholder='Username'
            
              />
              <label for="username">Username</label>
          </div>    
          <div className='field text-black'>  
              <input 
              id='password' 
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              placeholder='password'
              />

              <label for="password">Password</label>
          </div>
          
             <button type="submit" className='login-button' title='login' > Login</button>

          <div className='separator'>
            <div className='line'></div>
                    <p>OR</p>
            <div className='line'></div>        
          </div>
          <div className='other'>
            <a href='#' className='forgot-password'>Forgot password</a>
         </div>
         </form>
          <div className='boxacc'>
            <p>Don't have an account?
              <NavLink to ='/signup' className='signup'>Sign Up</NavLink> 
              </p>
          </div>  
        </div>               
        </div>
    )
}

export default Login;



