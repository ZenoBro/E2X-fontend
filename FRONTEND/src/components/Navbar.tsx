import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">E2X</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('tools')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tools
            </button>
            <button 
              onClick={() => scrollToSection('verification')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Verify
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection('tools')}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Tools
                </button>
                <button 
                  onClick={() => scrollToSection('verification')}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Verify
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;