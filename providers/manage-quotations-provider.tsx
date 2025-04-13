'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import {
  addBookmark,
  create,
  findById,
  getBookmarks,
  removeBookmark,
} from '@/repository/bookmark';
import { Quotation } from '@/repository/bookmark';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuth } from './auth';

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

    try {
      const bookmarks = findById(user.id);

      if (!bookmarks) {
        create(user.id);
      }

      addBookmark(user.id, quotation);

      setMyCotationsList([...myCotationsList, quotation]);
    } catch (error) {
      setIsOpenAlertItemAlreadyExists(true);
    }
  };

  const showQuotationOnChart = (quotation: Quotation) => {
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

    localStorage.setItem(
      `cotationChart-${user?.id}`,
      JSON.stringify(Object.assign(quotation, { data }))
    );

    setOpenCotationChart(Object.assign(quotation, { data }));
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
