import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/getPost";

type Props = {
  postId: string;
};

const usePost = ({ postId }: Props) => {
  const { data, isLoading, isError, error } = useQuery(
    ["post", { postId }],
    () => getPost(postId)
  );

  console.log(error);
  return { post: data, isLoading, isError };
};

export default usePost;
