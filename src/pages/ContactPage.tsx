import React from 'react'
import staticCopy from '../staticCopy.json'

const ContactPage = () => {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-content">
        <h2>{staticCopy.contactPage.title}</h2>
        <p>{staticCopy.contactPage.description}</p>
      </div>
    </section>
  )
}

export default ContactPage