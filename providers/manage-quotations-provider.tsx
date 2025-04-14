'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Quotation } from '@/repository/bookmark';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useAuth } from './auth';
import {
  addNewCotationToBookmark,
  getCotationOnBookmark,
} from '@/http/bookmark';
import { generateChartData } from '@/shared/utils/generate-char-data';

export type QuotationWithChartData = Quotation & {
  data: {
    month: string;
    value: number;
  }[];
};

type ManageQuotationsContextType = {
  myCotationsList: Quotation[];
  setMyCotationsList: (quotation: Quotation[]) => void;
  addCotationToBookmarks: (quotation: Quotation) => void;
  openCotationChart: QuotationWithChartData | null;
  setOpenCotationChart: (quotation: QuotationWithChartData | null) => void;
  showQuotationOnChart: (quotation: Quotation) => void;
};

const ManageQuotationsContext = createContext<ManageQuotationsContextType>(
  {} as ManageQuotationsContextType
);

const ManageQuotationsProvider = ({ children }: { children: ReactNode }) => {
  const [myCotationsList, setMyCotationsList] = useState<Quotation[]>([]);
  const [isOpenAlertItemAlreadyExists, setIsOpenAlertItemAlreadyExists] =
    useState(false);
  const [openCotationChart, setOpenCotationChart] =
    useState<QuotationWithChartData | null>(null);
  const { user } = useAuth();

  const addCotationToBookmarks = (quotation: Quotation) => {
    if (!user?.id) return;

    const { success } = getCotationOnBookmark({
      id: user?.id,
      name: quotation.name,
    });

    if (success) {
      setIsOpenAlertItemAlreadyExists(true);
      return;
    }

    addNewCotationToBookmark({ id: user?.id, quotation });
    setMyCotationsList([...myCotationsList, quotation]);
  };

  const showQuotationOnChart = (quotation: Quotation) => {
    const chartData = generateChartData(quotation.variation);
    const quotationWithChart = { ...quotation, data: chartData };

    localStorage.setItem(
      `cotationChart-${user?.id}`,
      JSON.stringify(Object.assign(quotationWithChart))
    );

    setOpenCotationChart(Object.assign(quotationWithChart));
  };

  return (
    <ManageQuotationsContext.Provider
      value={{
        addCotationToBookmarks,
        myCotationsList,
        setMyCotationsList,
        openCotationChart,
        setOpenCotationChart,
        showQuotationOnChart,
      }}
    >
      {isOpenAlertItemAlreadyExists && (
        <AlertDialog
          open={isOpenAlertItemAlreadyExists}
          onOpenChange={setIsOpenAlertItemAlreadyExists}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Item já existe na lista</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className='cursor-pointer'
                onClick={() => setIsOpenAlertItemAlreadyExists(false)}
              >
                Fechar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {children}
    </ManageQuotationsContext.Provider>
  );
};

export default ManageQuotationsProvider;

export const useManageQuotations = () => {
  const context = useContext(ManageQuotationsContext);
  if (!context) {
    throw new Error(
      'useManageQuotations must be used within a ManageQuotationsProvider'
    );
  }
  return context;
};
