import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-redux-socket-socialmediaapp.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  if (token) {
    req.headers.Authorization = token; // Just passing the token without "Bearer"
  }
  return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, data) => API.put(`/user/${id}`, data);
export const getAllUser = () => API.get("/user");
export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);
export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
