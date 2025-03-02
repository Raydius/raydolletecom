import './App.css'
import staticCopy from './staticCopy.json'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>{staticCopy.header.logo}</h1>
        </div>
        <nav className="nav">
          <ul>
            {Object.entries(staticCopy.header.nav).map(([key, value]) => (
              <li key={key}>
                <a href={`#${key}`}>{value}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h2>{staticCopy.hero.title}</h2>
            <p>{staticCopy.hero.description}</p>
            <button className="cta-button">{staticCopy.hero.button}</button>
          </div>
        </section>
        <section className="features" id="about">
          <h2>{staticCopy.features.title}</h2>
          <div className="feature-grid">
            {staticCopy.features.cards.map((card, index) => (
              <div key={index} className="feature-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="services" id="services">
          <h2>{staticCopy.services.title}</h2>
          <div className="services-container">
            {staticCopy.services.items.map((item, index) => (
              <div key={index} className="service-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="contact" id="contact">
          <h2>{staticCopy.contact.title}</h2>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{staticCopy.contact.form.name.label}</label>
              <input type="text" id="name" placeholder={staticCopy.contact.form.name.placeholder} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{staticCopy.contact.form.email.label}</label>
              <input type="email" id="email" placeholder={staticCopy.contact.form.email.placeholder} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{staticCopy.contact.form.message.label}</label>
              <textarea id="message" placeholder={staticCopy.contact.form.message.placeholder}></textarea>
            </div>
            <button className="submit-button">{staticCopy.contact.form.button}</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>{staticCopy.footer.content}</p>
          <div className="social-links">
            {staticCopy.footer.socialLinks.map((link, index) => (
              <a key={index} href="#" className="social-link">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
