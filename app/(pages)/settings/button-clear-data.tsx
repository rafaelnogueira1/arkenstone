'use client';

import { Button } from '@/components/ui/button';
import { clearSession } from './clear-session';

export function ButtonClearData() {
  const handleClearData = () => {
    localStorage.clear();
    clearSession();
  };

  return (
    <Button variant='destructive' onClick={handleClearData}>
      Limpar dados
    </Button>
  );
}
