import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getBitcoin } from '@/services/bitcoin';
import { getCurrency } from '@/services/currency';
import { getStocks } from '@/services/stocks';
import { ShowVariation } from '@/components/ui/show-variations';

export async function Quotations() {
  const bitcoin = await getBitcoin();
  const currencies = await getCurrency();
  const stocks = await getStocks();

  return (
    <section className='grid lg:grid-cols-3 gap-4'>
      <Card className='gap-1 border-sky-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-xl font-bold text-sky-500'>
            Stocks
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1 h-[430px] overflow-y-auto'>
          {stocks.map((stock) => (
            <div
              key={stock.name}
              className='flex justify-between items-center not-last:border-b border-input p-3'
            >
              <div>
                <p className='text-base text-sky-800 font-semibold'>
                  {stock.name}
                </p>
                <span className='text-slate-400'>{stock.points}</span>
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center justify-center gap-1 text-green-700 font-semibold'>
                  <ShowVariation variation={stock.variation} />
                </div>
                <button className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'>
                  Salvar
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className='gap-1 border-cyan-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-xl font-bold text-cyan-500'>
            Currency
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1 h-[430px] overflow-y-auto'>
          {currencies.map((stock) => (
            <div
              key={stock.name}
              className='flex justify-between items-center not-last:border-b border-input p-3'
            >
              <div className='grid gap-2'>
                <p className='text-base text-cyan-800 font-semibold'>
                  {stock.name}
                </p>
                <div className='flex gap-2'>
                  <p className='text-slate-400'>
                    Compra <br />
                    Venda <br />
                  </p>
                  <p className='text-slate-600 font-semibold'>
                    {stock.buy} <br />
                    {stock.sell}
                  </p>
                </div>
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center justify-center gap-1 text-green-700 font-semibold'>
                  <ShowVariation variation={stock.variation} />
                </div>
                <button className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'>
                  Salvar
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className='gap-1 border-violet-200'>
        <CardHeader className='py-0 px-3'>
          <CardTitle className='text-xl font-bold text-violet-500'>
            Bitcoin
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1 h-[430px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100'>
          {bitcoin.map((stock) => (
            <div
              key={stock.name}
              className='flex justify-between items-center not-last:border-b border-input p-3'
            >
              <div className='grid gap-2'>
                <p className='text-base text-violet-800 font-semibold'>
                  {stock.name}
                </p>
                <div className='flex gap-2'>
                  <p className='text-slate-400'>
                    Compra <br />
                    Venda <br />
                  </p>
                  <p className='text-slate-600 font-semibold'>
                    {stock.buy} <br />
                    {stock.sell}
                  </p>
                </div>
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center justify-center gap-1 text-green-700 font-semibold'>
                  <ShowVariation variation={stock.variation} />
                </div>
                <button className='text-xs text-slate-900 bg-slate-100 font-semibold uppercase p-2 px-4 rounded-sm cursor-pointer'>
                  Salvar
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
