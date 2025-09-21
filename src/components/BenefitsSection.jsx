@@ .. @@
-        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
+        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {benefits.map((benefit, index) => (
             <motion.div
@@ .. @@
               whileHover={{ y: -10, scale: 1.02 }}
-              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
+              className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
             >
@@ .. @@
-            <div className="grid md:grid-cols-2 gap-8 mt-8">
+            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="text-center"