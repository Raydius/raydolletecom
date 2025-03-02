import staticCopy from '../../staticCopy.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{staticCopy.footer.content}</p>
        <div className="social-links">
          {Object.keys(staticCopy.footer.socialLinks).map((key) => (
            <a key={key} href={staticCopy.footer.socialLinks[key as keyof typeof staticCopy.footer.socialLinks]} className="social-link">
              {key}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;