import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getUsers from "../api/getUser";

const LIMIT: number = 10;

const useUsers = () => {
  const queryClient = useQueryClient();
  const [currentPage, setcurrentPage] = React.useState<number>(1);

  const fetchUsers = (limit: number, page: number) => getUsers({ limit, page });

  const { data, error, isLoading, isError } = useQuery(
    ["users", currentPage - 1],
    () => fetchUsers(LIMIT, currentPage - 1),
    { keepPreviousData: true }
  );

  console.log(currentPage, data?.page);
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

  React.useEffect(() => {
    if (currentPage < pageDetails.totalPages) {
      queryClient.prefetchQuery(["post", { currentPage: currentPage + 1 }]);
    }
  }, [currentPage, queryClient, pageDetails.totalPages]);

  if (data) {
    pageDetails.totalPages = Math.ceil(data.total / LIMIT);
  }
  return { users: data, error, isLoading, isError, pageDetails };
};

export default useUsers;
