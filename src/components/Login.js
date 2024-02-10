import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='log-container'>
        <div className='form-box'>
          <div className="top">
            <h2>Don't have an account? <Link to="/signup" onclick="register()">Sign Up</Link></h2>
            <h3>Login</h3>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username or Email" />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-user"></i>
          </div>

          <div className='login-submit-container'>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
