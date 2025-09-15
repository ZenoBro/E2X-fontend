import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Recycle, Award, Lock, FileCheck } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Build confidence in device recycling",
      description: "Eliminate the fear of data breaches with military-grade security standards"
    },
    {
      icon: Lock,
      title: "Eliminate data breach fears",
      description: "NIST SP 800-88 compliant data destruction with verifiable certificates"
    },
    {
      icon: Award,
      title: "NIST SP 800-88 compliant security",
      description: "Industry-standard security protocols trusted by governments worldwide"
    },
    {
      icon: FileCheck,
      title: "Tamper-proof certificates",
      description: "QR-coded verification system ensuring authenticity and traceability"
    },
    {
      icon: Recycle,
      title: "Support India's circular economy",
      description: "Enable safe device recycling and reduce environmental impact"
    },
    {
      icon: TrendingUp,
      title: "Unlock economic potential",
      description: "Release ₹50,000 crore worth of trapped IT assets back into circulation"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Transforming Data Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            India hoards <span className="font-semibold text-amber-600">₹50,000 crore worth of IT assets</span> due to data security fears. 
            We're changing that with verifiable, secure data wiping solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Problem We Solve
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Organizations refuse to recycle devices, creating massive e-waste and economic loss
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">1.75M</div>
                <div className="text-gray-300">Tonnes of annual e-waste in India</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">₹50,000 Cr</div>
                <div className="text-gray-300">Worth of hoarded IT assets</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;