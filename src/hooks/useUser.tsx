import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/getUser";

const useUser = (userId: string) => {
  const { data, error, isLoading, isError } = useQuery(["users", userId], () =>
    getUser(userId)
  );
  if (error) {
    return {
      isError: true,
      isLoading: false,
      error,
      data: null,
    };
  }

  console.log(error);
  return { user: data, error, isLoading, isError };
};

export default useUser;
