import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  organization: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'> & { password: string; phone: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
      organization: 'Tech Corp'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const register = async (userData: Omit<User, 'id'> & { password: string; phone: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser = {
      id: '2',
      name: userData.name,
      email: userData.email,
      organization: userData.organization
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;