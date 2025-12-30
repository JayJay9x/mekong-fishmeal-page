
import React from 'react';

interface LogoProps {
  variant?: 'color' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'color' }) => {
  const textColor = variant === 'color' ? 'text-navy-blue' : 'text-white';
  const fishColor = variant === 'color' ? 'text-amber-gold' : 'text-amber-gold';

  return (
    <div className="flex items-center gap-3">
      <svg width="50" height="40" viewBox="0 0 119 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto md:h-10">
        <path d="M0.358276 91.5659H33.9135L57.5518 51.0454L41.332 30.6387L58.5843 0.613281H25.029L0.358276 49.9803V91.5659Z" fill={variant === 'color' ? '#1e3a8a' : '#FFFFFF'}/>
        <path d="M118.01 91.5659H84.4549L60.8166 51.0454L77.0364 30.6387L59.7841 0.613281H93.3394L118.01 49.9803V91.5659Z" fill={variant === 'color' ? '#1e3a8a' : '#FFFFFF'}/>
        <path d="M41.7777 31.1554C41.7777 31.1554 48.0673 45.4187 59.2155 50.9392C63.6696 53.2268 76.5907 30.6387 76.5907 30.6387" stroke={variant === 'color' ? 'white' : '#1e3a8a'} strokeWidth="4"/>
      </svg>

      <div className="flex flex-col justify-center">
        <span className={`text-xl md:text-2xl font-bold leading-none ${textColor}`}>
          Mekong<span className={fishColor}>fishmeal</span>
        </span>
        <span className={`text-xs font-medium ${textColor} opacity-80 hidden sm:block`}>
          Consistent Quality. Trusted Partnership.
        </span>
      </div>
    </div>
  );
};

export default Logo;
