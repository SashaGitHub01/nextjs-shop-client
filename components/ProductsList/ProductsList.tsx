import s from './ProductsList.module.scss';
import { IProduct } from '../../types/IProduct';
import Productitem from '../ProductItem/ProductItem';

interface IProductsList {
   items: IProduct[],
   isLoading: boolean,
   error?: string
}

const ProductsList: React.FC<IProductsList> = ({ items, isLoading }) => {

   return (
      <div className={s.products_list}>
         {items && items.map((item) => (
            <Productitem key={item.id} item={item} />
         ))}
      </div>
   )
}

export default ProductsList;