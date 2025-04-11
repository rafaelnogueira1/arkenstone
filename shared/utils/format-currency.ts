export const formatCurrency = (
  value: number,
  currency: 'BRL',
  locale: 'pt-BR'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};
