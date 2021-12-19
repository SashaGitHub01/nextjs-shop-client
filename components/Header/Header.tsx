import React, { useState } from "react";
import s from './Header.module.scss';
import { BsCart3 as Cart } from 'react-icons/bs'
import Link from "next/link";
import Modal from "../../UI/Modal/Modal";
import MyInput from "../../UI/MyInput/MyInput";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SigninModal from "./SigninModal/SigninModal";
import SignupModal from "./SignupModal/SignupModal";

const Header: React.FC = () => {
   const [isOpen1, setIsOpen1] = useState<boolean>(false);
   const [isOpen2, setIsOpen2] = useState<boolean>(false);

   const dispatch = useDispatch();

   const { error, isLoading, user } = useTypedSelector(state => state.auth)

   const formik = useFormik({
      initialValues: {
         password: '',
         email: ''
      },

      onSubmit: async (values) => {
         await dispatch(fetchLogin(values))

         if (user && !error) {
            setIsOpen1(false);
         }
      }
   })

   const handleOpen = () => {
      setIsOpen1(true)
   }

   const openSignin = () => {
      setIsOpen2(false)
      setIsOpen1(true)
   }

   const openSignup = () => {
      setIsOpen1(false)
      setIsOpen2(true)
   }

   return (
      <header className={s.header}>
         {isOpen1
            && <SigninModal
               openSignup={openSignup}
               setIsOpen={setIsOpen1}
               error={error}
               user={user}
            />}
         {isOpen2
            && <SignupModal
               openSignin={openSignin}
               setIsOpen={setIsOpen2}
               error={error}
               user={user}
            />}
         <div className={s.header_row}>
            <Link href={'/'}>
               <a className={s.header_logo}>
                  <span>DIG-SHOP.com</span>
               </a>
            </Link>
            <nav className={s.nav}>
               <ul className={s.nav_list}>
                  <li className={s.list_i}>
                     <Link href={'/cart'}>
                        <a className={s.item_cart}>
                           <Cart className={s.cart_icon} />
                           <span>Корзина</span>
                        </a>
                     </Link>
                  </li>
                  <li
                     className={s.button}
                  >
                     {user
                        ? <div className={s.userpanel}>
                           <span>{user.email}</span>
                        </div>
                        : <div className={s.sign_btn} onClick={handleOpen}>
                           <span>Войти</span>
                        </div>}
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Header
