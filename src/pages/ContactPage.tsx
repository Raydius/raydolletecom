import staticCopy from '../staticCopy.json';
import './Pages.css';

const ContactPage = () => {
  return (
    <section className="contact" id="contact">
      <h2>{staticCopy.contact.title}</h2>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{staticCopy.contact.form.name.label}</label>
          <input
            type="text"
            id="name"
            placeholder={staticCopy.contact.form.name.placeholder}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{staticCopy.contact.form.email.label}</label>
          <input
            type="email"
            id="email"
            placeholder={staticCopy.contact.form.email.placeholder}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{staticCopy.contact.form.message.label}</label>
          <textarea
            id="message"
            placeholder={staticCopy.contact.form.message.placeholder}
          ></textarea>
        </div>
        <button className="submit-button">{staticCopy.contact.form.button}</button>
      </div>
    </section>
  );
};

export default ContactPage;