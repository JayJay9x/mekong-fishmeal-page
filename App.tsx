
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import WhyChooseUs from './components/WhyChooseUs';
import ProductCatalog from './components/ProductCatalog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <WhyChooseUs />
        <ProductCatalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
