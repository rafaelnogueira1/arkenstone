import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuotationTable } from './quotation-table';
export function Quotations() {
  return (
    <section className='grid lg:grid-cols-3 gap-4'>
      <Card className='gap-1 border-sky-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-lg font-bold text-sky-500'>
            Stocks
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1'>
          <QuotationTable quotation={[]} />
        </CardContent>
      </Card>

      <Card className='gap-1 border-cyan-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-lg font-bold text-cyan-500'>
            Currency
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1'>
          <QuotationTable quotation={[]} />
        </CardContent>
      </Card>

      <Card className='gap-1 border-violet-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-lg font-bold text-violet-500'>
            Bitcoin
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1'>
          <QuotationTable quotation={[]} />
        </CardContent>
      </Card>
    </section>
  );
}
