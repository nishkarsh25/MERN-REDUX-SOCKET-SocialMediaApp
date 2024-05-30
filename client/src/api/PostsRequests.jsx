import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('profile'))?.token;
    if (token) {
        req.headers.Authorization = token; // Pass the token without the "Bearer" prefix
    }

    return req;
});

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);





