export type IPostPreview = {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
};
export type IPosts = {
  data: {
    id: string;
    image: string;
    likes: number;
    tags: string[];
    text: string;
    publishDate: string;
    owner: {
      id: string;
      title: string;
      firstName: string;
      lastName: string;
      picture: string;
    };
  }[];
  total: number;
  page: number;
  limit: number;
};

export type IPost = {
  id: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  text: string;
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
};
