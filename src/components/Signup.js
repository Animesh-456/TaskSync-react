import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='log-container2'>
            <div className='form-box'>
                <div className="top">
                    <h2>Register to <span style={{ color: 'red' }}> T</span>ask<span style={{ color: 'red' }}>S</span>ync</h2>
                    {/* <h3>Signup to TaskSync</h3> */}
                </div>

                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Username or Email" />
                    <i className="bx bx-user"></i>
                </div>

                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" />
                    <i className="bx bx-user"></i>
                </div>


                <div className="input-box">
                    {/* <label for="cars">Choose a car:</label> */}

                    <select id="cars">
                        <option value="Assigner">Assigner</option>
                        <option value="Employee">Employee</option>
                    </select>
                </div>

                <div className='login-submit-container'>
                    <button className='login-btn'>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
