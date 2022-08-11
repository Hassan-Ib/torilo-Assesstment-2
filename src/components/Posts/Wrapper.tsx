import React from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border bg-white border-[#C0C2C5] w-[20rem] h-[33rem] flex flex-col justify-center  items-center rounded-md p-6 divide-y">
      {children}
    </section>
  );
};
