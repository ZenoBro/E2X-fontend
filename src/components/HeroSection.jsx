@@ .. @@
-          <motion.div
-            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
+          <motion.p 
+            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.8 }}
           >
             Secure and Auditable Data Wiping Tool
-          </motion.p>
+          </motion.p>
         </motion.div>

         <motion.div
@@ .. @@
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.8 }}
-          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
+          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
         >
           <button
             onClick={scrollToTools}
-            className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 hover:-translate-y-1"
+            className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
           >
             Explore Solutions
             <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
@@ .. @@
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
-            className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
+            className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 w-full sm:w-auto"
           >
             <Play className="w-5 h-5" />
             <span>Watch Demo</span>