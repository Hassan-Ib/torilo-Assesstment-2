import { createContext, useContext, useState } from "react";

const initiaCtx = {
  userId: "",
  postId: "",
  handleShowUserDetails: (id: string) => {},
  handleShowPostDetails: (id: string) => {},
};

const Ctx = createContext(initiaCtx);

const DashboardCTX = ({ children }: { children: React.ReactNode }) => {
  const [userId, setId] = useState("");
  const [postId, setPostId] = useState("");
  const handleShowUserDetails = (id: string) => {
    setId(id);
  };
  const handleShowPostDetails = (id: string) => {
    setPostId(id);
  };
  return (
    <Ctx.Provider
      value={{ userId, handleShowUserDetails, handleShowPostDetails, postId }}>
      {children}
    </Ctx.Provider>
  );
};

const useDashboardCTX = () => {
  return useContext(Ctx);
};

export default DashboardCTX;
export { useDashboardCTX };
