import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import ContentStat from "../../components/ContentStat";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardCTX from "../../context/DashboardCtx";
import TabControl from "../../components/Tab/TabControl";
import UserDetails from "../../components/Users/User.Details";
import PostDetails from "../../components/Posts/Post.Details";
import useUsers from "../../hooks/useUsers";
import usePosts from "../../hooks/usePosts";
import User from "../../components/Users/";
import Post from "../../components/Posts/";
import Pagination from "../../components/Pagination";

type Props = {};

const Index = (props: Props) => {
  return (
    <section className="flex ">
      <SideBar />
      <section className="flex-1 flex flex-col ">
        <Header />
        <ContentStat />
        <TableDetails />
      </section>
    </section>
  );
};

export default Index;

const TableDetails = () => {
  const location = useLocation();

  const {
    users,
    isLoading: isUsersLoading,
    isError: isUsersError,
    pageDetails: userPageDetails,
  } = useUsers();
  const {
    posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    pageDetails: postPageDetails,
  } = usePosts();

  const postsPageination = <Pagination key="posts" {...postPageDetails} />;
  const usersPagination = <Pagination key="users" {...userPageDetails} />;

  const Paginate = location.pathname.includes("/posts")
    ? postsPageination
    : usersPagination;

  return (
    <>
      <DashboardCTX>
        <section className="px-10 text-sm grid grid-cols-3">
          <div className=" col-span-2 justify-self-start self-end mb-4">
            <TabControl />
            <Routes>
              <Route
                index
                element={
                  <User
                    users={users}
                    isLoading={isUsersLoading}
                    isError={isUsersError}
                  />
                }
              />
              <Route
                path="posts"
                element={
                  <Post
                    posts={posts}
                    isLoading={isPostsLoading}
                    isError={isPostsError}
                  />
                }
              />
            </Routes>
          </div>
          <div className=" flex justify-end ">
            {location.pathname === "/dashboard" ? (
              <UserDetails />
            ) : (
              <PostDetails />
            )}
          </div>
        </section>
      </DashboardCTX>
      {Paginate}
    </>
  );
};
