'use client';
import { getUserToken } from '@/http/get-user-token';
import { getUserById, User } from '@/http/user';
import { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function gUser() {
      const token = await getUserToken();
      const user = await getUserById(token?.userId as string);
      setUser(user);
    }

    if (!user) {
      gUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
