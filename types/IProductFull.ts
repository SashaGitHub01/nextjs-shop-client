import { IInfo } from "./IInfo";

export interface IProductFull {
   id: string,
   name: string,
   price: string,
   rating: number,
   image: string,
   brandId: string,
   typeId: string,
   info: IInfo[]
}