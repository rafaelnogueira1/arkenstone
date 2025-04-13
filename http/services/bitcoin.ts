import { formatCurrency } from '@/shared/utils/format-currency';
import { api } from '../api/api';

export type Bitcoin = {
  name: string;
  buy: string;
  sell: string;
  variation: number;
};

type BitcoinQuotation = {
  [key: string]: {
    name: string;
    buy: number;
    sell: number;
    variation: number;
    format: string[];
    last: number;
  };
};

type ResponseBitcoin = {
  bitcoin: BitcoinQuotation;
};

export const getBitcoin = async (): Promise<Bitcoin[]> => {
  const response = await api
    .get('finance', {
      searchParams: {
        fields: 'only_results,bitcoin',
      },
    })
    .json<ResponseBitcoin>();

  return Object.values(response.bitcoin).reduce((acc, item) => {
    if (typeof item !== 'object') return [];

    acc.push({
      name: item.name,
      buy: item.buy ? formatCurrency(item.buy, 'BRL', 'pt-BR') : '-',
      sell: item.sell ? formatCurrency(item.sell, 'BRL', 'pt-BR') : '-',
      variation: item.variation || 0,
    });
    return acc;
  }, [] as Bitcoin[]);
};
