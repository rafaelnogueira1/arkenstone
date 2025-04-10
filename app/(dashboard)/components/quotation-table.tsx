import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type QuotationTableProps<T> = {
  quotation: T[];
};

export function QuotationTable<T>({ quotation }: QuotationTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-gray-600 w-[100px]'>Name</TableHead>
          <TableHead className='text-gray-600'>Compra</TableHead>
          <TableHead className='text-gray-600'>Venda</TableHead>
          <TableHead className='text-gray-600'>Variação</TableHead>
          <TableHead className='text-gray-600 text-right'>Salvar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='bg-slate-50 even:bg-slate-100 text-gray-600'>
          <TableCell className='font-semibold text-gray-900'>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell className='text-right'></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
