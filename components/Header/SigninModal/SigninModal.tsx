import React from "react";
import Modal from "../../../UI/Modal/Modal";
import s from './SigninModal.module.scss';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../store/actions/authActions";
import MyInput from "../../../UI/MyInput/MyInput";
import { IUser } from "../../../types/IUser";

interface ISigninModal {
   setIsOpen: (value: React.SetStateAction<boolean>) => void,
   openSignup: () => void,
   user?: IUser,
   error?: any
}

const SigninModal: React.FC<ISigninModal> = ({ setIsOpen, user, error, openSignup }) => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         password: '',
         email: ''
      },

      onSubmit: async (values) => {
         await dispatch(fetchLogin(values))

         setIsOpen(false);
      }
   })

   const handleClose = () => {
      setIsOpen(false);
   }

   return (
      <Modal
         onClose={handleClose}
      >
         <form className={s.form} onSubmit={formik.handleSubmit}>
            <MyInput
               onChange={formik.handleChange}
               name='email'
               value={formik.values.email}
               type='text'
               placeholder='E-mail'
            />
            <MyInput
               onChange={formik.handleChange}
               value={formik.values.password}
               name='password'
               type='password'
               placeholder='Пароль'
            />
            <button
               disabled={!formik.dirty || formik.isSubmitting}
               type='submit'
               className={s.form_submit}
            >
               <span>Войти</span>
            </button>
            <div className={s.message}>
               <span>Нет аккаунта? </span>
               <span className={s.link} onClick={openSignup}>
                  Зарегистрироваться
               </span>
            </div>
         </form>
      </Modal>
   )
}

export default SigninModal
