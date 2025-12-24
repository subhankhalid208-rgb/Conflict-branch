import React from 'react';
import { Github, Twitter, Instagram, Mail, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tailwind = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
    
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-black tracking-tighter uppercase transition-all duration-500
          text-3xl sm:text-3xl 
          md:text-5xl 
          lg:text-8xl lg:text-indigo-500">
          Tailwind <span className="text-white lg:text-indigo-500">Design</span>
        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-base lg:text-lg max-w-lg">
          This heading changes size and color automatically based on your screen width. 
          Check the footer below for the new professional look.
        </p>
      </div>
      <footer className="bg-[#1a1a1a] border-t border-[#333] pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Package className="text-indigo-500" size={28} />
                <span className="text-2xl font-bold tracking-tight">SubhanHub</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The leading inventory management solution in Lahore, Pakistan. 
                Built with modern tech for high-performance businesses.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Quick Navigation</h3>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home / Inventory</Link></li>
                <li><Link to="/cart" className="hover:text-indigo-500 transition-colors">My Shopping Cart</Link></li>
                <li><Link to="/login" className="hover:text-indigo-500 transition-colors">Account Login</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-black rounded-xl border border-[#333] hover:border-indigo-500 text-gray-400 hover:text-indigo-500 transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-black rounded-xl border border-[#333] hover:border-indigo-500 text-gray-400 hover:text-indigo-500 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-black rounded-xl border border-[#333] hover:border-indigo-500 text-gray-400 hover:text-indigo-500 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-black rounded-xl border border-[#333] hover:border-indigo-500 text-gray-400 hover:text-indigo-500 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest">
            <p>© 2025 SubhanHub Lahore. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tailwind;