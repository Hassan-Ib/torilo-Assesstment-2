export type IPage = {
  totalPages: number;
  currentPage: number;
  limit: number;
  changePage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
};
