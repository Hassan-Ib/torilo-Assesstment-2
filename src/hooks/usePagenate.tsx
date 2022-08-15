import { useState } from "react";
type PaginateProps = {
  totalPages: number;
  changePage: (page: number) => void;
  currentPage: number;
  nextPage: () => void;
  previousPage?: () => void;
};
const usePagenate = ({
  totalPages,
  changePage,
  currentPage: page,
  nextPage,
  previousPage,
}: PaginateProps) => {
  const [consecuentPages, setConsecuentPages] = useState(() =>
    Array(3)
      .fill(0)
      .map((_, i) => page + i)
  );

  console.log("consecuentPages", consecuentPages);
  // handlePreviuos page
  const handlePrevious = () => {
    if (page === consecuentPages[0] && page > 1) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item - 1);
      });
    }
    if (page && page > 1) {
      previousPage && previousPage();
    }
  };

  // handleNext page
  const handleNext = () => {
    if (
      page === consecuentPages[consecuentPages.length - 1] &&
      page < totalPages
    ) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item + 1);
      });
    }
    if (page && page < totalPages) {
      nextPage && nextPage();
    }
  };

  // handlePage page
  const handlePage = (page: number) => {
    changePage && changePage(page);
  };

  return { page, handlePrevious, handleNext, handlePage, consecuentPages };
};

export default usePagenate;
