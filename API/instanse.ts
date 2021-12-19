import axios from "axios";
import { config } from 'dotenv';

export const instanse = axios.create({
   baseURL: 'http://localhost:3001/',
   withCredentials: true,
})