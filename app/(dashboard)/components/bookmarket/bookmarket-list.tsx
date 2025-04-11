'use client';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShowVariation } from '@/components/ui/show-variations';
import { useManageQuotations } from '@/providers/manage-quotations-provider';

export function BookMarketList() {
  const { myCotationsList, removeMyCotationsList } = useManageQuotations();

  return (
    <>
      {myCotationsList.length === 0 && (
        <div className='text-lg text-slate-700 bg-slate-50 p-4 rounded-md'>
          Adicione uma cotação a sua lista!
        </div>
      )}

      {myCotationsList.map((stock, index) => (
        <div key={stock.name}>
          <div className='flex flex-col gap-2'>
            <p className='text-base font-bold uppercase text-gray-900'>
              {stock.name}
            </p>
            <div className='flex justify-between items-center'>
              <Badge
                className={`${
                  stock.variation > 0 ? 'bg-green-200' : 'bg-red-200'
                }`}
              >
                <ShowVariation variation={stock.variation} />
              </Badge>
              <div className='flex gap-2'>
                <button
                  onClick={() => null}
                  className='text-xs text-slate-900 bg-slate-200 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
                >
                  Ver gráfico
                </button>
                <button
                  onClick={() => removeMyCotationsList(stock)}
                  className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
          {index !== myCotationsList.length - 1 && (
            <Separator className='mt-3' />
          )}
        </div>
      ))}
    </>
  );
}
