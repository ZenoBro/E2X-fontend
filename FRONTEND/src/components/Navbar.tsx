import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-800/90 backdrop-blur-md z-50 shadow-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">E2X</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
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
              onClick={() => handleNavigation('/docs')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </button>
            <button 
              onClick={() => handleNavigation('/verify')}
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
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full transition-colors">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <span className="text-sm">{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                      Dashboard
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link 
                    to="/login"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
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
                <Link 
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
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
                  onClick={() => handleNavigation('/docs')}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Docs
                </button>
                <button 
                  onClick={() => handleNavigation('/verify')}
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
                
                {/* Mobile User Menu */}
                <div className="border-t border-slate-700 pt-2 mt-2">
                  {isAuthenticated ? (
                    <>
                      <div className="px-3 py-2 text-amber-400 font-semibold">
                        Welcome, {user?.name}
                      </div>
                      <Link 
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button 
                        onClick={() => { logout(); setIsOpen(false); }}
                        className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      >
                        Login
                      </Link>
                      <Link 
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left px-3 py-2 bg-amber-600 text-white rounded-lg mx-3 text-center"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;