'use client';
import { useManageQuotations } from '@/providers/manage-quotations-provider';
import { Quotation } from '@/repository/bookmark';

type AddToListButtonProps = {
  children: React.ReactNode;
  quotation: Quotation;
};

export function AddToListButton({ children, quotation }: AddToListButtonProps) {
  const { addCotationToBookmarks } = useManageQuotations();

  return (
    <button
      onClick={() => addCotationToBookmarks(quotation)}
      className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'
    >
      {children}
    </button>
  );
}
