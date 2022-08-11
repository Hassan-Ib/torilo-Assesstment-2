import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import ContentStat from "../../components/ContentStat";
import Pagination from "../../components/Pagination";
import { Outlet, useLocation } from "react-router-dom";
import DashboardCTX from "../../context/DashboardCtx";
import TabControl from "../../components/Tab/TabControl";
import UserDetails from "../../components/Users/User.Details";
import PostDetails from "../../components/Posts/Post.Details";
// import usePosts from "../../hooks/usePosts";

type Props = {};

const Index = (props: Props) => {
  const location = useLocation();
  // const { pageDetails } = useU;

  return (
    <section className="flex ">
      <SideBar />
      <section className="flex-1 flex flex-col ">
        <Header />
        <ContentStat />
        <DashboardCTX>
          <section className="px-10 text-sm grid grid-cols-3">
            <div className=" col-span-2 justify-self-start self-end mb-4">
              <TabControl />
              <Outlet />
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
        <Pagination total={10} />
      </section>
    </section>
  );
};

export default Index;
