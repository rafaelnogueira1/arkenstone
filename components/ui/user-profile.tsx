'use client';

import { useAuth } from '@/providers/auth';
import { User } from 'lucide-react';

export function UserProfile() {
  const { user } = useAuth();

  return (
    <div className='flex gap-2 items-center'>
      <User className='size-8 text-slate-500' />
      <div className='grid gap-1'>
        <span className='text-sm font-bold'>{user?.name}</span>
        <span className='text-xs text-gray-500'>{user?.email}</span>
      </div>
    </div>
  );
}
