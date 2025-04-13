'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { useManageQuotations } from '@/providers/manage-quotations-provider';
import { ShowVariation } from '@/components/ui/show-variations';

const chartConfig = {
  value: {
    label: 'Valor',
    color: '#34d399',
  },
} satisfies ChartConfig;

export function Chart() {
  const { openCotationChart } = useManageQuotations();

  return (
    <Card className='bg-slate-50 flex h-[508px] w-full'>
      {!openCotationChart ? (
        <div className='text-lg text-slate-700 bg-slate-50 p-4 rounded-md'>
          Selecione uma cotação para ver o gráfico
        </div>
      ) : (
        <>
          <CardHeader className='flex justify-between items-center'>
            <div>
              <CardTitle className='text-xl'>
                {openCotationChart?.name}
              </CardTitle>
            </div>
            <div className='text-right space-y-1'>
              <Badge
                className={`${
                  openCotationChart?.variation > 0
                    ? 'bg-green-200'
                    : 'bg-red-200'
                }`}
              >
                <ShowVariation variation={openCotationChart?.variation} />
              </Badge>
            </div>
          </CardHeader>
          <CardContent className='h-[400px]'>
            <ChartContainer
              config={chartConfig}
              className='min-h-[200px] max-h-full w-full'
            >
              <BarChart accessibilityLayer data={openCotationChart.data}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey='value' fill='var(--color-value)' radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </>
      )}
    </Card>
  );
}
