import apiRequest from "./apiRequest";

export const singlePostLoader = async (params: { id: string | undefined }) => {
  const response = await apiRequest.get(`/post/${params.id}`);
  return response.data;
};

export const postsLoader = async (request: Request) => {
  const query = request.url.split("?")[1];
  const response = await apiRequest.get(`/post${query ? `?${query}` : ""}`);
  return response.data;
};
