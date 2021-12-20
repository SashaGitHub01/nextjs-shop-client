import axios from "axios";

export const PROXY = 'http://localhost:3001'

export const instanse = axios.create({
   baseURL: PROXY,
   withCredentials: true,
})