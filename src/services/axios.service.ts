import axios, {InternalAxiosRequestConfig} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((request): InternalAxiosRequestConfig => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjBkYjgxYmEwMmEyZWI1MjQ3MGFkOTEwZDlkNjAxNiIsInN1YiI6IjY1ZGRiNWE3YzkyYzVkMDE3YzQ4MTUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YX5YQUfkIKSyJQBIuQT7ggmXjmCd775z2jukXQLr5AI'

    return request;
})

export {axiosService};