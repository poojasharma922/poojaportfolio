import React from 'react'
import './about.css';
import Image from '../../assets/mail1.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about container section" id="about">
      
        <h2 className="section__title threedtitle " style={{textAlign: 'center'}}>ABOUT ME</h2>
      
      

      <div className="about__container grid">
        <div className="picabout" >
        <img src={Image} alt="" className="about__img pic1"  />
        {/* style={{height: '200px',borderRadius: '10px', marginBottom: '20px'}} */}
        </div>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            A highly organized and hardworking student pursuing Bachelor's degree seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings
             
            </p>
              <Link to="https://drive.google.com/file/d/1HC8cizgEB9ncamAgBjKT8xkl5OA7WfXN/view?usp=sharing" target='blank' className="btn cvbtn" >Get CV</Link>
              
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className='skills__name' style={{fontSize:"15px"}}>English</h3>
                <span className="skills__number ">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
              
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className='skills__name' style={{fontSize:"15px"}}>Hindi</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui"></span>
              </div>
                

            </div>

           
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
