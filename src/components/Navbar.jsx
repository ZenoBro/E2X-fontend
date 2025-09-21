@@ .. @@
-          <div className="hidden md:flex items-center space-x-8">
+          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
             <Link 
               to="/"
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Home
             </Link>
             <button 
               onClick={() => scrollToSection('benefits')}
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Benefits
             </button>
             <button 
               onClick={() => scrollToSection('tools')}
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Tools
             </button>
             <button 
               onClick={() => handleNavigation('/docs')}
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Docs
             </button>
             <button 
               onClick={() => handleNavigation('/verify')}
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Verify
             </button>
             <button 
               onClick={() => scrollToSection('contact')}
-              className="text-gray-300 hover:text-white transition-colors"
+              className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
             >
               Contact
             </button>
@@ .. @@
                 <div className="relative group">
-                  <button className="flex items-center space-x-2 text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full transition-colors">
+                  <button className="flex items-center space-x-2 text-white bg-amber-600 hover:bg-amber-700 px-3 xl:px-4 py-2 rounded-full transition-colors text-sm xl:text-base">
                     <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">
                       {user?.name?.charAt(0) || 'U'}
                     </div>
-                    <span className="text-sm">{user?.name}</span>
+                    <span className="text-sm hidden xl:inline">{user?.name}</span>
                   </button>
-                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
+                  <div className="absolute right-0 mt-2 w-40 xl:w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                     <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                       Dashboard
                     </Link>
@@ .. @@
                 <div className="flex items-center space-x-2">
                   <Link 
                     to="/login"
-                    className="text-gray-300 hover:text-white transition-colors"
+                    className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
                   >
                     Login
                   </Link>
                   <Link 
                     to="/register"
-                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors"
+                    className="bg-amber-600 hover:bg-amber-700 text-white px-3 xl:px-4 py-2 rounded-full transition-colors text-sm xl:text-base"
                   >
                     Sign Up
                   </Link>
@@ .. @@
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
-            className="md:hidden text-gray-300 hover:text-white"
+            className="lg:hidden text-gray-300 hover:text-white"
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
@@ .. @@
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
-              className="md:hidden bg-slate-800 border-t border-slate-700"
+              className="lg:hidden bg-slate-800 border-t border-slate-700"
             >