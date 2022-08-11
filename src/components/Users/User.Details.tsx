import React from "react";
import { useDashboardCTX } from "../../context/DashboardCtx";
import { Wrapper } from "./Wrapper";
import { UserIcon } from "./UserIcon";
import { Details } from "./Details";
const Users = () => {
  const { userId } = useDashboardCTX();

  if (!userId) {
    return (
      <Wrapper>
        <UserIcon />
        view a selected user's full details
      </Wrapper>
    );
  }

  return <Details userId={userId} />;
};

export default Users;
