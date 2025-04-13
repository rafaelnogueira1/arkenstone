import { formatCurrency } from '@/shared/utils/format-currency';
import { api } from '../api/api';

export type Currency = {
  name: string;
  buy: string;
  sell: string;
  variation: number;
};

type CurrencyQuotation = {
  [key: string]: {
    name: string;
    buy: number;
    sell: number;
    variation: number;
    format: string[];
    last: number;
  };
};

type ResponseCurrency = {
  currencies: CurrencyQuotation;
};

export const getCurrency = async (): Promise<Currency[]> => {
  const response = await api
    .get<ResponseCurrency>('finance', {
      searchParams: {
        array_limit: '1',
        fields: 'only_results,currencies',
      },
    })
    .json();

  return Object.values(response.currencies).reduce((acc, item) => {
    if (typeof item !== 'object') return [];

    acc.push({
      name: item.name,
      buy: item.buy ? formatCurrency(item.buy, 'BRL', 'pt-BR') : '-',
      sell: item.sell ? formatCurrency(item.sell, 'BRL', 'pt-BR') : '-',
      variation: item.variation || 0,
    });

    return acc;
  }, [] as Currency[]);
};
