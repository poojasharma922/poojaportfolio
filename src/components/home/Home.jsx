import React from 'react'
import './home.css';
import Me from '../../assets/meabout.png';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
       <div className="intro">
        <img src={Me} alt="" className="home__img" style={{height: '200px', borderRadius: '30px'}}/>
        <h1 className="home__name">Pooja</h1>
        <span className="home__education">I'm a Front-End developer</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        
       </div>
       <Shapes/>
    </section>
  )
}

export default Home
