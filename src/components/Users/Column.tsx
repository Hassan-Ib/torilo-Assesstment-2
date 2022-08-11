import React from "react";
import { IUserPreview } from "../../types/user";
type Props = IUserPreview & {
  handleShowUserDetails: (id: string) => void;
};

const Column = ({
  id,
  picture,
  firstName,
  lastName,
  handleShowUserDetails,
  title,
}: Props) => {
  return (
    <tr
      onClick={() => {
        handleShowUserDetails(id);
      }}
      className="cursor-pointer flex items-center p-2 bg-white text-left rounded-md shadow-lg">
      <td className="px-6">
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="w-14">
        <img
          src={picture}
          alt={firstName + " " + lastName}
          className="h-8 rounded-full"
        />
      </td>
      <td className="w-20 capitalize">{title}</td>
      <td className="w-36">{firstName}</td>
      <td className="w-36">{lastName}</td>
      <td className="pr-20">{id}</td>
    </tr>
  );
};
export default Column;
