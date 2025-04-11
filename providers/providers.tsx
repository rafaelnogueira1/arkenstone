import { ReactNode } from 'react';
import ManageQuotationsProvider from './manage-quotations-provider';

export default function Providers({ children }: { children: ReactNode }) {
  return <ManageQuotationsProvider>{children}</ManageQuotationsProvider>;
}
