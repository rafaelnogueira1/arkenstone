import { ReactNode } from 'react';
import ManageQuotationsProvider from './manage-quotations-provider';
import { AuthProvider } from './auth';
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ManageQuotationsProvider>{children}</ManageQuotationsProvider>
    </AuthProvider>
  );
}
