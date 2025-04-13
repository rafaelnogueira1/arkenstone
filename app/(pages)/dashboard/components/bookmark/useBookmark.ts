import { getBookmarks, removeBookmark } from '@/repository/bookmark';

import { useAuth } from '@/providers/auth';
import { Quotation } from '@/repository/bookmark';
import { useEffect, useState } from 'react';
import { useManageQuotations } from '@/providers/manage-quotations-provider';

type useBookmarkReturn = {
  myCotationsList: Quotation[];
  removeCotationsFromBookmarks: (quotation: Quotation) => void;
  isLoading: boolean;
};

export function useBookmark(): useBookmarkReturn {
  const { user } = useAuth();
  const { myCotationsList, setMyCotationsList } = useManageQuotations();
  const [isLoading, setIsLoading] = useState(true);

  const removeCotationsFromBookmarks = (quotation: Quotation) => {
    if (!user?.id) return;

    removeBookmark(user.id, quotation);

    setMyCotationsList(
      myCotationsList.filter((item) => item.name !== quotation.name)
    );
  };

  useEffect(() => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }

    const bookmarks = getBookmarks(user.id);

    setMyCotationsList(bookmarks || []);
    setIsLoading(false);
  }, [user?.id]);

  return {
    myCotationsList,
    removeCotationsFromBookmarks,
    isLoading,
  };
}
