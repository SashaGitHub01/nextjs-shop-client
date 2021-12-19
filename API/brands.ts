import axios from "axios";
import { IBrand } from "../types/IBrand";
import { IResponse } from "../types/IResponse";
import { instanse } from "./instanse";

export class BrandsService {
   static fetchBrands = async (): Promise<IBrand[]> => {
      const res = await instanse.get<IResponse<IBrand[]>>('api/brand/');

      return res.data.data
   }
}