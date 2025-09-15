import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, User, Building, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { login, register: registerUser } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      if (isLogin) {
        await login(data.email, data.password);
      } else {
        await registerUser({
          name: data.name,
          email: data.email,
          organization: data.organization,
          password: data.password,
          phone: data.phone
        });
      }
      reset();
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Auth error:', error);
    }
    setIsLoading(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div className="relative p-8">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-600">
                      {isLogin ? 'Sign in to download tools' : 'Register to access E2X tools'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {!isLogin && (
                      <div>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Full Name"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Email Address"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                      )}
                    </div>

                    {!isLogin && (
                      <>
                        <div>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              {...register('organization', { required: 'Organization is required' })}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              placeholder="Organization"
                            />
                          </div>
                          {errors.organization && (
                            <p className="text-red-500 text-sm mt-1">{errors.organization.message as string}</p>
                          )}
                        </div>

                        <div>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              {...register('phone', { required: 'Phone is required' })}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              placeholder="Phone Number"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                          )}
                        </div>
                      </>
                    )}

                    <div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="password"
                          {...register('password', { 
                            required: 'Password is required',
                            minLength: {
                              value: 6,
                              message: 'Password must be at least 6 characters'
                            }
                          })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Password"
                        />
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-3 px-4 rounded-lg font-semibold transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;