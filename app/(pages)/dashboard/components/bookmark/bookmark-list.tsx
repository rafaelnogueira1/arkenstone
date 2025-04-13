'use client';

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShowVariation } from '@/components/ui/show-variations';
import { useManageQuotations } from '@/providers/manage-quotations-provider';
import { Fragment, useState } from 'react';

export function BookMarkList() {
  const { myCotationsList, removeMyCotationsList, handleShowDataOnChart } =
    useManageQuotations();
  const [isOpenAlertConfirmation, setIsOpenAlertConfirmation] = useState(false);

  return (
    <>
      {myCotationsList.length === 0 && (
        <div className='text-lg text-slate-700 bg-slate-50 p-4 rounded-md'>
          Adicione uma cotação a sua lista!
        </div>
      )}

      {myCotationsList.map((quotation, index) => (
        <Fragment key={quotation.name}>
          <div>
            <div className='flex justify-between gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                  <p className='text-sm font-bold uppercase text-gray-900'>
                    {quotation.name}
                  </p>
                  <Badge
                    className={`${
                      quotation.variation > 0 ? 'bg-green-200' : 'bg-red-200'
                    }`}
                  >
                    <ShowVariation variation={quotation.variation} />
                  </Badge>
                </div>
                {quotation.buy && quotation.sell && (
                  <p className='text-xs text-slate-600'>
                    Compra - {quotation.buy} <br />
                    Venda - {quotation.sell}
                  </p>
                )}
                {quotation.points && (
                  <p className='text-sm text-slate-600'>{quotation.points}</p>
                )}
              </div>

              <div className='flex flex-col gap-3 items-end'>
                <button
                  onClick={() => handleShowDataOnChart(quotation)}
                  className='text-xs text-slate-900 bg-slate-50 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
                >
                  Ver gráfico
                </button>
                <button
                  onClick={() => {
                    setIsOpenAlertConfirmation(true);
                  }}
                  className='text-xs text-slate-900 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
                >
                  Remover
                </button>
              </div>
            </div>
            {index !== myCotationsList.length - 1 && (
              <Separator className='mt-3' />
            )}
          </div>

          {isOpenAlertConfirmation && (
            <AlertDialog
              open={isOpenAlertConfirmation}
              onOpenChange={setIsOpenAlertConfirmation}
            >
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Deseja remover este item da lista?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className='cursor-pointer'>
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => removeMyCotationsList(quotation)}
                    className='bg-red-500 hover:bg-red-600 cursor-pointer'
                  >
                    Remover
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </Fragment>
      ))}
    </>
  );
}
