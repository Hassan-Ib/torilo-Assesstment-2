type ColumnBodyProps = {
  children?: React.ReactNode;
};

const ColumnBody = ({ children }: ColumnBodyProps) => {
  return <tbody className="flex flex-col gap-2">{children}</tbody>;
};
export default ColumnBody;
