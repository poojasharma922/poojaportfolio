import './App.css';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonials/Testmonials';
import Contact from './components/contact/Contact';


function App() {
  
  return (
    <>
    <Sidebar/>
    <main className="main">
      
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Testimonial/>
      
      <Contact/>

    </main>
    </>
  );
}

export default App;
