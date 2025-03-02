import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-content">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;