import { IPost, IPosts } from "../types/post";
import BASE_URL from "./baseUrl";

const getPosts = async ({
  limit = 10,
  page = 0,
}: {
  page?: number;
  limit?: number;
}): Promise<IPosts> => {
  const url = `${BASE_URL}post?page=${page}&limit=${limit}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": "62f2cd137df36520f4e59963",
      "X-API-Key": "62f2cd137df36520f4e59963",
    },
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.error || "Something went wrong");
  }

  return await res.json();
};

export default getPosts;

export const getPost = async (id: string): Promise<IPost> => {
  const url = `${BASE_URL}post/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": "62f2cd137df36520f4e59963",
      "X-API-Key": "62f2cd137df36520f4e59963",
    },
  });
  if (!res.ok) throw new Error("Something went wrong");
  return await res.json();
};
