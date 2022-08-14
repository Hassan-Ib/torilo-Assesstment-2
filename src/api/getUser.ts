import { IUsers } from "../types/user";
import BASE_URL from "./baseUrl";
// import axois from "axios";

const getUsers = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): Promise<IUsers> => {
  const url = `${BASE_URL}user?limit=${limit}&page=${page}`;
  const res = await fetch(url, {
    headers: {
      "app-id": "62f2cd137df36520f4e59963",
    },
  });
  if (!res.ok) {
    console.log("error", res);
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default getUsers;

export const getUser = async (id: string) => {
  const url = `${BASE_URL}user/${id}`;
  const res = await fetch(url, {
    headers: {
      "app-id": "62f2cd137df36520f4e59963",
    },
  });
  if (!res.ok) {
    console.log("error", res);
    throw new Error("Something went wrong");
  }
  return res.json();
};
