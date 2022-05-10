import React from 'react'
import './App.css'

import {Home, AboutMe, Contact, Projects, Navbar, Body} from './components'

const App = () => {
  return (
    <div className='App'>
        <Body />
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  );
}

export default App
