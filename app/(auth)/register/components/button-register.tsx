'use client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
export function ButtonRegister({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      className='w-full cursor-pointer'
      {...props}
      disabled={pending}
    >
      {pending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
      {children}
    </Button>
  );
}
