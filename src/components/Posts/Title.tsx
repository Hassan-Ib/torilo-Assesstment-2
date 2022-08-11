import React from "react";

export const Title = ({
  title,
  children,
  capitalize,
}: {
  title: string;
  children: React.ReactNode;
  capitalize?: boolean;
}) => {
  return (
    <section className="flex flex-col gap-1 text-[11px]">
      <p className="uppercase text-[#AFC2D4] ">{title}</p>
      <p className={capitalize ? "capitalize" : ""}>{children}</p>
    </section>
  );
};
