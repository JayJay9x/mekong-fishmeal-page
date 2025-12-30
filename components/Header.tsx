
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-4 bg-slate-50/80 backdrop-blur-lg' : 'pt-4'}`}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Floating Logo Container */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-2xl'} bg-white rounded-2xl p-2 md:p-3`}>
            <a href="#home" aria-label="Back to homepage">
              <Logo />
            </a>
          </div>

          {/* Spacer to push nav to the right */}
          <div className="w-64 sm:w-80"></div>
          
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Giới thiệu</a>
            <a href="#products" className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Sản phẩm</a>
            <a href="#contact" className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Liên hệ</a>
          </nav>
          
          {/* Actions: Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 text-navy-blue hover:text-amber-gold transition-colors">
              <i data-lucide="globe" className="w-5 h-5"></i>
              <span className="font-medium">VIE</span>
            </button>
            <a href="#contact" className="bg-navy-blue text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
              Liên hệ ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-navy-blue p-2">
              <i data-lucide={isMenuOpen ? "x" : "menu"} className="w-6 h-6"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl rounded-lg mt-4 p-4 animate-fade-in-down">
            <nav className="flex flex-col gap-4">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Giới thiệu</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Sản phẩm</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-navy-blue font-medium hover:text-amber-gold transition-colors">Liên hệ</a>
              <hr/>
               <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-navy-blue text-white text-center px-6 py-2.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                Liên hệ ngay
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
