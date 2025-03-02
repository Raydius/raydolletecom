import React from 'react';

const PortfolioSection: React.FC = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <h2>My Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>A brief description of project 1.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>A brief description of project 2.</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>A brief description of project 3.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;