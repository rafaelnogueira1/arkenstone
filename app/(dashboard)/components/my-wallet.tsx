import { MoveUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveDownLeft } from 'lucide-react';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ShowVariation } from '@/components/ui/show-variations';

type Stock = {
  id: string;
  name: string;
  location: string;
  points: number;
  variation: number;
};

const stocks: Stock[] = [
  {
    id: 'IBOVESPA',
    name: 'BM&F BOVESPA',
    location: 'Sao Paulo, Brazil',
    points: 125514.87,
    variation: -1.78,
  },
  {
    id: 'IFIX',
    name: 'Índice de Fundos de Investimentos Imobiliários B3',
    location: 'Sao Paulo, Brazil',
    points: 3247.62,
    variation: 0.03,
  },
  {
    id: 'NASDAQ',
    name: 'NASDAQ Stock Market',
    location: 'New York City, United States',
    points: 15943.94,
    variation: -6.9,
  },
  {
    id: 'DOWJONES',
    name: 'Dow Jones Industrial Average',
    location: 'New York City, United States',
    points: 38575.92,
    variation: -5.01,
  },
  {
    id: 'CAC',
    name: 'CAC 40',
    location: 'Paris, French',
    points: 7126.02,
    variation: 3.83,
  },
  {
    id: 'NIKKEI',
    name: 'Nikkei 225',
    location: 'Tokyo, Japan',
    points: 34609.0,
    variation: 9.13,
  },
];

export async function MyWallet() {
  return (
    <div className='w-full'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-primary'>
            Minha Carteira
          </CardTitle>
        </CardHeader>
        <CardContent className='grid gap-3'>
          {stocks.map((stock, index) => (
            <div key={stock.id}>
              <div className='text-base flex justify-between items-center'>
                <p className='leading-5'>
                  <span className='font-bold uppercase text-gray-900'>
                    {stock.id}
                  </span>
                  <br />
                  <span className='text-xs text-gray-500'>{stock.name}</span>
                </p>
                <div className='text-right space-y-1'>
                  <p className='font-bold text-gray-800'>{stock.points}</p>
                  <Badge
                    className={`${
                      stock.variation > 0 ? 'bg-green-200' : 'bg-red-200'
                    }`}
                  >
                    <ShowVariation variation={stock.variation} />
                  </Badge>
                </div>
              </div>
              {index !== stocks.length - 1 && <Separator className='mt-3' />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
