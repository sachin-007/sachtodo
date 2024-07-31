// import axios from 'axios';

// const instance = axios.create({
//   // baseURL: 'http://localhost:5000/api',
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;

// frontend/api/axios.ts

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Set authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
