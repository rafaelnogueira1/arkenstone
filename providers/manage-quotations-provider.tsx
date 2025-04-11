'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type Quotation = {
  name: string;
  variation: number;
};

type ManageQuotationsContextType = {
  myCotationsList: Quotation[];
  addMyCotationsList: (quotation: Quotation) => void;
  removeMyCotationsList: (quotation: Quotation) => void;
};

const ManageQuotationsContext = createContext<ManageQuotationsContextType>(
  {} as ManageQuotationsContextType
);

const ManageQuotationsProvider = ({ children }: { children: ReactNode }) => {
  const [myCotationsList, setMyCotationsList] = useState<Quotation[]>([]);

  const addMyCotationsList = (quotation: Quotation) => {
    const quotationExists = myCotationsList.find(
      (item) => item.name === quotation.name
    );

    if (quotationExists) {
      alert('Item já existe na lista');
    } else {
      setMyCotationsList([...myCotationsList, quotation]);
    }
  };

  const removeMyCotationsList = (quotation: Quotation) => {
    setMyCotationsList(
      myCotationsList.filter((item) => item.name !== quotation.name)
    );
  };

  return (
    <ManageQuotationsContext.Provider
      value={{ myCotationsList, addMyCotationsList, removeMyCotationsList }}
    >
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
