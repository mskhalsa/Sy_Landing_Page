import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea 
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors h-32"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;