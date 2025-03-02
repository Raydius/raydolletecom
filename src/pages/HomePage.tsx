import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import PortfolioSection from '../components/Home/PortfolioSection';
import ContactSection from '../components/Home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;