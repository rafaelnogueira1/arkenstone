'use client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function ButtonSaveData({
  children,
  isPending,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { isPending?: boolean }) {
  return (
    <Button
      type='submit'
      className='w-full cursor-pointer'
      {...props}
      disabled={isPending}
    >
      {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
      {children}
    </Button>
  );
}
