import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="copyright-info">
        &copy; 2025 Ray Dollete. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;