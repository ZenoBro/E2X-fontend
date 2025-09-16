import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Shield, Monitor, Zap, Lock, Clock, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';

const WindowsDownload: React.FC = () => {

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'e2x-windows-pro-v1.0.0.exe';
    link.click();
    alert('Download started! Check your downloads folder.');
  };

  const asciiArt = `╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║        ███████╗██████╗ ██╗  ██╗                                            ║
║        ██╔════╝╚════██╗╚██╗██╔╝                                            ║
║        █████╗   █████╔╝ ╚███╔╝                                             ║
║        ██╔══╝  ██╔═══╝  ██╔██╗                                             ║
║        ███████╗███████╗██╔╝ ██╗                                            ║
║        ╚══════╝╚══════╝╚═╝  ╚═╝                                            ║
║                                                                            ║
║   ███████╗███████╗ ██████╗██╗   ██╗██████╗ ███████╗                        ║
║   ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝                        ║
║   ███████╗█████╗  ██║     ██║   ██║██████╔╝█████╗                          ║
║   ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██╔══╝                          ║
║   ███████║███████╗╚██████╗╚██████╔╝██║  ██║███████╗                        ║
║   ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                        ║
║                                                                            ║
║        ██╗    ██╗██╗██████╗ ███████╗    ████████╗ ██████╗  ██████╗ ██╗     ║
║        ██║    ██║██║██╔══██╗██╔════╝    ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ║
║        ██║ █╗ ██║██║██████╔╝█████╗         ██║   ██║   ██║██║   ██║██║     ║
║        ██║███╗██║██║██╔═══╝ ██╔══╝         ██║   ██║   ██║██║   ██║██║     ║
║        ╚███╔███╔╝██║██║     ███████╗       ██║   ╚██████╔╝╚██████╔╝███████╗║
║         ╚══╝╚══╝ ╚═╝╚═╝     ╚══════╝       ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝║
║                                                                            ║
║                         Version 1.0.0                                      ║
║              Professional Secure Drive Wiping Tool                         ║
╚════════════════════════════════════════════════════════════════════════════╝`;

  const features = [
    {
      icon: Monitor,
      title: 'OS-Preserving Technology',
      description: 'Keeps Windows functional while completely wiping user data and applications'
    },
    {
      icon: Zap,
      title: 'One-Click Operation',
      description: 'Simple, intuitive interface for secure data erasure with minimal user interaction'
    },
    {
      icon: Shield,
      title: 'System File Protection',
      description: 'Preserves essential Windows files, drivers, and system configurations'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Quit Protection',
      description: 'Prevents accidental interruption during critical wiping operations'
    },
    {
      icon: Clock,
      title: 'Real-Time Progress',
      description: 'Live monitoring of wiping progress with detailed status updates'
    },
    {
      icon: Lock,
      title: 'NIST Compliance',
      description: 'Meets NIST SP 800-88 standards for secure data sanitization'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ASCII Art and Tool Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <div className="overflow-x-auto mb-8">
                <pre className="text-amber-400 text-xs font-mono leading-tight whitespace-pre" style={{ fontFamily: "'Courier New', monospace" }}>
                {asciiArt}
                </pre>
              </div>
              
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-4">E2X Windows Pro</h1>
                <h2 className="text-xl text-amber-400 mb-6">"Shuddh" - OS-Preserving Data Wipe</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-white">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File Size:</span>
                    <span className="text-white">~15MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">License:</span>
                    <span className="text-white">Enterprise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="text-white">Windows 10/11</span>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-amber-500/25"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Windows Pro
                </button>

                <p className="text-gray-400 text-sm mt-4 text-center">Ready to download</p>
              </div>
            </motion.div>

            {/* Tool Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                The Smart Windows Wiping Solution
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                E2X Windows Pro revolutionizes data wiping by keeping your Windows installation 
                intact while completely removing user data, applications, and sensitive information. 
                Perfect for enterprise device recycling and secure system preparation.
              </p>

              <div className="grid gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* System Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">Minimum Requirements:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Windows 10 (Build 1903+)</li>
                      <li>• Administrator privileges</li>
                      <li>• 4GB RAM</li>
                      <li>• 100MB free disk space</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">Recommended:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Windows 11</li>
                      <li>• 8GB RAM or higher</li>
                      <li>• SSD storage</li>
                      <li>• Network connectivity</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WindowsDownload;