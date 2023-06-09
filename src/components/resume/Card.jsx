import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline__item'>
      <i className={props.icon}></i>
      <h3 className="timeline__title">{props.title}</h3>
      <span className="timeline__date">{props.year}</span>
      <h6 className="timeline__title">{props.marks}</h6>
      <p className="timeline__text">{props.desc}</p>
      
      
    </div>
  )
}

export default Card
