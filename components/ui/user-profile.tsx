import { User } from 'lucide-react';
import { getUserProfile } from '@/services/actions/user-profile';
export async function UserProfile() {
  const user = await getUserProfile();

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
