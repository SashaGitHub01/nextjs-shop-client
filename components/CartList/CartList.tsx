import React from "react";
import { ICartItem } from "../../types/ICartItem";
import CartItem from "../CartItem/CartItem";
import s from './CartList.module.scss';

interface ICartList {
   items: ICartItem[]
}

const CartList: React.FC<ICartList> = ({ items }) => {
   return (
      <div className={s.cartList}>
         {items &&
            items.map((item) => <CartItem item={item.item} key={item.id} />)}
      </div>
   )
}

export default CartList
