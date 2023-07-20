import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline__item'>
      <i className={props.icon}></i>
      <h3 className="timeline__title" style={{color: 'black'}}>{props.title}</h3>
      <span className="timeline__date" style={{color: 'black', fontFamily: 'cursive', fontWeight: 'bold', fontSize:"12px"}}>{props.year}</span>
      <h6 className="timeline__title" style={{color: 'black' , fontFamily: 'initial', fontSize:'18px'}}>{props.marks}</h6>
      <p className="timeline__text" style={{color: 'black'}}>{props.desc}</p>
      
      
    </div>
  )
}

export default Card
