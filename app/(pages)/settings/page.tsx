import { Separator } from '@/components/ui/separator';
import { UserCheck } from 'lucide-react';
import { Metadata } from 'next';
import { ButtonClearData } from './button-clear-data';

export const metadata: Metadata = {
  title: 'Configuração - Arkstone',
  description: 'Configuração para Arkstone',
};

export default async function ProfilePage() {
  return (
    <div className='grid gap-8 mt-10'>
      <header>
        <h2 className='text-4xl font-bold text-primary flex items-center gap-2'>
          <UserCheck className='size-6 text-slate-700' />
          Configuração
        </h2>
        <Separator className='mt-2' />
      </header>

      <section className='grid lg:grid-cols-[1fr_2fr] gap-4 mt-4 px-4 md:px-0'>
        <p>Clique no botão abaixo para limpar todos os dados do sistema.</p>
        <div className='flex flex-col gap-4 w-[200px]'>
          <ButtonClearData />
        </div>
      </section>
    </div>
  );
}
