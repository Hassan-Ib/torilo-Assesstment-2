import React from "react";
import PostColumnHeader from "./Post.ColumnHeader";
import PostColumnBody from "./Post.ColumnBody";
import usePosts from "../../hooks/usePosts";
import Column from "./Column";
import { useDashboardCTX } from "../../context/DashboardCtx";

// type Props = {
//   // handleShowUserDetails: (id: string) => void;
// };

const Index = () => {
  const { posts, isError } = usePosts();
  const { handleShowPostDetails } = useDashboardCTX();
  if (isError || !posts) {
    return <div>Error</div>;
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
