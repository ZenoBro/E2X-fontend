@@ .. @@
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
-import { Monitor, Terminal, Disc, ArrowRight } from 'lucide-react';
+import { Monitor, Terminal, Disc, Smartphone, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

@@ .. @@
      shadowColor: 'shadow-purple-500/20',
       path: '/download/iso'
+    },
+    {
+      id: 'android',
+      title: 'E2X Android Pro',
+      subtitle: 'Mobile Security Suite',
+      tagline: 'Enterprise Mobile Device Management',
+      icon: Smartphone,
+      features: [
+        'Remote wipe capabilities for lost/stolen devices',
+        'Factory reset with secure data overwrite',
+        'Enterprise mobile device management',
+        'Compliance reporting and audit trails',
+        'Bulk device processing support'
+      ],
+      gradient: 'from-blue-500 to-blue-700',
+      shadowColor: 'shadow-blue-500/20',
+      path: '/download/android'
     }
   ];

@@ .. @@
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           {tools.map((tool, index) => (
             <TiltCard
               key={tool.id}
@@ .. @@
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-8">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="text-center"