import { UserCheck } from 'lucide-react';
import { ProfileForm } from './profile-form';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Dados - Arkstone',
  description: 'Meus Dados for Arkstone',
};

export default async function ProfilePage() {
  return (
    <div className='grid gap-8 mt-10'>
      <header>
        <h2 className='text-4xl font-bold text-primary flex items-center gap-2'>
          <UserCheck className='size-6 text-slate-700' />
          Meus Dados
        </h2>
        <p className='text-base text-gray-700'>Atualize seus dados</p>
        <Separator className='mt-2' />
      </header>

      <section className='grid lg:grid-cols-[1fr_2fr] gap-4 mt-4 px-4 md:px-0'>
        <ProfileForm />
      </section>
    </div>
  );
}
