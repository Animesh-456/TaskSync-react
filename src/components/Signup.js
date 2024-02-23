import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (


        <div className="form-cont2">
            <h2>Register to <span style={{ color: 'red' }}> T</span>ask<span style={{ color: 'red' }}>S</span>ync</h2>
            <form>
                <div className='f-l-name'>
                    {/* <div> */}
                        <div className='f-l-child'>
                            <label htmlFor="name">First Name</label>
                            <input placeholder='First name' type="text" id="fname" name="fname" />
                        </div>
                    {/* </div> */}
                    {/* <div> */}
                        <div className='f-l-child'>
                            <label htmlFor="name">Last Name</label>
                            <input placeholder='Last Name' type="text" id="lname" name="lname" />
                        </div>
                    {/* </div> */}
                </div>
                <label htmlFor="name">Email</label>
                <input placeholder='Email' type="email" id="email" name="email" />

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
    )
}

export default Signup
