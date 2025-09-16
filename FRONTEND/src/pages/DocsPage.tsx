import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Play, Download, HelpCircle, Code, FileText, Monitor, Terminal, Disc } from 'lucide-react';
import Navbar from '../components/Navbar';
import TiltCard from '../components/TiltCard';

const DocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'windows', label: 'Windows Pro', icon: Monitor },
    { id: 'linux', label: 'Linux Pro', icon: Terminal },
    { id: 'iso', label: 'Universal ISO', icon: Disc },
    { id: 'api', label: 'API', icon: Code },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const faqs = [
    {
      question: 'What makes E2X different from other data wiping tools?',
      answer: 'E2X provides verifiable, tamper-proof certificates with QR codes, ensuring complete transparency and trust in the wiping process. Our tools are NIST SP 800-88 compliant and designed specifically for enterprise environments.'
    },
    {
      question: 'Can I use E2X tools on SSDs and modern storage devices?',
      answer: 'Yes, E2X tools automatically detect storage technology and apply the appropriate wiping method. For SSDs, we use secure erase commands and crypto-erase techniques for maximum effectiveness.'
    },
    {
      question: 'How do I verify a wiping certificate?',
      answer: 'You can verify certificates through our verification portal by scanning the QR code or uploading the certificate file. Each certificate contains cryptographic proof of the wiping process.'
    },
    {
      question: 'Is E2X suitable for government and military use?',
      answer: 'Absolutely. E2X meets NIST SP 800-88 standards and provides the level of security required for government and military applications. We offer additional compliance features for regulated industries.'
    },
    {
      question: 'What happens if the wiping process is interrupted?',
      answer: 'E2X tools include emergency quit protection and resume capabilities. If interrupted, the process can be safely resumed from the last checkpoint, ensuring complete data destruction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guides, tutorials, and API documentation for E2X secure data wiping tools
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Navigation</h3>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeTab === tab.id
                          ? 'bg-amber-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Product Overview</h2>
                    
                    {/* Video Section */}
                    <div className="mb-8">
                      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 text-white text-center">
                        <Play className="w-16 h-16 mx-auto mb-4 text-amber-400" />
                        <h3 className="text-xl font-bold mb-2">Product Demo Video</h3>
                        <p className="text-gray-300 mb-4">Watch a complete overview of E2X tools and features</p>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          Watch Demo
                        </button>
                      </div>
                    </div>

                    <div className="prose max-w-none">
                      <h3>What is E2X?</h3>
                      <p>
                        E2X (Erase 2 Extinction) is a comprehensive suite of secure data wiping tools designed 
                        to address India's e-waste crisis while ensuring complete data security. Our tools provide 
                        military-grade data destruction with verifiable certificates.
                      </p>

                      <h3>Key Features</h3>
                      <ul>
                        <li><strong>NIST SP 800-88 Compliance:</strong> Meets international standards for data sanitization</li>
                        <li><strong>Verifiable Certificates:</strong> QR-coded certificates for complete transparency</li>
                        <li><strong>Multi-Platform Support:</strong> Windows, Linux, and Universal ISO solutions</li>
                        <li><strong>Enterprise Ready:</strong> Scalable solutions for organizations of all sizes</li>
                      </ul>

                      <h3>Getting Started</h3>
                      <p>
                        Choose the appropriate tool for your environment and follow the installation guides. 
                        All tools require user authentication and provide detailed logging of the wiping process.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'windows' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">E2X Windows Pro - "Shuddh"</h2>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-amber-800 mb-2">OS-Preserving Technology</h4>
                      <p className="text-amber-700">
                        Unique feature that keeps Windows functional while completely wiping user data and applications.
                      </p>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Installation</h3>
                      <ol>
                        <li>Download the E2X Windows Pro installer</li>
                        <li>Run as Administrator</li>
                        <li>Follow the installation wizard</li>
                        <li>Restart the system when prompted</li>
                      </ol>

                      <h3>Usage</h3>
                      <p>
                        Launch E2X Windows Pro from the Start menu. The tool will automatically detect 
                        system configuration and present wiping options. Select the appropriate security 
                        level and confirm the operation.
                      </p>

                      <h3>System Requirements</h3>
                      <ul>
                        <li>Windows 10 (Build 1903+) or Windows 11</li>
                        <li>Administrator privileges</li>
                        <li>4GB RAM minimum</li>
                        <li>100MB free disk space</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'linux' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">E2X Linux Pro - Data Wiping Toolkit</h2>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">Advanced Features</h4>
                      <p className="text-green-700">
                        AES-128 encryption wipe, drive revival technology, and scriptable automation.
                      </p>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Installation</h3>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`# Download and install
wget https://releases.e2x.in/linux/e2x-linux-pro.deb
sudo dpkg -i e2x-linux-pro.deb

# Or using package manager
sudo apt install e2x-linux-pro`}
                        </code>
                      </pre>

                      <h3>Command Line Usage</h3>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`# Basic usage
sudo e2x-wipe /dev/sda --method=aes128

# With certificate generation
sudo e2x-wipe /dev/sda --method=dod --cert-output=/tmp/cert.pdf

# Batch processing
sudo e2x-wipe --config=/etc/e2x/batch-config.json`}
                        </code>
                      </pre>

                      <h3>Supported Distributions</h3>
                      <ul>
                        <li>Ubuntu 18.04+</li>
                        <li>CentOS/RHEL 7+</li>
                        <li>Debian 10+</li>
                        <li>SUSE Linux Enterprise</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'iso' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">E2X Universal ISO - Universal Bootable</h2>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-purple-800 mb-2">Hardware Independence</h4>
                      <p className="text-purple-700">
                        Works on any hardware via bootable USB drive or CD/DVD media without OS dependencies.
                      </p>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Creating Bootable Media</h3>
                      <h4>USB Drive (Recommended)</h4>
                      <ol>
                        <li>Download Rufus or similar tool</li>
                        <li>Select E2X Universal ISO file</li>
                        <li>Choose target USB drive (1GB+ required)</li>
                        <li>Create bootable drive</li>
                      </ol>

                      <h4>DVD Media</h4>
                      <ol>
                        <li>Use any DVD burning software</li>
                        <li>Burn ISO to DVD-R media</li>
                        <li>Verify burn integrity</li>
                      </ol>

                      <h3>Boot Process</h3>
                      <ol>
                        <li>Insert bootable media</li>
                        <li>Configure BIOS/UEFI to boot from media</li>
                        <li>Select E2X from boot menu</li>
                        <li>Follow on-screen instructions</li>
                      </ol>

                      <h3>Features</h3>
                      <ul>
                        <li>UEFI and BIOS compatibility</li>
                        <li>Automatic hardware detection</li>
                        <li>Multiple wiping algorithms</li>
                        <li>Certificate generation with QR codes</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'api' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">API Documentation</h2>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">Enterprise Integration</h4>
                      <p className="text-blue-700">
                        RESTful API for integrating E2X tools into enterprise workflows and automation systems.
                      </p>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Authentication</h3>
                      <p>All API requests require authentication using API keys:</p>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.e2x.in/v1/wipe-jobs`}
                        </code>
                      </pre>

                      <h3>Endpoints</h3>
                      
                      <h4>Start Wipe Job</h4>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`POST /v1/wipe-jobs
{
  "device_id": "/dev/sda",
  "method": "aes128",
  "certificate": true,
  "callback_url": "https://your-app.com/webhook"
}`}
                        </code>
                      </pre>

                      <h4>Check Job Status</h4>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`GET /v1/wipe-jobs/{job_id}

Response:
{
  "id": "job_123",
  "status": "in_progress",
  "progress": 45,
  "estimated_completion": "2024-01-15T14:30:00Z"
}`}
                        </code>
                      </pre>

                      <h4>Verify Certificate</h4>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code>
{`POST /v1/certificates/verify
{
  "certificate_id": "E2X-2024-001234",
  "qr_data": "encrypted_qr_content"
}`}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'faq' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-6"
                        >
                          <h3 className="text-lg font-semibold text-slate-800 mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-gray-600 mb-4">Still have questions?</p>
                      <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Contact Support
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;