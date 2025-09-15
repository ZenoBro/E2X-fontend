import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WindowsDownload from './pages/WindowsDownload';
import LinuxDownload from './pages/LinuxDownload';
import ISODownload from './pages/ISODownload';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/download/windows" element={<WindowsDownload />} />
            <Route path="/download/linux" element={<LinuxDownload />} />
            <Route path="/download/iso" element={<ISODownload />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;