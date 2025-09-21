import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Smartphone, Shield, Wifi, Users, FileCheck, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';

const AndroidDownload = () => {

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'e2x-android-pro-v1.0.0.apk';
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
      icon: Wifi,
      title: 'Remote Wipe Capabilities',
      description: 'Securely wipe lost or stolen devices remotely through cloud management'
    },
    {
      icon: Shield,
      title: 'Factory Reset Plus',
      description: 'Enhanced factory reset with secure data overwrite for complete protection'
    },
    {
      icon: Users,
      title: 'Enterprise MDM Integration',
      description: 'Seamless integration with mobile device management platforms'
    },
    {
      icon: FileCheck,
      title: 'Compliance Reporting',
      description: 'Detailed audit trails and compliance reports for regulatory requirements'
    },
    {
      icon: Zap,
      title: 'Bulk Device Processing',
      description: 'Process multiple devices simultaneously for enterprise deployments'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Support',
      description: 'Works across all Android versions and device manufacturers'
    }
  ];

  const supportedDevices = [
    { type: 'Smartphones', versions: 'Android 8.0+', description: 'All major manufacturers supported' },
    { type: 'Tablets', versions: 'Android 8.0+', description: 'Enterprise and consumer tablets' },
    { type: 'IoT Devices', versions: 'Android Things', description: 'Industrial and embedded systems' },
    { type: 'Automotive', versions: 'Android Auto', description: 'In-vehicle infotainment systems' }
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* ASCII Art and Tool Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <div className="overflow-x-auto mb-8">
                <pre className="text-blue-400 text-xs font-mono leading-tight whitespace-pre" style={{ fontFamily: "'Courier New', monospace" }}>
                {asciiArt}
                </pre>
              </div>
              
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">E2X Android Pro</h1>
                <h2 className="text-lg md:text-xl text-blue-400 mb-6">"Mobile Security Suite" - Enterprise Mobile Device Management</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-white">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">File Size:</span>
                    <span className="text-white">~25MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">License:</span>
                    <span className="text-white">Enterprise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="text-white">Android 8.0+</span>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-blue-500/25"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Android Pro
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Enterprise Mobile Security Solution
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                E2X Android Pro provides comprehensive mobile device security for enterprises. 
                With remote wipe capabilities, enhanced factory reset, and enterprise MDM integration, 
                it's the perfect solution for securing corporate mobile devices and ensuring data compliance.
              </p>

              <div className="grid gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Supported Devices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Supported Devices</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {supportedDevices.map((device, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">{device.type}</h4>
                        <span className="text-sm text-blue-600 font-medium">{device.versions}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{device.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Installation Guide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 md:p-8 text-white"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6">Installation Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-blue-400">Enable Unknown Sources</h4>
                      <p className="text-gray-300 text-sm">Go to Settings > Security > Enable installation from unknown sources</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-blue-400">Download & Install</h4>
                      <p className="text-gray-300 text-sm">Download the APK file and tap to install on your device</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-blue-400">Grant Permissions</h4>
                      <p className="text-gray-300 text-sm">Allow necessary permissions for device administration and security</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-blue-400">Configure Enterprise</h4>
                      <p className="text-gray-300 text-sm">Connect to your enterprise MDM system and configure policies</p>
                    </div>
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

export default AndroidDownload;