import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Upload, FileCheck, Camera, X, Search, Download, Shield, Clock, MapPin } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const VerificationPortal = () => {
  const [activeTab, setActiveTab] = useState('qr');
  const [isScanning, setIsScanning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [error, setError] = useState(null);

  // Mock QR scanning function (since we can't use camera in this environment)
  const handleQRScan = () => {
    setIsScanning(true);
    setError(null);
    
    // Simulate QR scanning process
    setTimeout(() => {
      setVerificationResult({
        valid: true,
        certificateId: 'E2X-2024-001234',
        wipedDate: '2024-01-15T10:30:00Z',
        method: 'AES-128 Crypto Erase',
        device: 'Dell Latitude 5520',
        organization: 'TechCorp Solutions',
        operator: 'John Smith',
        location: 'Mumbai, India',
        compliance: ['NIST SP 800-88', 'DoD 5220.22-M'],
        hash: 'sha256:a1b2c3d4e5f6...',
        duration: '45 minutes'
      });
      setIsScanning(false);
    }, 2000);
  };

  // File upload handling with react-dropzone
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setIsProcessing(true);
      setError(null);
      
      // Simulate file processing
      setTimeout(() => {
        setVerificationResult({
          valid: true,
          certificateId: 'E2X-2024-001235',
          wipedDate: '2024-01-14T14:22:00Z',
          method: 'DoD 5220.22-M',
          device: 'HP ProBook 450',
          organization: 'SecureIT Ltd',
          operator: 'Sarah Johnson',
          location: 'Delhi, India',
          compliance: ['NIST SP 800-88', 'Common Criteria'],
          hash: 'sha256:f6e5d4c3b2a1...',
          duration: '32 minutes'
        });
        setIsProcessing(false);
      }, 1500);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json'],
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1
  });

  // Certificate ID lookup
  const handleLookup = () => {
    if (!searchId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    // Simulate API lookup
    setTimeout(() => {
      if (searchId.toLowerCase().includes('invalid')) {
        setVerificationResult({
          valid: false,
          certificateId: searchId,
          wipedDate: '',
          method: '',
          device: ''
        });
      } else {
        setVerificationResult({
          valid: true,
          certificateId: searchId,
          wipedDate: '2024-01-13T09:15:00Z',
          method: 'NVMe Sanitize',
          device: 'MacBook Pro 16"',
          organization: 'Innovation Labs',
          operator: 'Mike Chen',
          location: 'Bangalore, India',
          compliance: ['NIST SP 800-88', 'IEEE 2883'],
          hash: 'sha256:1a2b3c4d5e6f...',
          duration: '28 minutes'
        });
      }
      setIsProcessing(false);
    }, 1000);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setError(null);
    setSearchId('');
  };

  const downloadReport = () => {
    if (verificationResult) {
      const report = {
        verificationDate: new Date().toISOString(),
        certificate: verificationResult,
        verifiedBy: 'E2X Verification Portal'
      };
      
      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `E2X_Verification_${verificationResult.certificateId}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section id="verification" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-amber-500 mr-4" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Certificate Verification Portal
              </h2>
              <p className="text-lg text-amber-600 font-semibold mt-2">
                Secure • Instant • Tamper-Proof
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Verify the authenticity of your E2X data wiping certificates with our advanced verification system
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => { setActiveTab('qr'); resetVerification(); }}
              className={`flex-1 py-6 px-6 text-center font-semibold transition-all relative ${
                activeTab === 'qr'
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <QrCode className="inline-block w-5 h-5 mr-2" />
              QR Code Scanner
              {activeTab === 'qr' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
              )}
            </button>
            <button
              onClick={() => { setActiveTab('certificate'); resetVerification(); }}
              className={`flex-1 py-6 px-6 text-center font-semibold transition-all relative ${
                activeTab === 'certificate'
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Upload className="inline-block w-5 h-5 mr-2" />
              File Upload
              {activeTab === 'certificate' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
              )}
            </button>
            <button
              onClick={() => { setActiveTab('lookup'); resetVerification(); }}
              className={`flex-1 py-6 px-6 text-center font-semibold transition-all relative ${
                activeTab === 'lookup'
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Search className="inline-block w-5 h-5 mr-2" />
              ID Lookup
              {activeTab === 'lookup' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
              )}
            </button>
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* QR Code Scanner Tab */}
              {activeTab === 'qr' && (
                <motion.div
                  key="qr"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden">
                      {isScanning ? (
                        <div className="relative">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 border-4 border-amber-500 border-t-transparent rounded-full"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <QrCode className="w-8 h-8 text-amber-500" />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Camera className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 font-medium">Camera Scanner Ready</p>
                        </div>
                      )}
                      
                      {/* Scanner overlay */}
                      <div className="absolute inset-4 border-2 border-amber-500 rounded-2xl opacity-30"></div>
                      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-amber-500"></div>
                      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-amber-500"></div>
                      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-amber-500"></div>
                      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-amber-500"></div>
                    </div>
                    
                    <button
                      onClick={handleQRScan}
                      disabled={isScanning}
                      className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {isScanning ? 'Scanning QR Code...' : 'Start QR Scan'}
                    </button>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">How to scan:</h3>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• Position the QR code within the scanner frame</li>
                      <li>• Ensure good lighting for best results</li>
                      <li>• Hold steady until scan completes</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* File Upload Tab */}
              {activeTab === 'certificate' && (
                <motion.div
                  key="certificate"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-center"
                >
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-3xl p-16 mb-8 transition-all cursor-pointer ${
                      isDragActive
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-300 hover:border-amber-400 hover:bg-gray-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                      {isDragActive ? 'Drop your certificate here' : 'Upload Certificate File'}
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Drag and drop your certificate file here, or click to browse your files
                    </p>
                    <div className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold cursor-pointer transition-all inline-block shadow-lg hover:shadow-xl">
                      Choose File
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="font-semibold text-blue-800 mb-1">JSON Certificates</div>
                      <div className="text-blue-600">Digital certificate files</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="font-semibold text-green-800 mb-1">PDF Reports</div>
                      <div className="text-green-600">Printable certificate reports</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <div className="font-semibold text-purple-800 mb-1">QR Images</div>
                      <div className="text-purple-600">PNG, JPG QR code images</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ID Lookup Tab */}
              {activeTab === 'lookup' && (
                <motion.div
                  key="lookup"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-center max-w-2xl mx-auto"
                >
                  <div className="mb-8">
                    <Search className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Certificate ID Lookup
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Enter your certificate ID to verify its authenticity and view details
                    </p>
                    
                    <div className="flex gap-4 mb-6">
                      <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        placeholder="Enter Certificate ID (e.g., E2X-2024-001234)"
                        className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                        onKeyPress={(e) => e.key === 'Enter' && handleLookup()}
                      />
                      <button
                        onClick={handleLookup}
                        disabled={isProcessing || !searchId.trim()}
                        className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
                      >
                        {isProcessing ? 'Searching...' : 'Verify'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Certificate ID Format:</h4>
                    <div className="text-gray-600 text-sm space-y-2">
                      <div>• Format: E2X-YYYY-NNNNNN</div>
                      <div>• Example: E2X-2024-001234</div>
                      <div>• Case insensitive</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Processing State */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center bg-amber-50 text-amber-800 px-6 py-3 rounded-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full mr-3"
                  />
                  Processing verification...
                </div>
              </motion.div>
            )}

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl"
              >
                <div className="flex items-center text-red-800">
                  <X className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Verification Error</span>
                </div>
                <p className="text-red-700 mt-2">{error}</p>
              </motion.div>
            )}

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <div className={`p-8 border-2 rounded-3xl ${
                  verificationResult.valid
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {verificationResult.valid ? (
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <FileCheck className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                          <X className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <div>
                        <h3 className={`text-2xl font-bold ${
                          verificationResult.valid ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {verificationResult.valid ? 'Certificate Verified ✓' : 'Invalid Certificate ✗'}
                        </h3>
                        <p className={`${
                          verificationResult.valid ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {verificationResult.valid 
                            ? 'This certificate is authentic and tamper-proof'
                            : 'This certificate could not be verified'
                          }
                        </p>
                      </div>
                    </div>
                    
                    {verificationResult.valid && (
                      <button
                        onClick={downloadReport}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Report
                      </button>
                    )}
                  </div>

                  {verificationResult.valid && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <FileCheck className="w-5 h-5 mr-2 text-green-600" />
                          Certificate Details
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">ID:</span>
                            <span className="ml-2 text-gray-600 font-mono">{verificationResult.certificateId}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Method:</span>
                            <span className="ml-2 text-gray-600">{verificationResult.method}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Device:</span>
                            <span className="ml-2 text-gray-600">{verificationResult.device}</span>
                          </div>
                          {verificationResult.duration && (
                            <div>
                              <span className="font-medium text-gray-700">Duration:</span>
                              <span className="ml-2 text-gray-600">{verificationResult.duration}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-600" />
                          Operation Details
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Date:</span>
                            <span className="ml-2 text-gray-600">
                              {new Date(verificationResult.wipedDate).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                          {verificationResult.operator && (
                            <div>
                              <span className="font-medium text-gray-700">Operator:</span>
                              <span className="ml-2 text-gray-600">{verificationResult.operator}</span>
                            </div>
                          )}
                          {verificationResult.organization && (
                            <div>
                              <span className="font-medium text-gray-700">Organization:</span>
                              <span className="ml-2 text-gray-600">{verificationResult.organization}</span>
                            </div>
                          )}
                          {verificationResult.location && (
                            <div>
                              <span className="font-medium text-gray-700">Location:</span>
                              <span className="ml-2 text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {verificationResult.location}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-purple-600" />
                          Compliance & Security
                        </h4>
                        <div className="space-y-3 text-sm">
                          {verificationResult.compliance && (
                            <div>
                              <span className="font-medium text-gray-700">Standards:</span>
                              <div className="mt-2 space-y-1">
                                {verificationResult.compliance.map((standard, index) => (
                                  <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-gray-600">{standard}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {verificationResult.hash && (
                            <div>
                              <span className="font-medium text-gray-700">Hash:</span>
                              <span className="ml-2 text-gray-600 font-mono text-xs break-all">
                                {verificationResult.hash}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={resetVerification}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Verify Another Certificate
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-800">SSL Secured</div>
              <div className="text-sm text-gray-600">256-bit encryption</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-800">NIST Compliant</div>
              <div className="text-sm text-gray-600">SP 800-88 standards</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-800">Real-time</div>
              <div className="text-sm text-gray-600">Instant verification</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <QrCode className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-800">Tamper-proof</div>
              <div className="text-sm text-gray-600">QR verification</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationPortal;