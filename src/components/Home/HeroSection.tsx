import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Ray Dollete</h1>
        <p>Professional Developer | Designer | Creator</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;