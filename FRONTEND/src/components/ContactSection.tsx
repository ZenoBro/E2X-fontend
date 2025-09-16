import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import TiltCard from './TiltCard';

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log('Contact form data:', data);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      reset();
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Ready to secure your data? We're here to help you choose the right solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <TiltCard
            className="h-fit"
            tiltMaxAngle={8}
            scale={1.02}
          >
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">contact@e2x.in</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+91 XXXXX XXXXX</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">Address Placeholder<br />City, State, PIN</div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <span className="text-white text-sm">Li</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <span className="text-white text-sm">Tw</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="#" 
                  className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <span className="text-white text-sm">Gh</span>
                </motion.a>
              </div>
            </div>
            </motion.div>
          </TiltCard>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 border border-white/20 focus:border-amber-500 transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message as string}</p>
                  )}
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 border border-white/20 focus:border-amber-500 transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message as string}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 border border-white/20 focus:border-amber-500 transition-all"
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message as string}</p>
                )}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none border border-white/20 focus:border-amber-500 transition-all"
                  placeholder="Tell us about your data wiping needs..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message as string}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center shadow-lg hover:shadow-amber-500/25"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;