'use client';
import { useManageQuotations } from '@/providers/manage-quotations-provider';

type AddToListButtonProps = {
  children: React.ReactNode;
  quotation: any;
};

export function AddToListButton({ children, quotation }: AddToListButtonProps) {
  const { addMyCotationsList } = useManageQuotations();

  return (
    <button
      onClick={() => addMyCotationsList(quotation)}
      className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
    >
      {children}
    </button>
  );
}
