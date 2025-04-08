import React from 'react';

const Footer = ({ loaded }) => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Sy</span>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Sy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;