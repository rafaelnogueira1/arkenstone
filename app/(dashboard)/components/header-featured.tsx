'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MoveUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type Currency = {
  name: string;
  buy: number;
  sell: number | null;
  variation: number;
};

const currencies: Currency[] = [
  {
    name: 'Dollar',
    buy: 5.9468,
    sell: 5.9453,
    variation: 2.202,
  },
  {
    name: 'Euro',
    buy: 6.6598,
    sell: 6.6578,
    variation: 4.522,
  },
  {
    name: 'Argentine Peso',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Peso',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Eurao',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Ruble',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Dolar USD',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Moeda',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Reac',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
  {
    name: 'Real 3',
    buy: 0.0053,
    sell: null,
    variation: 1.923,
  },
];

export function HeaderFeatured() {
  return (
    <div className='py-1 gap-2'>
      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {currencies.map((currency) => (
            <CarouselItem
              key={currency.name}
              className='flex-[0_0_60%] md:flex-[0_0_200px]'
            >
              <div
                key={currency.name}
                className='bg-[#fcfcfc] border border-slate-100 rounded-sm w-fit min-w-[180px] p-2 flex flex-col gap-2'
              >
                <div className='text-primary text-xs font-bold flex justify-between items-center'>
                  <p className='text-ellipsis text-nowrap'>{currency.name}</p>
                  <Badge
                    variant='secondary'
                    className='text-green-700 bg-green-200 ml-6'
                  >
                    <MoveUpRight className='size-4 text-green-700' />
                    {currency.variation}
                  </Badge>
                </div>
                <div className='h-[32px] text-xs flex justify-between'>
                  <span>
                    <span className='text-slate-600 font-semibold'>Compra</span>
                    <br />
                    <span className='text-slate-800 font-semibold'>Venda</span>
                  </span>
                  <Separator
                    orientation='vertical'
                    className='bg-gray-300 mx-3'
                  />
                  <span>
                    <span className='text-slate-600 font-semibold'>
                      {currency.buy}
                    </span>
                    <br />
                    <span className='text-slate-800 font-semibold'>
                      {currency.sell}
                    </span>
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
