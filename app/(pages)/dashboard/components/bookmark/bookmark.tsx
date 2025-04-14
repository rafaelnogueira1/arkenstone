import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarkList } from './bookmark-list';

export function BookMark() {
  return (
    <div className='w-full'>
      <Card>
        <CardHeader>
          <CardTitle className='text-xl font-bold text-primary'>
            Minha Lista
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3 max-h-[400px] overflow-y-auto'>
          <BookMarkList />
        </CardContent>
      </Card>
    </div>
  );
}
