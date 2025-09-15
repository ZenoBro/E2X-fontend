import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToTools = () => {
    const element = document.getElementById('tools');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://raw.githubusercontent.com/Zenoguy/E2X-fontend/main/Futuristic_Data_Wipe_Animation.webm" 
            type="video/webm" 
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            E2X
          </h1>
          <h2 className="text-2xl md:text-4xl text-amber-400 mb-6 font-semibold">
            Erase 2 Extinction
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Secure and Auditable Data Wiping Tool
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={scrollToTools}
            className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Solutions
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;