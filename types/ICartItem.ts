import { IProduct } from "./IProduct";

export interface ICartItem {
   id: string,
   cartId: string,
   itemId: string,
   item: IProduct
}