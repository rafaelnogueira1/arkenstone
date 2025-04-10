import { api_finance } from './api';

export const getStocks = async () => {
  const response = await api_finance.get('stock_price').json();

  return response;
};
