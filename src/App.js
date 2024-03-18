// App.js
import React, { useEffect, useState, Suspense } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'jotai'


import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';


//import Dashboard from './components/Dash';




import Assign from './components/Assign';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Profile from './components/Profile';
import AddTask from './components/AddTask';
import AssignTask from './components/AssignTask';
import ProtectedRoutes from './ProtectedRoutes';
import Fallback from './components/Fallback';
import { Spinner } from 'react-bootstrap';

const Dashboard = React.lazy(() => import("./components/Dash"));



function App() {

  const [loc, setloc] = useState();


  useEffect(() => {
    setloc(window.location.pathname)
  }, [window.location.pathname])

  const excludeNavRoutes = ['/dashboard', '/login', '/signup', '/assign', '/task', '/profile', '/addtask', '/assigntask', '/about'];
  const excludeSidebarRoutes = ['/login', '/signup', '/'];
  return (
    <>
      <div className="app">
        <Provider>
          <Toaster />
          {excludeNavRoutes.includes(loc) ? null : <Nav />}
          {/* {excludeSidebarRoutes.includes(window.location.pathname) ? null : <Sidebar />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


            <Route element={<ProtectedRoutes />}>

              <Route path='/dashboard' element={
                <React.Suspense fallback={<Fallback />}>
                  <Dashboard />
                </React.Suspense>
              } />


              <Route path='/assign' element={<Assign />} />
              <Route path='/task' element={<Tasks />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/addtask' element={<AddTask />} />
              <Route path='/assigntask' element={<AssignTask />} />
            </Route>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          </Routes>
        </Provider>

      </div >

    </>
  );
}

export default App;
