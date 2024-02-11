// Home.js
import React from 'react';
import task from '../public/img/task.svg'
import textAtom from '../jotai/atom';
import { atom, useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const [atomValue] = useAtom(textAtom)

  console.log("atomvalue is", atomValue)
  const handleSignup = () => {
    navigate('/signup');
  }
  return (
    <div className="container">
      <div className="box1">
        <h1>Efficiently Manage Your Team's Tasks with
          <span style={{ color: 'red' }}> T</span>ask<span style={{ color: 'red' }}>S</span>ync
        </h1>
        <p>Our task assigner web application simplifies task management by helping you assign, track, and organize
          your team's tasks in one centralized location</p>
        <p> Sign up now to streamline your team's workflow and increase productivity!</p>


        <div className="btn-container">
          <button className="signup-btn" onClick={handleSignup}>SignUp</button>
          {/* <Link className="signup-btn" style={{ textDecoration: 'none', color: '#fff' }} to='/signup'>SignUp</Link> */}
        </div>


      </div>
      <div className="box2">
        {/* <img src='../task.svg' alt="task"> */}
        <img src={task}></img>
      </div>
    </div>
  );
}

export default Home;
