import React from "react";
import usePost from "../../hooks/usePost";
import { FcLike } from "react-icons/fc";
import { Wrapper } from "./Wrapper";
import { Title } from "./Title";

export const Details = ({ postId }: { postId: string }) => {
  const { post, isLoading, isError } = usePost({ postId });
  // const {user, isLoading, isError } = useUser({ postId: post?.owner.id });
  if (isLoading) {
    return <Wrapper> "loading.."</Wrapper>;
  }

  if (isError || !post) {
    return <div>Error</div>;
  }

  return (
    <section className="text-xs flex flex-col bg-white  border border-[#C0C2C5] rounded-md p-4 h-[33rem]">
      <div className="mb-2  w-full h-56">
        <img
          src={post.image}
          alt={post.owner.firstName + " " + post.owner.lastName}
          className="rounded-md h-full w-full object-cover object-center"
        />
      </div>
      <p className="py-2">{post.text}</p>
      <p className="flex gap-2 items-center mb-2 text-[#DD3C3C]">
        <FcLike /> {post.likes}
      </p>
      <div className="py-2">
        <Title title="tags" capitalize>
          <ul className="flex items-center gap-3">
            {post.tags.map((tag: string) => (
              <li
                key={tag}
                className="border border-[#4799EB] uppercase px-3 py-1 rounded-xl font-semibold text-[#607485]">
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        </Title>
      </div>
      <section>
        <p className="border-y  py-2 border-t-[#EDF2F7] border-b-[#EDF2F7] font-medium">
          OWNER
        </p>
        <div className="flex items-center gap-4 pt-4">
          <img
            src={post.owner.picture}
            alt={post.owner.firstName + " " + post.owner.lastName}
            className=" h-10 rounded-full"
          />
          <p>{post.owner.firstName + " " + post.owner.lastName}</p>
        </div>
        <div className=" py-4">
          <Title title="full name">
            {post.owner.firstName + " " + post.owner.lastName}
          </Title>
        </div>
        {/* <div className="py-4">
              <Title title="phone">
                {post.owner.phone}
              </Title>
            </div> */}
        {/* <div className="py-4">
              <Title title="phone">
                {post.owner.phone}
              </Title>
            </div> */}
      </section>
    </section>
  );
};
