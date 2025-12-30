
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="white" />
            <p className="text-sm text-slate-300 text-center md:text-right">
            © 2024 FISHMEAL MEKONG CO., LTD. All Rights Reserved.
            <br />
            <span className="opacity-70">by FISHMEAL MEKONG CO.,LTD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
