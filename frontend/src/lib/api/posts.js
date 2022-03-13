import client from "./client";

export const getPosts = () => {
  return client.get("/posts");
};
export const getDetail = (id) => {
  return client.get(`/posts/${id}`);
};
export const createPost = (data) => {
  return client.post("/posts", data);
};
export const deletePost = (id) => {
  return client.delete(`/posts/${id}`);
};
