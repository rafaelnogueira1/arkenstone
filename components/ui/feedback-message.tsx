import { cn } from '@/lib/utils';

const variation = {
  success: 'text-green-500 bg-green-50 border-green-300',
  error: 'text-red-500 bg-red-50  border-red-200',
};

type FeedbackMessageProps = {
  children: React.ReactNode;
  type: keyof typeof variation;
  className?: string;
};

export function FeedbackMessage({
  children,
  type,
  className,
}: FeedbackMessageProps) {
  return (
    <p
      className={cn(
        `text-sm p-3 border rounded-md ${variation[type]} ${className}`
      )}
    >
      {children}
    </p>
  );
}
