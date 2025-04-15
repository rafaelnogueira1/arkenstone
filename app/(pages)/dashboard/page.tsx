import { HeaderFeatured } from './components/header-featured';
import { ChartNoAxesCombined } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Quotations } from './components/quotations';
import { getCurrency } from '@/http/currency';
import { BookMark } from './components/bookmark/bookmark';
import { Chart } from './components/chart/chart';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dashboard - Arkstone',
};

export default async function Home() {
  const currencies = await getCurrency();

  return (
    <>
      <HeaderFeatured currencies={currencies} />
      <header>
        <h2 className='text-4xl font-bold text-primary flex items-center gap-2'>
          <ChartNoAxesCombined className='size-6 text-slate-700' />
          Dashboard
        </h2>
        <p className='text-base text-gray-700'>Visão geral dos seus negócios</p>
        <Separator className='mt-2' />
      </header>

      <section className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 px-4 md:px-0'>
        <BookMark />
        <Chart />
      </section>

      <Quotations />
    </>
  );
}
