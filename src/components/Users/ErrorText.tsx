import React from "react";
export type ErrorTextProps = {
  text?: string;
};
export const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <p className="text-xs text-red-500">
      {text ? text : "view a selected user's full details"}
    </p>
  );
};
