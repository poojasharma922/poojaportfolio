import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <div className="main23">
      <h2 className="section__title threedtitle" style={{textAlign: 'center'}}>GET IN TOUCH</h2>
</div>
      <div className="contact__container grid" >
        <div className="contact__info" >
         
          <h3 className="contact__title">Let's talk about Everything</h3>
<div className="cont">
          <section className="animation">
          <div className="first"><p className='contact__details'>Send me an email 👋</p>
</div>
<div className="second"> <p className="contact_details">Let's collaborate</p> </div>


          </section>
          </div>
        </div>

        <form action="mailto:pooja27sharma30@gmail.com"  className="contact__form">
          
            <button className="emailbtn">Email Me</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
