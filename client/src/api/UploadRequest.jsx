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

export const uploadImage = (data) => API.post("/upload/", data);
