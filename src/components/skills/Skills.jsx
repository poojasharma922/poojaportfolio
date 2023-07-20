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
      "1)NodeJs 2)MongoDb 3)Express",
  },
  {
    id: 3,
    image: Image3,
    title: "TOOLS",
    description:
      `1)VS Code 2)MS Word 3)MS Excel`,
  },
];

const Skills = () => {
  return (
    <section className="services container section" id='skills'>

      <h2 className="section__title threedtitle" style={{textAlign: 'center',}}>SKILLS</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description})=>{
          return(
            <div className='services__card skillcard' key={id}>
              <img src={image} alt="" className="services__img" style={{width:'90px' , height: "90px" , borderRadius: '70px'}}/>
              <h3 className="services__title" style={{fontFamily: 'inherit', fontWeight: 'bold', fontSize: '22px' , color: ' black'}}>{title}</h3>
              <p className="services__description" style={{color: 'black', fontSize: '17px' ,display: 'flex', wordSpacing : '5px', padding: '2px'}}>{description}</p>

              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
