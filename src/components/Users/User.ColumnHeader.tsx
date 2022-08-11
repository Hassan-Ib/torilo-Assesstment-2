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
        <th className="w-20 font-normal">title</th>
        <th className=" w-36 font-normal">First name</th>
        <th className="w-36 font-normal">Last Name</th>
        <th className="font-normal">ID</th>
      </tr>
    </thead>
  );
};

export default ColumnHeader;
