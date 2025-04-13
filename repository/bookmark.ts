export type Quotation = {
  name: string;
  variation: number;
  points?: number;
  buy?: string;
  sell?: string;
};

export const repositoryBookmarks = {
  findById: (id: string): Quotation[] | null => {
    const bookmarks = localStorage.getItem(id);
    if (!bookmarks) return null;

    const bookmarksArray = JSON.parse(bookmarks);
    return bookmarksArray;
  },

  create: (id: string) => {
    const bookmarks = repositoryBookmarks.findById(id);

    if (bookmarks) return null;

    localStorage.setItem(id, JSON.stringify([]));
  },

  add: (id: string, quotation: Quotation) => {
    const bookmarks = repositoryBookmarks.findById(id);

    if (!bookmarks) return null;

    localStorage.setItem(id, JSON.stringify([...bookmarks, quotation]));
  },

  remove: (id: string, name: string) => {
    const bookmarks = repositoryBookmarks.findById(id);

    if (!bookmarks) return null;

    localStorage.setItem(
      id,
      JSON.stringify(bookmarks.filter((item) => item.name !== name))
    );
  },

  // findByName: (name: string) => {
  //   const bookmarks = repositoryBookmarks.findById(id);

  //   if (!bookmarks) return null;

  //   return bookmarks;
  // },
};
