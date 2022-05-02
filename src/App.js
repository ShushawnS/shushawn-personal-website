import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experieneces from './components/experiences/Experiences';
import Contact from './components/contact/Contact';

function App() {
  return (

    <div className="app">

      <NavBar />  

      <div className="sections">
        
        <LandingPage /> 
        <About />  
        {/*
        <Projects />  
        <Experieneces />  
        <Contact />  
        */}

      </div>

    </div>

  );
}

export default App;
