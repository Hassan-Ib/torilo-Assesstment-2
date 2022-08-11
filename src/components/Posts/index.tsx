import React from "react";
import PostColumnHeader from "./Post.ColumnHeader";
import PostColumnBody from "./Post.ColumnBody";
import usePosts from "../../hooks/usePosts";
import Column from "./Column";
import { useDashboardCTX } from "../../context/DashboardCtx";
import Loader from "../Loader";

const Index = () => {
  const { posts, isError, isLoading } = usePosts();
  const { handleShowPostDetails } = useDashboardCTX();
  if (isLoading) {
    return (
      <section className="pr-2 text-[11px] rounded-md h-[24rem] w-[40rem] mb-4">
        <div className="px-4 bg-[#EDEEEF] pb-2 rounded-md h-full flex justify-center items-center">
          <Loader />
        </div>
      </section>
    );
  }
  if (isError || !posts) {
    return (
      <div className="pr-2 text-[11px] rounded-md h-[24rem] w-[40rem] mb-4">
        Error...
      </div>
    );
  }

  return (
    <section className="pr-2 text-[11px] rounded-md h-[24rem] overflow-y-scroll scrollbar mb-4">
      <div className="px-4 bg-[#EDEEEF] pb-2 rounded-md">
        <table className="border-collapse border-spacing-0">
          <PostColumnHeader />
          <PostColumnBody>
            {posts.data.map((post) => {
              return (
                <Column
                  handleShowUserDetails={handleShowPostDetails}
                  key={post.id}
                  {...post}
                />
              );
            })}
          </PostColumnBody>
        </table>
      </div>
    </section>
  );
};

export default Index;
