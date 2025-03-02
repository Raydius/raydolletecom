import staticCopy from '../staticCopy.json';
import './Pages.css';

const TechPage = () => {
  return (
    <section className="features" id="tech">
      <h2>Technology</h2>
      <div className="feature-grid">
        {staticCopy.features.cards.map((card, index) => (
          <div key={index} className="feature-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechPage;