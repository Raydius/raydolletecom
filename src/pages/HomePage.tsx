import React from 'react'
import staticCopy from '../staticCopy.json'

const HomePage = () => {
  return (
    <section className="home-page" id="home">
      <div className="home-content">
        <h2>{staticCopy.homePage.title}</h2>
        <p>{staticCopy.homePage.description}</p>
      </div>
    </section>
  )
}

export default HomePage