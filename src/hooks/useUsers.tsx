import React from "react";
import { useQuery } from "@tanstack/react-query";
import { IUsers } from "../Mock/users";
// import getPosts from "../api/getPost";
import getUsers from "../api/getUser";

const LIMIT: number = 10;

const fetchUser = (): Promise<IUsers> => getUsers({ limit: 10, page: 0 });

const useUsers = () => {
  const { data, error, isLoading, isError } = useQuery(["users"], fetchUser);
  const [currenPage, setcurrentPage] = React.useState<number>(1);

  if (isError || !data) {
    return {
      isError: true,
      isLoading: false,
      error,
      data: null,
    };
  }

  const updatePageDetails = (page: number) => {
    setcurrentPage(page);
  };
  const pageDetails = {
    page: currenPage,
    totalPages: Math.floor(data.total / LIMIT),
  };

  return { users: data, isLoading, isError, pageDetails, updatePageDetails };
};

export default useUsers;
