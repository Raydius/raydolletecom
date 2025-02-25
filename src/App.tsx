import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h2>Welcome to My Website</h2>
            <p>A modern single page application built with Vite, React, and TypeScript</p>
            <button className="cta-button">Learn More</button>
          </div>
        </section>

        <section className="features" id="about">
          <h2>About Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Fast Performance</h3>
              <p>Our application is built with the latest technologies for optimal performance.</p>
            </div>
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>The layout adapts perfectly to any screen size or device.</p>
            </div>
            <div className="feature-card">
              <h3>Modern Stack</h3>
              <p>Built with Vite, React, and TypeScript for a robust development experience.</p>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-item">
              <h3>Web Development</h3>
              <p>Custom websites tailored to your specific needs.</p>
            </div>
            <div className="service-item">
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user interfaces.</p>
            </div>
            <div className="service-item">
              <h3>Mobile Applications</h3>
              <p>Cross-platform mobile apps for iOS and Android.</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button className="submit-button">Send Message</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 My Website. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
