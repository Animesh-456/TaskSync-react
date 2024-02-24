// App.js
import React, { useEffect, useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Dashboard from './components/Dash';
import Assign from './components/Assign';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



function App() {

  const [loc, setloc] = useState();


  useEffect(() => {
    setloc(window.location.pathname)
  }, [window.location.pathname])

  const excludeNavRoutes = ['/dashboard', '/login', '/signup', '/assign','/task'];
  const excludeSidebarRoutes = ['/login', '/signup', '/'];
  return (
    <>
      <div className="app">
        {excludeNavRoutes.includes(loc) ? null : <Nav />}
        {/* {excludeSidebarRoutes.includes(window.location.pathname) ? null : <Sidebar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/assign' element={<Assign />} />
          <Route path='/task' element={<Tasks />} />
        </Routes>

      </div>

    </>
  );
}

export default App;
