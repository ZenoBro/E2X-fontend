import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Download, FileCheck, Shield, TrendingUp, Calendar, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import TiltCard from '../components/TiltCard';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: Download,
      title: 'Downloads',
      value: '12',
      change: '+3 this month',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Certificates',
      value: '8',
      change: '+2 this month',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Devices Wiped',
      value: '45',
      change: '+12 this month',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Success Rate',
      value: '100%',
      change: 'Perfect record',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const recentDownloads = [
    { tool: 'E2X Windows Pro', date: '2024-01-15', status: 'Completed' },
    { tool: 'E2X Linux Pro', date: '2024-01-12', status: 'Completed' },
    { tool: 'E2X Universal ISO', date: '2024-01-10', status: 'Completed' },
  ];

  const recentCertificates = [
    { id: 'E2X-2024-001234', device: 'Dell Latitude 5520', date: '2024-01-15' },
    { id: 'E2X-2024-001233', device: 'HP ProBook 450', date: '2024-01-14' },
    { id: 'E2X-2024-001232', device: 'Lenovo ThinkPad X1', date: '2024-01-12' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
                  <p className="text-gray-300">{user?.organization}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <TiltCard key={index} tiltMaxAngle={8} scale={1.02}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                  <p className="text-green-600 text-xs font-medium">{stat.change}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Downloads */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <Download className="w-5 h-5 mr-2 text-amber-500" />
                Recent Downloads
              </h2>
              <div className="space-y-4">
                {recentDownloads.map((download, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-slate-800">{download.tool}</h3>
                      <p className="text-gray-600 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {download.date}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {download.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Certificates */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <FileCheck className="w-5 h-5 mr-2 text-amber-500" />
                Recent Certificates
              </h2>
              <div className="space-y-4">
                {recentCertificates.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-800">{cert.id}</h3>
                      <span className="text-xs text-gray-500">{cert.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{cert.device}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <TiltCard tiltMaxAngle={8} scale={1.02}>
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white cursor-pointer">
                  <Download className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Download Tools</h3>
                  <p className="text-amber-100 text-sm">Access all E2X wiping tools</p>
                </div>
              </TiltCard>
              
              <TiltCard tiltMaxAngle={8} scale={1.02}>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white cursor-pointer">
                  <FileCheck className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Verify Certificate</h3>
                  <p className="text-green-100 text-sm">Check certificate authenticity</p>
                </div>
              </TiltCard>
              
              <TiltCard tiltMaxAngle={8} scale={1.02}>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white cursor-pointer">
                  <Shield className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Security Report</h3>
                  <p className="text-purple-100 text-sm">View security analytics</p>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;