import ResourceInfo from "../ResourceInfo";
import { IoSendSharp } from "react-icons/io5";
import { FaUserAlt, FaCommentAlt } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import usePosts from "../../hooks/usePosts";

type Props = {};

const Index = (props: Props) => {
  const { users } = useUsers();
  const { posts } = usePosts();

  const totalUsers = users?.total || 500;
  const totalPosts = posts?.total || 400;
  return (
    <section className="flex gap-4 my-8 px-10">
      <ResourceInfo Icon={FaUserAlt} count={totalUsers} resoureName="users" />
      <ResourceInfo Icon={IoSendSharp} count={totalPosts} resoureName="posts" />
      <ResourceInfo Icon={FaCommentAlt} count={6459} resoureName="comments" />
    </section>
  );
};

export default Index;
