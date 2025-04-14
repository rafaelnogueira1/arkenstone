export const generateChartData = (variation: number) => {
  const days = 10;
  const today = new Date();
  const data = [];
  let baseValue = 100000;

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - (days - i - 1));

    const dailyChange = (Math.random() - 10) * Math.abs(variation) * 2;
    baseValue = baseValue * (1 + dailyChange / 100);

    data.push({
      month: date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
      value: Number(baseValue.toFixed(2)),
    });
  }

  return data;
};
