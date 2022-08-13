import React from "react";
import usePagenate from "../../hooks/usePagenate";
import { IPage } from "../../types/page";
type Props = IPage;

const btnStyle =
  " disabled:opacity-50 disabled:border-white border shadow-fig border-[#EAEAEA] px-3 py-1 rounded font-medium";

const Index = (props: Props) => {
  const { page, handlePrevious, handleNext, handlePage, consecuentPages } =
    usePagenate({ ...props });

  return (
    <section className="text-[#4799EB] bg-white shadow max-w-max p-4 rounded-lg flex gap-2  mb-6 mx-10">
      <button
        disabled={page <= 1}
        onClick={handlePrevious}
        className={btnStyle}>
        Prev
      </button>
      {consecuentPages.map((item) => (
        <button
          style={{
            color: page === item ? "#051A2E" : "#4799EB",
            backgroundColor: page === item ? "#EDF2F7" : "transparent",
          }}
          key={item}
          onClick={() => handlePage(item)}
          className={
            "w-10 py-1 text-center border border-[#EAEAEA] shadow-fig rounded font-medium"
          }>
          {item}
        </button>
      ))}
      <button
        disabled={page === props.totalPages}
        onClick={handleNext}
        className={btnStyle}>
        Next
      </button>
    </section>
  );
};

export default Index;
