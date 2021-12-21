import React from "react";
import { ICartItem } from "../../types/ICartItem";
import { IProduct } from "../../types/IProduct";
import s from './CartItem.module.scss';
import { PROXY } from "../../API/instanse";
import { MinusIcon, PlusIcon } from "../../assets/icons";

interface ICartItemProps {
   item: IProduct
}

const CartItem: React.FC<ICartItemProps> = ({ item }) => {
   return (
      <div className={s.item}>
         <div className={s.item_row}>
            <div className={s.item_main}>
               <div className={s.item_image}>
                  <img src={`${PROXY}/${item.image}`} alt="image" />
               </div>
               <div className={s.item_name}>
                  <span>{item.name}</span>
               </div>
            </div>
            <div className={s.ctrl}>
               <div className={s.ctrl_panel}>
                  <button className={s.ctrl_btn}>
                     <MinusIcon className={s.ctrl_icon} />
                  </button>
                  <div className={s.ctrl_count}>
                     <span>4</span>
                  </div>
                  <button className={s.ctrl_btn}>
                     <PlusIcon className={s.ctrl_icon} />
                  </button>
               </div>
            </div>
            <div className={s.price}>
               <span>{item.price}</span>
               <div>₽</div>
            </div>
         </div>
      </div>
   )
}

export default CartItem
