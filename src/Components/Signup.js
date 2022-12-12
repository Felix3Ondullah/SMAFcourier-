import React, { useState } from "react";
// import {useNavigate} from "react-router-dom";
import "./Signup.css"
function Signup(onLogin) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
    }})
      // navigate('/login')
  }
  return (
    <div className="signup-content">
        <div className ="signup">
          <h1>Sign Up for Free</h1>
          <form className='signup-form'
           onSubmit={handleSubmit}
           >
          <div class="top-row">
            <div class="field-wrap">
            <label>
                User Name<span class="req">*</span>
              </label>
              <input type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
              required
               autoComplete="off"
               />
            </div>
            <div class="field-wrap">
              <label>
                Email Address<span class="req">*</span>
              </label>
              <input
                 type="email"
                 value={email}
               onChange={(e) => setEmail(e.target.value)}
                required
               autoComplete="off"
              />
            </div>
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autocomplete="off"
             />
          </div>
          <div class="field-wrap">
            <label>
              Confirm Password<span class="req">*</span>
            </label>
            <input
             type="password"
             value={passwordConfirmation}
             onChange={(e) => setPasswordConfirmation(e.target.value)}
             autoComplete="current-password"
            />
          </div>
          <div className='signup-btn'>
            <button> Get Started</button>
          </div>
          </div>
          </form>
         </div>
         </div>
  )
}
export default Signup