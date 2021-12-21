import { NextPage } from "next";
import Link from "next/link";
import CartList from "../../components/CartList/CartList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import s from '../../styles/Cart.module.scss';

const Cart: NextPage = () => {
   const { cartItems, isLoading, result } = useTypedSelector(state => state.cart)

   return (
      <div className={s.cart}>
         <div className={s.cart_head}>
            <span>Корзина</span>
         </div>
         <div className={s.cart_row}>
            <div className={s.cart_left}>
               {!cartItems.length
                  ? <CartList items={cartItems} />
                  : <div className={s.placeholder}>
                     <div className={s.empty}>
                        Ваша корзина пуста
                     </div>
                     <div className={s.back}>
                        <Link href={'/'}>
                           <a>
                              <span>На главную</span>
                           </a>
                        </Link>
                     </div>
                  </div>}
            </div>
            {!cartItems.length &&
               <div className={s.cart_right}>
                  <div className={s.check}>
                     <div className={s.check_head}>
                        <span>Информация о заказе</span>
                     </div>
                     <div className={s.info}>
                        <div className={s.info_item}>
                           <div className={s.info_name}>
                              <span>Кол-во товаров:</span>
                           </div>
                           <div className={s.info_value}>
                              <span>
                                 {cartItems.length}
                              </span>
                           </div>
                        </div>
                        <div className={s.info_item}>
                           <div className={s.info_name}>
                              <span>На сумму:</span>
                           </div>
                           <div className={s.info_value}>
                              <span>{result}</span>₽
                           </div>
                        </div>
                     </div>
                     <div className={s.footer}>
                        <div className={s.pay_button}>
                           <span>Оплатить</span>
                        </div>
                     </div>
                  </div>
               </div>}
         </div>
      </div>
   )
}

export default Cart;


