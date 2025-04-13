import { HeaderFeatured } from './components/header-featured';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartNoAxesCombined, MoveDownLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Quotations } from './components/quotations';
import { getCurrency } from '@/services/currency';
import { BookMark } from './components/bookmark/bookmark';
import { Chart } from './components/chart/chart';
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

      <section className='grid lg:grid-cols-[1fr_2fr] gap-4 px-4 md:px-0'>
        <BookMark />
        <Chart />
      </section>

      <Quotations />
    </>
  );
}
