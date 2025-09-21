@@ .. @@
-        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
+        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           {impacts.map((impact, index) => (
             <motion.div
@@ .. @@
-            <div className="grid md:grid-cols-3 gap-8">
+            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="text-center"