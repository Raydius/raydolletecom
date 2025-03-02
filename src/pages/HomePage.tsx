import staticCopy from '../staticCopy.json';
import './Pages.css';

const HomePage = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>{staticCopy.hero.title}</h2>
        <p>{staticCopy.hero.description}</p>
        <button className="cta-button">{staticCopy.hero.button}</button>
      </div>
    </section>
  );
};

export default HomePage;