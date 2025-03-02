import staticCopy from '../../staticCopy.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{staticCopy.footer.content}</p>
        <div className="social-links">
          {staticCopy.footer.socialLinks.map((link, index) => (
            <a key={index} href="#" className="social-link">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;