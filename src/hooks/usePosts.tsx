import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPosts from "../api/getPost";
const LIMIT = 10;

// const fetchPosts = () =>
//   new Promise<IPosts>((resolve, _) => {
//     setTimeout(() => {
//       resolve(posts());
//     }, 4000);
//   });

const usePosts = () => {
  const queryClient = useQueryClient();
  const [currentPage, setcurrentPage] = React.useState<number>(1);
  const { data, isLoading, isError, error } = useQuery(
    ["post", { currentPage }],
    () => getPosts({ limit: LIMIT, page: currentPage - 1 }),
    { keepPreviousData: true }
  );

  console.log("post", currentPage, data?.page);
  const nextPage = () => {
    setcurrentPage((prev) => prev + 1);
  };
  const previousPage = () => {
    setcurrentPage((prev) => prev - 1);
  };
  const updateCurrentPage = (page: number) => {
    console.log("upadateCurrentPage", page);
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

  // prefectch next page with queryClient
  React.useEffect(() => {
    if (currentPage < pageDetails.totalPages) {
      queryClient.prefetchQuery(
        ["post", { currentPage: currentPage + 1 }],
        () => getPosts({ limit: LIMIT, page: currentPage })
      );
    }
  }, [currentPage, queryClient, pageDetails.totalPages]);

  if (data) {
    pageDetails.totalPages = Math.ceil(data.total / LIMIT);
  }
  return { posts: data, isLoading, isError, error, pageDetails };
};

export default usePosts;
