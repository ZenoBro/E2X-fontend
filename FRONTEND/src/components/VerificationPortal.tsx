import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Upload, FileCheck, Camera } from 'lucide-react';

const VerificationPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qr' | 'certificate'>('qr');
  const [isScanning, setIsScanning] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleQRScan = () => {
    setIsScanning(true);
    // Simulate QR scanning
    setTimeout(() => {
      setVerificationResult({
        valid: true,
        certificateId: 'E2X-2024-001234',
        wipedDate: '2024-01-15T10:30:00Z',
        method: 'AES-128 Crypto Erase',
        device: 'Dell Latitude 5520'
      });
      setIsScanning(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file verification
      setTimeout(() => {
        setVerificationResult({
          valid: true,
          certificateId: 'E2X-2024-001235',
          wipedDate: '2024-01-14T14:22:00Z',
          method: 'DoD 5220.22-M',
          device: 'HP ProBook 450'
        });
      }, 1500);
    }
  };

  return (
    <section id="verification" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Certificate Verification Portal
          </h2>
          <p className="text-xl text-gray-600">
            Verify the authenticity of your data wiping certificates instantly
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === 'qr'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <QrCode className="inline-block w-5 h-5 mr-2" />
              QR Code Scanner
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                activeTab === 'certificate'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Upload className="inline-block w-5 h-5 mr-2" />
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
                  <div className="w-64 h-64 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    {isScanning ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full"
                      />
                    ) : (
                      <Camera className="w-24 h-24 text-gray-400" />
                    )}
                  </div>
                  <button
                    onClick={handleQRScan}
                    disabled={isScanning}
                    className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all disabled:opacity-50"
                  >
                    {isScanning ? 'Scanning...' : 'Start QR Scan'}
                  </button>
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
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-6">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Upload Certificate File
                  </p>
                  <p className="text-gray-600 mb-6">
                    Drag and drop your certificate file here, or click to browse
                  </p>
                  <label className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition-all">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                <p className="text-gray-600">
                  Accepted formats: PDF, JPG, PNG
                </p>
              </motion.div>
            )}

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <FileCheck className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Certificate Verified ✓
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Certificate ID:</span>
                    <span className="ml-2 text-gray-600">{verificationResult.certificateId}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Wiped Date:</span>
                    <span className="ml-2 text-gray-600">
                      {new Date(verificationResult.wipedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Method:</span>
                    <span className="ml-2 text-gray-600">{verificationResult.method}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Device:</span>
                    <span className="ml-2 text-gray-600">{verificationResult.device}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationPortal;