import axios from "axios";
import { ILoginData } from "../types/ILogin";
import { IRegistrationData } from "../types/IRegistration";
import { IResponse } from "../types/IResponse";
import { IUser } from "../types/IUser";

export class AuthService {
   static authMe = async (): Promise<IUser> => {
      const res = await axios.get<IResponse<IUser>>('/api/user/auth',
         {
            withCredentials: true
         });

      return res.data.data;
   }

   static login = async (data: ILoginData): Promise<IUser> => {
      const res = await axios.post<IResponse<IUser>>('/api/user/login',
         data,
         {
            withCredentials: true
         });

      return res.data.data;
   }

   static registrration = async (data: IRegistrationData): Promise<IUser> => {
      const res = await axios.post<IResponse<IUser>>('/api/user/registration',
         data,
         {
            withCredentials: true
         });

      return res.data.data;
   }
}