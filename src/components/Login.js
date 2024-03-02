import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import login from '../controller/employee/login';
import common from '../helpers/common'
import { loginschema, regschema } from '../validation/emp/empschema';
const Login = () => {


  const [user, setuser] = useState({
    email: "",
    //account_type: "Assigner",
    password: "",
  })



  const [check, setcheck] = useState(false)

  const setprofile = common(setuser)



  const handelsubmit = () => {


    const { error } = loginschema.validate(user)
    if (error) {
      alert(error.message)
      return
    }
    login(user).then(response => {
      if (response.toString() == "true") {
        alert("Logged in!")
        //toast.success("Logged in!")
        window.location.href = "/dashboard"
      } else {
        alert("Invalid Email or Password")
        //toast.error("Invalid Email or Password")
      }
    }).catch(error => {
      console.log("Error is ", error)
      alert("Error")
      //toast.error(error)
    })
  }

  console.log("checkbox state:- ", check)
  console.log("user data is :-", user)
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
        <form onSubmit={handelsubmit}>
          <label htmlFor="name">Email/Username:</label>
          <input placeholder='Username or Email' type="email" value={user.email} onChange={setprofile("email")} id="email" name="email" />

          <label htmlFor="name">Type Of account</label>
          <select id="account-type">
            <option value="Assigner">Assigner</option>
            <option value="Employee">Employee</option>
          </select>

          <label htmlFor="email">Password:</label>
          <input placeholder="Password" value={user.password} onChange={setprofile("password")} type="password" id="password" name="password" />


        </form>
        <button onClick={handelsubmit}>Submit</button>
      </div>
    </>
  )
}

export default Login
