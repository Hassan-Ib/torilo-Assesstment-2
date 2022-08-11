import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPosts from "../api/getPost";
const LIMIT = 10;

// const fetchPosts = () =>
//   new Promise<IPosts>((resolve, _) => {
//     setTimeout(() => {
//       resolve(posts());
//     }, 4000);
//   });

const fetchPosts = () => getPosts({ limit: LIMIT });

const usePosts = (page: number = 0) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ["post", { page }],
    fetchPosts
  );
  console.log(error);
  const [currenPage, setcurrentPage] = React.useState<number>(1);

  const updateCurrentPage = (page: number) => {
    setcurrentPage(page);
  };

  useEffect(() => {
    try {
      queryClient.fetchQuery(["users", { page: currenPage }], () =>
        getPosts({ limit: LIMIT, page: currenPage })
      );
    } catch (error) {}
  }, [currenPage, queryClient]);
  if (isError) {
    return {
      isError: true,
      isLoading: false,
      error,
      data: null,
    };
  }

  console.log("useUser", "isLoading", isLoading, "isError", isError);

  return { posts: data, isLoading, isError, error, updateCurrentPage };
};

export default usePosts;
