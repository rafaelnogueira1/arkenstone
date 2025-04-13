'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { createContext, ReactNode, useContext, useState } from 'react';

export type Quotation = {
  name: string;
  variation: number;
  points?: number;
  buy?: number;
  sell?: number;
};

export type QuotationWithChartData = Quotation & {
  data: {
    month: string;
    value: number;
  }[];
};

type ManageQuotationsContextType = {
  myCotationsList: Quotation[];
  addMyCotationsList: (quotation: Quotation) => void;
  removeMyCotationsList: (quotation: Quotation) => void;
  openCotationChart: QuotationWithChartData | null;
  handleShowDataOnChart: (quotation: Quotation) => void;
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

  const addMyCotationsList = (quotation: Quotation) => {
    const quotationExists = myCotationsList.find(
      (item) => item.name === quotation.name
    );

    if (quotationExists) {
      setIsOpenAlertItemAlreadyExists(true);
    } else {
      setMyCotationsList([...myCotationsList, quotation]);
    }
  };

  const removeMyCotationsList = (quotation: Quotation) => {
    setMyCotationsList(
      myCotationsList.filter((item) => item.name !== quotation.name)
    );
  };

  const handleShowDataOnChart = (quotation: Quotation) => {
    const data = [
      {
        month: '08/04',
        value: 105588.09,
      },
      {
        month: '09/04',
        value: 125590.77,
      },
      {
        month: '10/04',
        value: 125590.77,
      },
      {
        month: '11/04',
        value: 95590.77,
      },
    ];

    setOpenCotationChart(Object.assign(quotation, { data }));
  };

  return (
    <ManageQuotationsContext.Provider
      value={{
        myCotationsList,
        addMyCotationsList,
        removeMyCotationsList,
        openCotationChart,
        handleShowDataOnChart,
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
