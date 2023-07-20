import React from 'react'
import './home.css';
import Me from '../../assets/meabout.png';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
       <div className="intro">
        <div className="box">
        <div className="imgBox">
        <img src={Me} alt="" className="home__img" style={{height: '200px', borderRadius: '30px'}}/>
        </div>
        <div className="content">
        <h1 className="home__name" style={{color: 'black', fontFamily: 'cursive', marginBottom: '6px', fontSize: '25px'}}>POOJA</h1>
        <span className="home__education" style={{color: 'black', fontSize: '15px'}}>I'm a Front-End developer</span>
        </div>
        </div>
        <HeaderSocials/>
{/* <button> */}
        <a href="#contact" className="btn hireme">Hire Me</a>
{/* </button> */}
        
       </div>
       <Shapes/>
    </section>
  )
}

export default Home
