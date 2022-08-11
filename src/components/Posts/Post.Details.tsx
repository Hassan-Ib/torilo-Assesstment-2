import React from "react";
import { useDashboardCTX } from "../../context/DashboardCtx";
import { Wrapper } from "./Wrapper";
import { PostIcon } from "./PostIcon";
import { Details } from "./Details";

const Users = () => {
  const { postId, handleShowUserDetails } = useDashboardCTX();

  if (!postId) {
    return (
      <Wrapper>
        <PostIcon />
        <p className="text-xs">view a selected user's full details</p>
      </Wrapper>
    );
  }
  return <Details postId={postId} />;
};
export default Users;
