import Link from 'next/link';
import { PROXY } from '../../API/instanse';
import { StarIcon } from '../../assets/icons';
import { IProduct } from '../../types/IProduct';
import s from './ProductItem.module.scss';

interface IProductItem {
   item: IProduct
}

const ProductItem: React.FC<IProductItem> = ({ item }) => {
   return (
      <Link href={`/catalog/${item.id}`}>
         <a className={s.products_item}>
            <div className={s.product_content}>
               <div className={s.product_img}>
                  <img src={`${PROXY}/${item.image}`} alt="image" />
               </div>
               <div className={s.product_info}>
                  <div className={s.product_left}>
                     <div className={s.product_name}>
                        {item.name}
                     </div>
                     <div className={s.product_rate}>
                        <StarIcon className={s.star_icon} />
                        <span>{item.rating}</span>
                     </div>
                  </div>
                  <div className={s.product_right}>
                     <div className={s.product_price}>
                        <span>{item.price}</span>₽
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </Link>
   )
}

export default ProductItem;
