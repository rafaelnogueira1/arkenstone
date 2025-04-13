import { api } from '../api/api';

type Stocks = {
  name: string;
  points: number;
  variation: number;
};

type ResponseStocks = {
  stocks: Stocks[];
};

export const getStocks = async (): Promise<Stocks[]> => {
  const response = await api
    .get<ResponseStocks>('finance', {
      searchParams: {
        array_limit: '1',
        fields: 'only_results,stocks',
      },
    })
    .json();

  return Object.values(response.stocks).reduce((acc, item) => {
    if (typeof item !== 'object') return [];

    acc.push({
      name: item.name,
      points: item.points || 0,
      variation: item.variation || 0,
    });
    return acc;
  }, [] as Stocks[]);
};
