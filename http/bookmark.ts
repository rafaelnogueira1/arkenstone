import { Quotation, repositoryBookmarks } from '@/repository/bookmark';

export const getBookmarks = (id: string) => {
  const bookmarks = repositoryBookmarks.findById(id);

  return bookmarks;
};

export const addNewCotationToBookmark = ({
  id,
  quotation,
}: {
  id: string;
  quotation: Quotation;
}) => {
  const bookmarks = repositoryBookmarks.findById(id);

  if (!bookmarks) {
    repositoryBookmarks.create(id);
  }

  repositoryBookmarks.add(id, quotation);
};

export const removeBookmark = ({ id, name }: { id: string; name: string }) => {
  const bookmarks = repositoryBookmarks.remove(id, name);

  if (!bookmarks) return null;
};

export const getCotationOnBookmark = ({
  id,
  name,
}: {
  id: string;
  name: string;
}): { success: boolean; quotation: Quotation | null } => {
  const bookmarks = repositoryBookmarks.findById(id);

  if (!bookmarks) return { success: false, quotation: null };

  const quotationExists = bookmarks.find((item) => item.name === name);

  if (!quotationExists) {
    return {
      success: false,
      quotation: null,
    };
  }

  return {
    success: true,
    quotation: quotationExists,
  };
};
