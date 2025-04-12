export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className='text-red-500 text-sm italic'>{children}</p>;
}
