import React from 'react'
import staticCopy from '../staticCopy.json'

const ServicesPage = () => {
  return (
    <section className="services-page" id="services">
      <div className="services-content">
        <h2>{staticCopy.servicesPage.title}</h2>
        <p>{staticCopy.servicesPage.description}</p>
      </div>
    </section>
  )
}

export default ServicesPage