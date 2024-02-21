import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      {/* <div className='log-container'>
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
      </div> */}

      {/* <div className='login-cont'>
        <div className='box-log'>
          <div className='top'>
            <h3>Login <span style={{ color: 'red' }}> T</span>ask<span style={{ color: 'red' }}>S</span>ync</h3>
          </div>


          <div className='top2'>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username or Email" />

            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />

            </div>
            <div className='log-btn-cont'>
              <button className='log-btn'>Login</button>
            </div>
          </div>


        </div>
      </div> */}


      <div className="form-cont">
        <h2>Login to <span style={{ color: 'red' }}> T</span>ask<span style={{ color: 'red' }}>S</span>ync</h2>
        <form>
          <label htmlFor="name">Email/Username:</label>
          <input placeholder='Username or Email' type="email" id="email" name="email" />

          <label htmlFor="name">Type Of account</label>
          <select id="account-type">
            <option value="Assigner">Assigner</option>
            <option value="Employee">Employee</option>
          </select>

          <label htmlFor="email">Password:</label>
          <input placeholder="Password" type="password" id="password" name="password" />


          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
