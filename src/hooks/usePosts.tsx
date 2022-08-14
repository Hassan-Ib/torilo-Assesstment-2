import React from "react";
import { useQuery } from "@tanstack/react-query";
import getPosts from "../api/getPost";
const LIMIT = 10;

// const fetchPosts = () =>
//   new Promise<IPosts>((resolve, _) => {
//     setTimeout(() => {
//       resolve(posts());
//     }, 4000);
//   });

const usePosts = () => {
  const [currentPage, setcurrentPage] = React.useState<number>(1);
  const { data, isLoading, isError, error } = useQuery(
    ["post", { currentPage }],
    () => getPosts({ limit: LIMIT, page: currentPage - 1 }),
    { keepPreviousData: true }
  );

  const nextPage = () => {
    setcurrentPage((prev) => prev + 1);
  };
  const previousPage = () => {
    setcurrentPage((prev) => prev - 1);
  };
  const updateCurrentPage = (page: number) => {
    // console.log("upadateCurrentPage", page);
    setcurrentPage(page);
  };
  const pageDetails = {
    totalPages: 3,
    currentPage: currentPage,
    limit: LIMIT,
    changePage: updateCurrentPage,
    nextPage: nextPage,
    previousPage: previousPage,
  };

  if (data) {
    pageDetails.totalPages = Math.ceil(data.total / LIMIT);
  }
  return { posts: data, isLoading, isError, error, pageDetails };
};

export default usePosts;
