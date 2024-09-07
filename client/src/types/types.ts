export type User = {
  id: string;
  username: string;
  email: string;
  isAdmin?: boolean;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Post = {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: number;
  longitude: number;
  type: PostType;
  property: PropertyType;
  userId: string;
  createdAt: string;
  updatedAt: string;
  PostDetail: {
    id: string;
    description: string;
    utilities: "shared" | "private";
    pet: "allowed" | "not-allowed";
    income: "Yes" | "No";
    size: number;
    school: number;
    bus: number;
    restaurant: number;
    postId: string;
  };
  user: {
    avatar: string;
    username: string;
  };
};

enum PostType {
  BUY,
  RENT,
}

enum PropertyType {
  HOUSE,
  APARTMENT,
  LAND,
  CONDO,
}

export type QueryParams = {
  type?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
};
