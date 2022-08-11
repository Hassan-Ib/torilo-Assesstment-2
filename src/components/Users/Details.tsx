import React from "react";
import useUser from "../../hooks/useUser";
import Loader from "../Loader";
import { Wrapper } from "./Wrapper";
import { ErrorText } from "./ErrorText";
import { UserIcon } from "./UserIcon";
import { Title } from "./Title";

export const Details = ({ userId }: { userId: string }) => {
  console.log(userId);
  const { user, isLoading, isError } = useUser(userId);

  if (isLoading) {
    return (
      <Wrapper>
        <UserIcon />
        <Loader />
      </Wrapper>
    );
  }

  if (isError || !user) {
    return (
      <Wrapper>
        <UserIcon />
        <ErrorText
          text={
            "error fetching user data please check your internet connection :) and try again"
          }
        />
      </Wrapper>
    );
  }
  return (
    <section className="border bg-white border-[#C0C2C5] items-center rounded-md w-[21rem] h-[34rem] p-6 divide-y">
      <div className="grid grid-cols-2 mb-2">
        {/* image */}
        <div>
          <img
            src={user?.picture}
            alt={user?.firstName}
            className="rounded-md w-28 h-28 "
          />
        </div>
        {/* full name */}
        <div className="flex flex-col justify-betwwen gap-2">
          <Title
            title="Full name"
            value={
              user.title.replace("m", "M") +
              ". " +
              user.firstName +
              " " +
              user.lastName
            }
          />
          {/* email */}
          <Title title="Email addres" value={user.email} />
          {/* phone number */}
          <Title title="phone number" value={user.phone} />
        </div>
      </div>
      <div className="grid grid-cols-2 py-4">
        <Title title="gender" capitalize value={user.gender} />
        <Title title="date of birth" value={user.dateOfBirth} />
      </div>
      <div className="grid grid-cols-2 py-4">
        <Title title="street" value={user.location.street} />
        <Title title="city" value={user.location.city} />
      </div>
      <div className="grid grid-cols-2 py-4">
        <Title title="state" value={user.location.state} />
        <Title title="country" value={user.location.country} />
      </div>
      <div className="grid grid-cols-2 py-4">
        <Title title="year enroled" value={user.registerDate} />
      </div>
      <div className="grid grid-cols-2 pt-4">
        <Title title="registerd" value={user.registerDate} />
        <Title title="last updated" value={user.updatedDate} />
      </div>
    </section>
  );
};
