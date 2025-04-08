import React from 'react';

const Navbar = ({ loaded }) => {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Sy</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`transform transition-all duration-700 ease-out delay-${index * 100} ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } hover:text-cyan-400`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;