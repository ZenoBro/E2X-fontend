import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Upload, FileCheck, Camera, Shield, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import TiltCard from '../components/TiltCard';

const VerifyPage = () => {
  const [activeTab, setActiveTab] = useState('qr');
  const [isScanning, setIsScanning] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState(null);

  const handleQRScan = () => {
    setIsScanning(true);
    setError(null);
    // Simulate QR scanning
    setTimeout(() => {
      setVerificationResult({
        valid: true,
        certificateId: 'E2X-2024-001234',
        wipedDate: '2024-01-15T10:30:00Z',
        method: 'AES-128 Crypto Erase',
        device: 'Dell Latitude 5520',
        organization: 'Tech Corp Ltd',
        technician: 'John Smith',
        verificationHash: 'sha256:a1b2c3d4e5f6...'
      });
      setIsScanning(false);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setError(null);
      // Simulate file verification
      setTimeout(() => {
        if (Math.random() > 0.2) { // 80% success rate for demo
          setVerificationResult({
            valid: true,
            certificateId: 'E2X-2024-001235',
            wipedDate: '2024-01-14T14:22:00Z',
            method: 'DoD 5220.22-M',
            device: 'HP ProBook 450',
            organization: 'Enterprise Solutions Inc',
            technician: 'Sarah Johnson',
            verificationHash: 'sha256:f6e5d4c3b2a1...'
          });
        } else {
          setError('Certificate verification failed. The certificate may be tampered with or invalid.');
        }
      }, 1500);
    }
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setError(null);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Certificate Verification Portal
            </h1>
            <p className="text-xl text-gray-600">
              Verify the authenticity of your data wiping certificates instantly
            </p>
          </motion.div>

          <TiltCard tiltMaxAngle={5} scale={1.01}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => { setActiveTab('qr'); resetVerification(); }}
                  className={`flex-1 py-6 px-6 text-center font-semibold transition-all ${
                    activeTab === 'qr'
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <QrCode className="inline-block w-6 h-6 mr-3" />
                  QR Code Scanner
                </button>
                <button
                  onClick={() => { setActiveTab('certificate'); resetVerification(); }}
                  className={`flex-1 py-6 px-6 text-center font-semibold transition-all ${
                    activeTab === 'certificate'
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Upload className="inline-block w-6 h-6 mr-3" />
                  Certificate Upload
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'qr' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <TiltCard tiltMaxAngle={10} scale={1.02}>
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                          {isScanning ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full"
                            />
                          ) : (
                            <Camera className="w-32 h-32 text-gray-400" />
                          )}
                        </div>
                      </TiltCard>
                      
                      <motion.button
                        onClick={handleQRScan}
                        disabled={isScanning}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-10 py-4 rounded-full font-semibold transition-all disabled:opacity-50 shadow-lg hover:shadow-amber-500/25"
                      >
                        {isScanning ? 'Scanning...' : 'Start QR Scan'}
                      </motion.button>
                    </div>
                    <p className="text-gray-600">
                      Position the QR code from your certificate within the scanner area
                    </p>
                  </motion.div>
                )}

                {activeTab === 'certificate' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center"
                  >
                    <TiltCard tiltMaxAngle={8} scale={1.02}>
                      <div className="border-2 border-dashed border-gray-300 rounded-3xl p-16 mb-6 bg-gradient-to-br from-gray-50 to-gray-100">
                        <Upload className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                        <p className="text-xl font-semibold text-gray-700 mb-3">
                          Upload Certificate File
                        </p>
                        <p className="text-gray-600 mb-8">
                          Drag and drop your certificate file here, or click to browse
                        </p>
                        <label className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold cursor-pointer transition-all shadow-lg hover:shadow-amber-500/25">
                          Choose File
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileUpload}
                          />
                        </label>
                      </div>
                    </TiltCard>
                    <p className="text-gray-600">
                      Accepted formats: PDF, JPG, PNG (Max size: 10MB)
                    </p>
                  </motion.div>
                )}

                {/* Error State */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl"
                  >
                    <div className="flex items-center mb-4">
                      <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                      <h3 className="text-xl font-semibold text-red-800">
                        Verification Failed
                      </h3>
                    </div>
                    <p className="text-red-700">{error}</p>
                    <button
                      onClick={resetVerification}
                      className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}

                {/* Verification Result */}
                {verificationResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8"
                  >
                    <TiltCard tiltMaxAngle={5} scale={1.01}>
                      <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                            <FileCheck className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-green-800">
                              Certificate Verified ✓
                            </h3>
                            <p className="text-green-600">This certificate is authentic and valid</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <span className="font-semibold text-gray-700">Certificate ID:</span>
                              <p className="text-gray-900 font-mono">{verificationResult.certificateId}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Device:</span>
                              <p className="text-gray-900">{verificationResult.device}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Wiping Method:</span>
                              <p className="text-gray-900">{verificationResult.method}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Organization:</span>
                              <p className="text-gray-900">{verificationResult.organization}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <span className="font-semibold text-gray-700">Wiped Date:</span>
                              <p className="text-gray-900">
                                {new Date(verificationResult.wipedDate).toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Technician:</span>
                              <p className="text-gray-900">{verificationResult.technician}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Verification Hash:</span>
                              <p className="text-gray-900 font-mono text-sm break-all">
                                {verificationResult.verificationHash}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-green-200">
                          <div className="flex items-center justify-between">
                            <span className="text-green-700 font-medium">Security Level: Military Grade</span>
                            <span className="text-green-700 font-medium">NIST SP 800-88 Compliant</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex space-x-4">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                            Download Report
                          </button>
                          <button 
                            onClick={resetVerification}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                          >
                            Verify Another
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}
              </div>
            </div>
          </TiltCard>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Tamper-Proof</h3>
                <p className="text-gray-600 text-sm">Cryptographically signed certificates</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FileCheck className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Instant Verification</h3>
                <p className="text-gray-600 text-sm">Real-time certificate validation</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <QrCode className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">QR Code Security</h3>
                <p className="text-gray-600 text-sm">Encrypted QR codes for mobile verification</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;