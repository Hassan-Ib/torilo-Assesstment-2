import React from "react";
import { IPostPreview } from "../../types/post";
import { AiOutlineLike } from "react-icons/ai";
type Props = IPostPreview & {
  handleShowUserDetails: (id: string) => void;
};

const Column = ({
  text,
  likes,
  id,
  image,
  owner,
  publishDate,
  handleShowUserDetails,
}: Props) => {
  const preview = text.length > 20 ? text.substring(0, 20) + "..." : text;
  return (
    <tr
      onClick={() => {
        handleShowUserDetails(id);
      }}
      className="cursor-pointer flex text-sm items-center p-2 bg-white text-left rounded-md shadow-lg">
      <td className="px-6">
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="w-14">
        <img
          src={image}
          alt={owner.firstName + " " + owner.lastName}
          className="h-8 w-8 rounded-full"
        />
      </td>
      <td className="w-44 ">{preview}</td>
      <td className="w-28 flex items-center gap-1">
        {" "}
        <AiOutlineLike className="text-xl" /> {likes}
      </td>
      <td className="w-72">{publishDate}</td>
    </tr>
  );
};
export default Column;
