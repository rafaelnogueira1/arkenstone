import { useAuth } from '@/providers/auth';
import {
  QuotationWithChartData,
  useManageQuotations,
} from '@/providers/manage-quotations-provider';
import { Quotation } from '@/repository/bookmark';
import { useEffect, useState } from 'react';

type useChartReturn = {
  isLoading: boolean;
};

function useChart(): useChartReturn {
  const { user } = useAuth();
  const { setOpenCotationChart } = useManageQuotations();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cotationChart = localStorage.getItem(`cotationChart-${user?.id}`);
    setOpenCotationChart(cotationChart ? JSON.parse(cotationChart) : null);

    setIsLoading(false);
  }, [user?.id]);

  return { isLoading };
}

export default useChart;
