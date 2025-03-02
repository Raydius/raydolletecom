import React from 'react'
import staticCopy from '../staticCopy.json'

const AboutPage = () => {
  return (
    <section className="about-page" id="about">
      <div className="about-content">
        <h2>{staticCopy.aboutPage.title}</h2>
        <p>{staticCopy.aboutPage.description}</p>
      </div>
    </section>
  )
}

export default AboutPage