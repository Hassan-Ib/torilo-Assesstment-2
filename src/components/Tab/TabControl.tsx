import React from "react";
import { NavLink } from "react-router-dom";
import { useDashboardCTX } from "../../context/DashboardCtx";
const tab = [
  { to: "/dashboard", name: "users" },
  { to: "/dashboard/posts", name: "posts" },
];
const TabControl = () => {
  const { handleShowPostDetails, handleShowUserDetails } = useDashboardCTX();
  const normalClass = " py-2 pr-2 capitalize text-sm";
  const activeClass = "text-[#4799EB] border-b-2 border-[#4799EB] font-bold";

  const className = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${normalClass} ${activeClass}` : normalClass;
  };
  return (
    <section className="flex gap-10 mb-3">
      {tab.map((item) => (
        <NavLink
          to={item.to}
          onClick={() => {
            handleShowPostDetails("");
            handleShowUserDetails("");
          }}
          key={item.to}
          className={className}
          end>
          all {item.name}
        </NavLink>
      ))}
    </section>
  );
};

export default TabControl;
