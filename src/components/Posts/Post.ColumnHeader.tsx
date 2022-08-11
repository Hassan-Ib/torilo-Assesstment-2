type Props = {};

const ColumnHeader = (props: Props) => {
  return (
    <thead>
      <tr className="flex items-center p-2 py-3 text-left uppercase text-xs font-normal">
        <th className="px-6 font-normal">
          <input
            type="checkbox"
            className="w-4 h-4 border-black/60 accent-[#EDEEEF]"
          />{" "}
        </th>
        <th className="w-14 font-normal" colSpan={2}></th>
        <th className="w-44 font-normal">full name</th>
        <th className="w-28 font-normal">Likes</th>
        <th className="font-normal">publised at</th>
      </tr>
    </thead>
  );
};

export default ColumnHeader;
