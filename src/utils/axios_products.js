import axios from 'axios';

export const axiosInstanceProducts = axios.create({
    baseURL: process.env.API_BASE_URL_PRODUCTS,
});
