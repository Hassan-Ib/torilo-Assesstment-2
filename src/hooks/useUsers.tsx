import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IUsers } from "../Mock/users";
// import getPosts from "../api/getPost";
import getUsers from "../api/getUser";

const LIMIT: number = 10;

const fetchUser = (): Promise<IUsers> => getUsers({ limit: 10, page: 0 });

const useUsers = (page: number = 0) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useQuery(
    ["users", { page }],
    fetchUser
  );

  const [currenPage, setcurrentPage] = React.useState<number>(1);

  const updateCurrentPage = (page: number) => {
    setcurrentPage(page);
  };
  useEffect(() => {
    try {
      queryClient.fetchQuery(["users", { page: currenPage }], () =>
        getUsers({ limit: LIMIT, page: currenPage })
      );
    } catch (error) {}
  }, [currenPage, queryClient]);

  if (error) {
    return {
      isError: true,
      isLoading: false,
      error,
      data: null,
    };
  }
  console.log("useUser", "isLoading", isLoading, "isError", isError);
  return { users: data, error, isLoading, isError, updateCurrentPage };
};

export default useUsers;
