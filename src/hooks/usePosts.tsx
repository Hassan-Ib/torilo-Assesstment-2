import React from "react";
import { posts } from "../Mock/posts";
import { useQuery } from "@tanstack/react-query";
import { IPosts } from "../types/post";
import getPosts from "../api/getPost";
const LIMIT = 10;

// const fetchPosts = () =>
//   new Promise<IPosts>((resolve, _) => {
//     setTimeout(() => {
//       resolve(posts());
//     }, 4000);
//   });

const fetchPosts = () => getPosts({ limit: LIMIT });

type Props = {
  page: number;
};

const usePosts = () => {
  const { data, isLoading, isError, error } = useQuery(["post"], fetchPosts);
  console.log(error);
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
  return { posts: data, isLoading, isError, pageDetails, updatePageDetails };
};

export default usePosts;
