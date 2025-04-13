export type Quotation = {
  name: string;
  variation: number;
  points?: number;
  buy?: number;
  sell?: number;
};

export const findById = (id: string): Quotation[] | null => {
  const bookmarks = localStorage.getItem(id);
  if (!bookmarks) return null;

  const bookmarksArray = JSON.parse(bookmarks);
  return bookmarksArray;
};

export const create = (id: string) => {
  const bookmarks = findById(id);

  if (bookmarks) return null;

  localStorage.setItem(id, JSON.stringify([]));
};

export const addBookmark = (id: string, quotation: Quotation) => {
  const bookmarks = findById(id);

  if (!bookmarks) return null;

  const quotationExists = bookmarks.find(
    (item) => item.name === quotation.name
  );

  if (quotationExists) {
    throw new Error();
  } else {
    localStorage.setItem(id, JSON.stringify([...bookmarks, quotation]));
  }
};

export const removeBookmark = (id: string, quotation: Quotation) => {
  const bookmarks = findById(id);

  if (!bookmarks) return null;

  localStorage.setItem(
    id,
    JSON.stringify(bookmarks.filter((item) => item.name !== quotation.name))
  );
};

export const getBookmarks = (id: string) => {
  const bookmarks = findById(id);

  if (!bookmarks) return null;

  return bookmarks;
};
