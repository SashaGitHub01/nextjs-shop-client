
export interface IPaginateRes<T> {
   error?: any,
   data: {
      count: number,
      rows: T
   }
}