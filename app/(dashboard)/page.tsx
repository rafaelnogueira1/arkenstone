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
import { BookMarket } from './components/bookmarket/bookmarket';
export default async function Home() {
  const currencies = await getCurrency();

  return (
    <main className='w-full max-w-[1400px] mx-auto flex flex-col gap-8 p-1 px-4'>
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
        <BookMarket />

        <Card className='bg-gray-100 flex h-full w-full'>
          <CardHeader className='flex justify-between items-center'>
            <div>
              <CardTitle className='text-2xl'>IBOVESPA</CardTitle>
              <CardDescription>BM&F BOVESPA</CardDescription>
            </div>
            <div className='text-right space-y-1'>
              <p className='font-bold text-gray-800'>1.0832</p>
              <Badge className='text-red-700 bg-red-200'>
                <MoveDownLeft className='size-4 text-red-700' />
                -1.78
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>Gráfico</p>
          </CardContent>
        </Card>
      </section>

      <Quotations />
    </main>
  );
}
