import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
type Props = {};

const Index = (props: Props) => {
  return (
    <div className="bg-[#051A2E] px-6 py-10 ">
      <Link
        to={"/register"}
        className="flex flex-col gap-2 justify-center items-center text-white uppercase text-xs">
        <span className="rounded-full bg-white p-4">
          <FaUserPlus className=" text-lg text-[#4799EB]" />
        </span>
        <span className="text-[10px]">Add A user</span>
      </Link>
    </div>
  );
};

export default Index;
