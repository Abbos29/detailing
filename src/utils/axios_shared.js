import axios from 'axios';

export const axiosInstanceShared = axios.create({
    baseURL: process.env.API_BASE_URL_SHARED,
});
