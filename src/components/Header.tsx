import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Ray Dollete</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;