import React from 'react'
import './skills.css';
import Image1 from '../../assets/service-4.jpg';
import Image2 from '../../assets/service-5.jpg';
import Image3 from '../../assets/service-6.jpg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "SKILLS",
    description :"1)HTML 2)CSS/SASS 3)Bootstrap  4)JavaScript  5)React ",
  },
  {
    id: 2,
    image: Image2,
    title: "FAMILIAR",
    description:
      "1) SQL 2)NodeJs 3)MongoDb 4)Express",
  },
  {
    id: 3,
    image: Image3,
    title: "TOOLS",
    description:
      "1)VS Code 2)MS Word 3)MS Excel",
  },
];

const Skills = () => {
  return (
    <section className="services container section" id='skills'>
      <h2 className="section__title" style={{textAlign: 'center'}}>Skills</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description})=>{
          return(
            <div className='services__card' key={id}>
              <img src={image} alt="" className="services__img" style={{width:'80px' , height: "80px" , borderRadius: '50px'}}/>
              <h3 className="services__title">{title}</h3>
              <p className="services__description" >{description}</p>

              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
