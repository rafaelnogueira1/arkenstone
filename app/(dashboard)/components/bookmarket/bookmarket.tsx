import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarketList } from './bookmarket-list';

export function BookMarket() {
  return (
    <div className='w-full'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-primary'>
            Minha Lista
          </CardTitle>
        </CardHeader>
        <CardContent className='grid gap-3 max-h-[400px] overflow-y-auto'>
          <BookMarketList />
        </CardContent>
      </Card>
    </div>
  );
}
