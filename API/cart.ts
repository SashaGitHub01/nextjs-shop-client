import { instanse } from "./instanse";
import { IResponse } from "../types/IResponse";
import { ICartItem } from "../types/ICartItem";

export class CartService {
   static fetchCartItems = async (): Promise<ICartItem[]> => {
      const res = await instanse.get<IResponse<ICartItem[]>>(`/api/cart`);

      return res.data.data
   }

   static addCartItem = async (): Promise<ICartItem[]> => {
      const res = await instanse.post<IResponse<ICartItem[]>>(`/api/cart`);

      return res.data.data
   }
}