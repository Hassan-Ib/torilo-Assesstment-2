import React from "react";

export const Title = ({
  title,
  value,
  capitalize,
}: {
  title: string;
  value: string;
  capitalize?: boolean;
}) => {
  return (
    <section className="flex flex-col gap-1 text-xs">
      <p className="uppercase text-[#AFC2D4] ">{title}</p>
      <p className={capitalize ? "capitalize" : ""}>{value}</p>
    </section>
  );
};
