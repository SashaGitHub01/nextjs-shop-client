import { IItemsReq } from "../types/IItemsReq";
import { IPaginateRes } from "../types/IPaginateRes";
import { IProduct } from "../types/IProduct";
import { IResponse } from "../types/IResponse";
import { instanse } from "./instanse";

export class ProductsService {
   static fetchProducts = async ({ brand = '', type = '', page = '1', }: IItemsReq): Promise<IProduct[]> => {
      const res = await instanse.get<IPaginateRes<IProduct[]>>(
         `/api/item?brandId=${brand}&typeId=${type}&page=${page}`
      );

      return res.data.data.rows;
   }

   static fetchTrands = async (): Promise<IProduct[]> => {
      const res = await instanse.get<IResponse<IProduct[]>>('/api/item/trands');

      return res.data.data;
   }
}