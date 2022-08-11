import { useState } from "react";
type PaginateProps = {
  total: number;
  setState?: (page: number) => void;
};
const usePagenate = ({ total }: PaginateProps) => {
  const [page, setPage] = useState<number>(1);
  const [consecuentPages, setConsecuentPages] = useState([1, 2, 3]);
  const handlePrevious = () => {
    if (page === consecuentPages[0] && page > 1) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item - 1);
      });
    }
    setPage(page - 1);
  };
  const handleNext = () => {
    if (page === consecuentPages[consecuentPages.length - 1] && page < total) {
      setConsecuentPages((prev) => {
        return prev.map((item) => item + 1);
      });
    }
    setPage(page + 1);
  };
  const handlePage = (page: number) => {
    setPage(page);
  };
  return { page, handlePrevious, handleNext, handlePage, consecuentPages };
};

export default usePagenate;
