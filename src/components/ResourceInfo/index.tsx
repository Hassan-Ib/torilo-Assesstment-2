import React from "react";

type IconProps = {
  className: string;
};
type Props = {
  count: number;
  resoureName: string;
  Icon: React.FC<IconProps>;
};

const Index = ({ Icon, count, resoureName }: Props) => {
  return (
    <div className="bg-white flex gap-3 items-center p-4 shadow flex-1 rounded-lg px-6">
      <span className="p-3 bg-[#A2C5EA] rounded-full">
        {" "}
        <Icon className="text-lg text-[#54CE3B]" />
      </span>
      <div className="flex flex-col justify-between">
        <p className="text-sm  text-[#97A7B4] capitalize font-medium">
          {resoureName}
        </p>
        <p className="font-semibold text-3xl">{count}</p>
      </div>
    </div>
  );
};

export default Index;
