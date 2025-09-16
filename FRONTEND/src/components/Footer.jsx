import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold">E2X</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional secure data wiping solutions that enable safe device recycling 
              while protecting sensitive information with military-grade security standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="/download/windows" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Windows Pro
                </a>
              </li>
              <li>
                <a href="/download/linux" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Linux Pro
                </a>
              </li>
              <li>
                <a href="/download/iso" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Universal ISO
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 E2X (Erase 2 Extinction). All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              contact@e2x.in
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +91 XXXXX XXXXX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;