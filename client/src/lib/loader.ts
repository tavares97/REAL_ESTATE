import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

export const singlePostLoader = async (params: { id: string | undefined }) => {
  const response = await apiRequest.get(`/post/${params.id}`);

  return response.data;
};

export const postsLoader = async (request: Request) => {
  const query = request.url.split("?")[1];

  const postsPromise = apiRequest
    .get(`/post${query ? `?${query}` : ""}`)
    .then((response) => response.data.posts);

  return defer({ postsPromise });
};

export const savedPostsLoader = async () => {
  const profilePostsPromise = apiRequest
    .get("/users/saved")
    .then((response) => {
      const { userPosts, savedPosts } = response.data;
      return { userPosts, savedPosts };
    });

  return defer({ profilePostsPromise });
};
