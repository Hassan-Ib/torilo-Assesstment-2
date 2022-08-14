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
        <Details />
      </section>
    </section>
  );
};

export default Index;

const Details = () => {
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

  const postsPageination = <Pagination key={"posts"} {...postPageDetails} />;
  const usersPagination = <Pagination key={"users"} {...userPageDetails} />;

  let Paginate: React.ReactNode | null = null;
  if (location.pathname.includes("/posts")) {
    // console.log("rendering posts pagination");
    // console.log(postsPageination);
    Paginate = postsPageination;
  } else {
    // console.log("rendering users pagination");
    // console.log(usersPagination);
    Paginate = usersPagination;
  }
  // React.useEffect(() => {
  //   if (location.pathname.includes("/posts")) {
  //     userPageDetails.changePage(1);
  //   } else {
  //     postPageDetails.changePage(1);
  //   }
  // }, [location, userPageDetails, postPageDetails]);

  return (
    <DashboardCTX>
      <section className="grid grid-cols-3 px-10">
        <section className=" col-span-2">
          <section className="text-sm ">
            <div className="">
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
          </section>
          {Paginate}
        </section>
        <section>
          <div className=" flex justify-end ">
            {location.pathname === "/dashboard" ? (
              <UserDetails />
            ) : (
              <PostDetails />
            )}
          </div>
        </section>
      </section>
    </DashboardCTX>
  );
};
