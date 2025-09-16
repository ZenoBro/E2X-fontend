import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Terminal, Layers, RefreshCw as Refresh, Shield, Code, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';

const LinuxDownload = () => {

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'e2x-linux-pro-v1.0.0.deb';
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
      icon: Shield,
      title: 'AES-128 Encryption Wipe',
      description: 'Military-grade encryption-based wiping for maximum security assurance'
    },
    {
      icon: Refresh,
      title: 'Drive Revival Technology',
      description: 'Restore drive functionality after complete sanitization for reuse'
    },
    {
      icon: Layers,
      title: 'Multiple Security Levels',
      description: 'From simple zero-fill to advanced crypto-erase methods based on requirements'
    },
    {
      icon: Cpu,
      title: 'Complete Drive Sanitization',
      description: 'Hardware-level wiping that eliminates all traces of data permanently'
    },
    {
      icon: Code,
      title: 'Scriptable & Modular',
      description: 'Automation-ready with comprehensive API for enterprise deployments'
    },
    {
      icon: Terminal,
      title: 'Command Line Interface',
      description: 'Powerful CLI tools for system administrators and security professionals'
    }
  ];

  const wipeMethods = [
    { name: 'Zero Fill', level: 'Basic', description: 'Single-pass overwrite with zeros' },
    { name: 'Random Fill', level: 'Standard', description: 'Multi-pass random data overwrite' },
    { name: 'DoD 5220.22-M', level: 'Government', description: 'US Department of Defense standard' },
    { name: 'AES-128 Crypto', level: 'Enterprise', description: 'Encryption-based data destruction' }
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
                <pre className="text-green-400 text-xs font-mono leading-tight whitespace-pre" style={{ fontFamily: "'Courier New', monospace" }}>
                {asciiArt}
                </pre>
              </div>
              
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-4">E2X Linux Pro</h1>
                <h2 className="text-xl text-green-400 mb-6">"Data Wiping Toolkit" - Drive Revival & Multi-Level Security</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-white">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File Size:</span>
                    <span className="text-white">~8MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">License:</span>
                    <span className="text-white">Enterprise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="text-white">Linux Distros</span>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-green-500/25"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Linux Pro
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
                Enterprise-Grade Linux Wiping Toolkit
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                E2X Linux Pro provides the most comprehensive data wiping solution for Linux environments. 
                With advanced encryption-based wiping, drive revival capabilities, and multiple security levels, 
                it's the perfect tool for data centers and enterprise security teams.
              </p>

              <div className="grid gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mr-4">
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

              {/* Wipe Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Wiping Methods Available</h3>
                <div className="space-y-4">
                  {wipeMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">{method.name}</h4>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        method.level === 'Basic' ? 'bg-blue-100 text-blue-800' :
                        method.level === 'Standard' ? 'bg-yellow-100 text-yellow-800' :
                        method.level === 'Government' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {method.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

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
                    <h4 className="font-semibold text-green-400 mb-2">Minimum Requirements:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Linux Kernel 4.0+</li>
                      <li>• Root access privileges</li>
                      <li>• Python 3.8+</li>
                      <li>• 2GB RAM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Supported Distributions:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Ubuntu 18.04+</li>
                      <li>• CentOS/RHEL 7+</li>
                      <li>• Debian 10+</li>
                      <li>• SUSE Linux Enterprise</li>
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

export default LinuxDownload;