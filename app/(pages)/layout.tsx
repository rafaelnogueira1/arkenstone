import { Header } from '@/components/ui/header';
import { HeaderMobile } from '@/components/ui/header-mobile';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-dvh flex flex-col'>
      <Header />
      <HeaderMobile />
      <main className='w-full max-w-[1400px] mx-auto flex flex-col gap-8 p-1 pb-10 px-4 flex-1'>
        {children}
      </main>
      <footer className='bg-slate-100 py-5 px-4'>
        <p className='text-center text-slate-600 text-xs'>
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
