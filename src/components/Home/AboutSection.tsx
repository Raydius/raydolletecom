import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <p>
          Hi, I'm Ray Dollete, a professional developer with a passion for creating beautiful and functional web applications.
          With experience in React, TypeScript, and modern frontend frameworks, I strive to deliver high-quality, user-friendly interfaces.
          I am dedicated to staying current with the latest technologies and best practices in the industry.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;