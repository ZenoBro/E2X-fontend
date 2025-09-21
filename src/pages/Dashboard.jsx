@@ .. @@
           {/* Stats Grid */}
-          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
+          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
             {stats.map((stat, index) => (
@@ .. @@
-          <div className="grid lg:grid-cols-2 gap-8">
+          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
             {/* Recent Downloads */}
             <motion.div
@@ .. @@
-            <div className="grid md:grid-cols-3 gap-6">
+            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
               <TiltCard tiltMaxAngle={8} scale={1.02}>