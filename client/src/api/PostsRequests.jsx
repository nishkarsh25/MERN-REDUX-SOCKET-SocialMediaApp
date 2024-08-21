import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-redux-socket-socialmediaapp.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  if (token) {
    req.headers.Authorization = token; // Pass the token without the "Bearer" prefix
  }

  return req;
});

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });
export const uploadPost = (data) => API.post("/posts", data);

// import axios from 'axios';

// const API = axios.create({ baseURL: 'https://mern-redux-socket-socialmediaapp.onrender.com' });

// // Function to retrieve token from local storage
// const getToken = () => {
//     const profile = JSON.parse(localStorage.getItem('profile'));
//     return profile ? profile.token : null;
// };

// // Axios request to get timeline posts with token in header
// export const getTimelinePosts = (id) => {
//     const token = getToken();
//     return API.get(`/posts/${id}/timeline`, {
//         headers: {
//             Authorization: token // Just passing the token directly without the "Bearer" prefix
//         }
//     });
// };

// // Axios request to like a post with token in header
// export const likePost = (id, userId) => {
//     const token = getToken();
//     return API.put(`posts/${id}/like`, { userId }, {
//         headers: {
//             Authorization: token // Just passing the token directly without the "Bearer" prefix
//         }
//     });
// };
