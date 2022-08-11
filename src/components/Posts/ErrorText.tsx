import React from "react";
type ErrorTextProps = {
  text?: string;
};
const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <p className="text-xs text-red-500">
      {text ? text : "view a selected user's full details"}
    </p>
  );
};
