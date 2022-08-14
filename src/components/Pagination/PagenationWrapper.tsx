import React from "react";
import Pagination from "./index";
import useUsers from "../../hooks/useUsers";
import usePosts from "../../hooks/usePosts";
import { useLocation } from "react-router-dom";
type Props = {};

const PagenationWrapper = (props: Props) => {
  const location = useLocation();
  const { pageDetails: userPageDetails } = useUsers();
  const { pageDetails: postPageDetails } = usePosts();

  const postsPageination = <Pagination {...postPageDetails} />;
  const usersPagination = <Pagination {...userPageDetails} />;

  return location.pathname.includes("/posts")
    ? postsPageination
    : usersPagination;
};

export default PagenationWrapper;
