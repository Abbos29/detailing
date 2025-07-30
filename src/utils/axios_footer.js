import axios from 'axios';

export const axiosInstanceFooter = axios.create({
    baseURL: process.env.API_BASE_URL_FOOTER,
});
