import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import WindowsDownload from './pages/WindowsDownload';
import LinuxDownload from './pages/LinuxDownload';
import ISODownload from './pages/ISODownload';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import DocsPage from './pages/DocsPage';
import VerifyPage from './pages/VerifyPage';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Preload video and other assets
    const video = document.createElement('video');
    video.src = 'https://raw.githubusercontent.com/Zenoguy/E2X-fontend/main/Futuristic_Data_Wipe_Animation.webm';
    video.preload = 'auto';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <AuthProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/download/windows" 
              element={
                <ProtectedRoute>
                  <WindowsDownload />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/download/linux" 
              element={
                <ProtectedRoute>
                  <LinuxDownload />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/download/iso" 
              element={
                <ProtectedRoute>
                  <ISODownload />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  );
}

export default App;