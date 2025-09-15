import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Disc, Usb, Zap, Shield, QrCode, Monitor } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';

const ISODownload: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleDownload = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      // Simulate download
      alert('Download started! Check your downloads folder.');
    }
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
      icon: Usb,
      title: 'Universal Hardware Support',
      description: 'Works on any hardware via bootable USB drive or CD/DVD media'
    },
    {
      icon: Zap,
      title: 'Intelligent Method Selection',
      description: 'Automatically selects optimal wiping method based on drive technology'
    },
    {
      icon: Monitor,
      title: 'UEFI + BIOS Compatible',
      description: 'Supports both modern UEFI and legacy BIOS boot systems'
    },
    {
      icon: QrCode,
      title: 'QR-Coded Certificates',
      description: 'Generate tamper-proof certificates with QR verification codes'
    },
    {
      icon: Shield,
      title: 'No OS Dependencies',
      description: 'Completely independent operation without requiring installed operating system'
    },
    {
      icon: Disc,
      title: 'Self-Contained Solution',
      description: 'All tools and utilities included in single bootable image'
    }
  ];

  const supportedMedia = [
    { type: 'USB Drive', size: '1GB+', description: 'Recommended for most use cases' },
    { type: 'DVD-R', size: '4.7GB', description: 'Standard DVD media support' },
    { type: 'CD-R', size: '700MB', description: 'Compact version available' },
    { type: 'Network Boot', size: 'PXE', description: 'Enterprise deployment ready' }
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
              className="bg-slate-900 rounded-2xl p-8 shadow-2xl"
            >
              <pre className="text-purple-400 text-xs font-mono leading-tight mb-8 overflow-x-auto">
                {asciiArt}
              </pre>
              
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-4">E2X Universal ISO</h1>
                <h2 className="text-xl text-purple-400 mb-6">"Universal Bootable" - Hardware-Level Security Anywhere</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-white">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File Size:</span>
                    <span className="text-white">~800MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">License:</span>
                    <span className="text-white">Enterprise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="text-white">Universal</span>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Universal ISO
                </button>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  {!isAuthenticated ? 'Login required to download' : 'Ready to download'}
                </p>
              </div>
            </motion.div>

            {/* Tool Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Universal Bootable Wiping Solution
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                E2X Universal ISO is the ultimate hardware-agnostic data wiping solution. 
                Boot from any media on any hardware to perform secure data destruction 
                without requiring an installed operating system.
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
                    <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mr-4">
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

              {/* Supported Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Supported Boot Media</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {supportedMedia.map((media, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">{media.type}</h4>
                        <span className="text-sm text-purple-600 font-medium">{media.size}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{media.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Boot Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Start Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-purple-400">Create Bootable Media</h4>
                      <p className="text-gray-300 text-sm">Burn ISO to DVD or create USB drive using tools like Rufus or dd</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-purple-400">Boot from Media</h4>
                      <p className="text-gray-300 text-sm">Configure BIOS/UEFI to boot from your created media</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-purple-400">Select & Wipe</h4>
                      <p className="text-gray-300 text-sm">Choose target drives and wiping method, then execute secure wipe</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-purple-400">Generate Certificate</h4>
                      <p className="text-gray-300 text-sm">Create tamper-proof certificate with QR code for verification</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </div>
  );
};

export default ISODownload;