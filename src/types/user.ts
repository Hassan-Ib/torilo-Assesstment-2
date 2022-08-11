export type IUserPreview = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type IUser = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  registerDate: string;
  updatedDate: string;
};

export type IUsers = {
  data: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  }[];
  total: number;
  page: number;
  limit: number;
};
