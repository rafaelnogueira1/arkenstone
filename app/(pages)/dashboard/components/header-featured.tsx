'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Currency } from '@/http/currency';
import { ShowVariation } from '@/components/ui/show-variations';

export function HeaderFeatured({ currencies }: { currencies: Currency[] }) {
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
                    className={`${
                      currency.variation > 0 ? 'bg-green-200' : 'bg-red-200'
                    }`}
                  >
                    <ShowVariation variation={currency.variation} />
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
