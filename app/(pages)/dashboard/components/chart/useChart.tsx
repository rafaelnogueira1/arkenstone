import { useAuth } from '@/providers/auth';
import { useManageQuotations } from '@/providers/manage-quotations-provider';
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
  }, [user?.id, setOpenCotationChart]);

  return { isLoading };
}

export default useChart;
