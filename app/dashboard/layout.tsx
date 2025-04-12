import { Header } from '@/components/ui/header';
import { HeaderMobile } from '@/components/ui/header-mobile';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <HeaderMobile />
      {children}
      <footer className='bg-slate-100 py-5 px-4 mt-10'>
        <p className='text-center text-slate-600 text-xs'>
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
}
