import React from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border bg-white flex flex-col  items-center justify-center border-[#C0C2C5]  w-[20rem] h-[34rem] rounded-md p-6 divide-y">
      {children}
    </section>
  );
};
