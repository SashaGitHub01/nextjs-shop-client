import { IResponse } from "../types/IResponse";
import { IType } from "../types/IType";
import { instanse } from "./instanse";

export class TypesService {
   static fetchTypes = async (): Promise<IType[]> => {
      const res = await instanse.get<IResponse<IType[]>>('api/type/');

      return res.data.data
   }

   static fetchTypeOne = async (id: string): Promise<IType> => {
      const res = await instanse.get<IResponse<IType>>(`api/type/${id}`);

      return res.data.data
   }
}