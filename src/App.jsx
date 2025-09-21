@@ .. @@
import WindowsDownload from './pages/WindowsDownload';
import LinuxDownload from './pages/LinuxDownload';
import ISODownload from './pages/ISODownload';
+import AndroidDownload from './pages/AndroidDownload';
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

@@ .. @@
  return (
     <AuthProvider>
       <Router>
-        <AnimatePresence mode="wait">
+        <AnimatePresence mode="wait" initial={false}>
           <Routes>
-            <Route path="/" element={<LandingPage />} />
-            <Route path="/login" element={<LoginPage />} />
-            <Route path="/register" element={<RegisterPage />} />
-            <Route path="/docs" element={<DocsPage />} />
-            <Route path="/verify" element={<VerifyPage />} />
+            <Route 
+              path="/" 
+              element={
+                <motion.div
+                  key="landing"
+                  initial={{ opacity: 0, y: 20 }}
+                  animate={{ opacity: 1, y: 0 }}
+                  exit={{ opacity: 0, y: -20 }}
+                  transition={{ duration: 0.3 }}
+                >
+                  <LandingPage />
+                </motion.div>
+              } 
+            />
+            <Route 
+              path="/login" 
+              element={
+                <motion.div
+                  key="login"
+                  initial={{ opacity: 0, scale: 0.95 }}
+                  animate={{ opacity: 1, scale: 1 }}
+                  exit={{ opacity: 0, scale: 1.05 }}
+                  transition={{ duration: 0.3 }}
+                >
+                  <LoginPage />
+                </motion.div>
+              } 
+            />
+            <Route 
+              path="/register" 
+              element={
+                <motion.div
+                  key="register"
+                  initial={{ opacity: 0, scale: 0.95 }}
+                  animate={{ opacity: 1, scale: 1 }}
+                  exit={{ opacity: 0, scale: 1.05 }}
+                  transition={{ duration: 0.3 }}
+                >
+                  <RegisterPage />
+                </motion.div>
+              } 
+            />
+            <Route 
+              path="/docs" 
+              element={
+                <motion.div
+                  key="docs"
+                  initial={{ opacity: 0, x: 50 }}
+                  animate={{ opacity: 1, x: 0 }}
+                  exit={{ opacity: 0, x: -50 }}
+                  transition={{ duration: 0.3 }}
+                >
+                  <DocsPage />
+                </motion.div>
+              } 
+            />
+            <Route 
+              path="/verify" 
+              element={
+                <motion.div
+                  key="verify"
+                  initial={{ opacity: 0, y: 30 }}
+                  animate={{ opacity: 1, y: 0 }}
+                  exit={{ opacity: 0, y: -30 }}
+                  transition={{ duration: 0.3 }}
+                >
+                  <VerifyPage />
+                </motion.div>
+              } 
+            />
             <Route 
               path="/dashboard" 
               element={
                 <ProtectedRoute>
-                  <Dashboard />
+                  <motion.div
+                    key="dashboard"
+                    initial={{ opacity: 0, scale: 0.98 }}
+                    animate={{ opacity: 1, scale: 1 }}
+                    exit={{ opacity: 0, scale: 1.02 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    <Dashboard />
+                  </motion.div>
                 </ProtectedRoute>
               } 
             />
@@ .. @@
               path="/download/windows" 
               element={
                 <ProtectedRoute>
-                  <WindowsDownload />
+                  <motion.div
+                    key="windows-download"
+                    initial={{ opacity: 0, x: -30 }}
+                    animate={{ opacity: 1, x: 0 }}
+                    exit={{ opacity: 0, x: 30 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    <WindowsDownload />
+                  </motion.div>
                 </ProtectedRoute>
               } 
             />
@@ .. @@
               path="/download/linux" 
               element={
                 <ProtectedRoute>
-                  <LinuxDownload />
+                  <motion.div
+                    key="linux-download"
+                    initial={{ opacity: 0, x: -30 }}
+                    animate={{ opacity: 1, x: 0 }}
+                    exit={{ opacity: 0, x: 30 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    <LinuxDownload />
+                  </motion.div>
                 </ProtectedRoute>
               } 
             />
@@ .. @@
               path="/download/iso" 
               element={
                 <ProtectedRoute>
-                  <ISODownload />
+                  <motion.div
+                    key="iso-download"
+                    initial={{ opacity: 0, x: -30 }}
+                    animate={{ opacity: 1, x: 0 }}
+                    exit={{ opacity: 0, x: 30 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    <ISODownload />
+                  </motion.div>
+                </ProtectedRoute>
+              } 
+            />
+            <Route 
+              path="/download/android" 
+              element={
+                <ProtectedRoute>
+                  <motion.div
+                    key="android-download"
+                    initial={{ opacity: 0, x: -30 }}
+                    animate={{ opacity: 1, x: 0 }}
+                    exit={{ opacity: 0, x: 30 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    <AndroidDownload />
+                  </motion.div>
                 </ProtectedRoute>
               } 
             />