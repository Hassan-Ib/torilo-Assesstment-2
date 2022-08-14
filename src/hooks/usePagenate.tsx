import { useState } from "react";
type PaginateProps = {
  totalPages: number;
  changePage: (page: number) => void;
  currentPage: number;
  tabs?: number;
};
const usePagenate = ({
  totalPages,
  changePage,
  currentPage: page,
  tabs = 5,
}: PaginateProps) => {
  const [consecuentPages, setConsecuentPages] = useState(() =>
    Array(tabs)
      .fill(0)
      .map((_, i) => page + i)
  );

  console.log("consecuentPages", consecuentPages);

  // handlePreviuos page
  const handlePrevious = () => {
    changePage(page - 1);

    if (page === consecuentPages[0] && page > 1) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item - 1);
      });
    }
  };

  // handleNext page
  const handleNext = () => {
    changePage(page + 1);
    if (
      page === consecuentPages[consecuentPages.length - 1] &&
      page < totalPages
    ) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item + 1);
      });
    }
  };

  // handlePage page
  const handlePage = (page: number) => {
    changePage(page);
  };

  return { page, handlePrevious, handleNext, handlePage, consecuentPages };
};

export default usePagenate;
