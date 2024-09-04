export type User = {
  id: string;
  username: string;
  email: string;
  isAdmin?: boolean;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
