import React, { useState } from 'react';
import'./portfolio.css';
import Menu from './Menu';
// import { Link } from 'react-router-dom';

const Portfolio = () => {

  const [items, setItems] =useState(Menu);
  const filterItem = (categoryItem) =>{
    const updatedItems = Menu.filter((curlElem) =>{
      return curlElem.category ===categoryItem;
    });

    setItems(updatedItems);
  }

  const compItem = (compItem) =>{
    const updatedItems = Menu.filter((curlElem) =>{
      return curlElem.comp ===compItem;
    });

    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title threedtitle" style={{textAlign: 'center'}}>PROJECTS</h2>

      <div className="work__filters">
        <span className="work__item" onClick={()=> setItems(Menu)}>All</span>
        <span className="work__item" onClick={()=> filterItem("HTML/CSS/JS")}>HTML/CSS/JS</span>
        {/* <span className="work__item" onClick={()=> filterItem("React")}>React</span> */}
        <span className="work__item" onClick={()=> filterItem("ReactJS/Mern")}>ReactJS/Mern</span>
        <span className="work__item" onClick={()=> compItem("yes")}>Completed</span>
        <span className="work__item" onClick={()=> compItem("no")}>On Going</span>

      </div>

      <div className="work__container grid">
        {items.map((elem)=>{
          const{id, image, title, category,webLINK} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail" style={{height:'210px'}}>
                <img src={image} alt="" className="work__img"  style={{height:'210px'}}/>
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              
              <a href={webLINK} className="work__button" target='_blank' rel='noreferrer'>
                <i className="icon-link work__button-icon"> </i>
               
                </a>
                
              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
