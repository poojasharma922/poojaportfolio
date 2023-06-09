import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title" style={{textAlign: 'center'}}>Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about Everything</h3>
          <p className='contact__details'>Send me an email 👋</p>
        </div>

        <form action="mailto:pooja27sharma30@gmail.com"  className="contact__form">
          
            <button className="btn">Email Me</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
