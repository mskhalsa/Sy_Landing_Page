import React from 'react';
import { Monitor } from 'lucide-react';

const Hero = ({ loaded }) => {
  return (
    <section id="about" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 
              className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Turning <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Data</span> into Business Solutions
            </h1>
            <p 
              className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We build intelligent systems that automate workflows and drive business growth through data-driven insights.
            </p>
            <div 
              className={`transition-all duration-1000 delay-400 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          <div 
            className={`md:w-1/2 transition-all duration-1000 delay-300 ease-out ${
              loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="w-full h-64 md:h-96 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-700 shadow-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Monitor size={120} className="text-cyan-400 opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;