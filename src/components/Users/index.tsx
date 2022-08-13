import React from "react";
import UserColumnHeader from "./User.ColumnHeader";
import UserColumnBody from "./User.ColumnBody";
import Column from "./Column";
import Loading from "../Loader";
import { useDashboardCTX } from "../../context/DashboardCtx";
import { IUserPreview, IUsers } from "../../types/user";

type Props = {
  users: IUsers | undefined;
  isLoading: boolean;
  isError: boolean;
};

const Index = ({ users, isLoading, isError }: Props) => {
  const { handleShowUserDetails } = useDashboardCTX();
  console.log("loading", isLoading, "user data", users);

  if (isLoading) {
    return (
      <section className="pr-2 text-[11px] rounded-md min-w-[40rem] h-[24rem] overflow-y-scroll scrollbar mb-4">
        <div className="px-4 bg-[#EDEEEF] h-full pb-2 rounded-md flex items-center justify-center">
          <Loading />
        </div>
      </section>
    );
  }

  if (isError || !users) {
    return <div className="h-[24rem]">Error ...</div>;
  }

  return (
    <section className="pr-2 rounded-md h-[24rem] overflow-y-scroll scrollbar mb-4">
      <div className="px-4 bg-[#EDEEEF] pb-2 rounded-md">
        <table className="border-collapse border-spacing-0">
          <UserColumnHeader />
          <UserColumnBody>
            {users.data.map((user: IUserPreview) => {
              return (
                <Column
                  handleShowUserDetails={handleShowUserDetails}
                  key={user.id}
                  {...user}
                />
              );
            })}
          </UserColumnBody>
        </table>
      </div>
    </section>
  );
};

export default Index;
