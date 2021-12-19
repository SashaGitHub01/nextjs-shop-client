import React from "react";
import Modal from "../../../UI/Modal/Modal";
import s from './SignupModal.module.scss';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { fetchLogin, fetchRegistration } from "../../../store/actions/authActions";
import MyInput from "../../../UI/MyInput/MyInput";
import { IUser } from "../../../types/IUser";
import * as Yup from 'yup';

interface ISigninModal {
   setIsOpen: (value: React.SetStateAction<boolean>) => void,
   openSignin: () => void,
   user?: IUser,
   error?: any
}

const SignupModal: React.FC<ISigninModal> = ({ setIsOpen, user, error, openSignin }) => {
   const dispatch = useDispatch();

   const validation = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(40).required(),
      password2: Yup.string().oneOf([Yup.ref('password'), null]).required()
   })

   const formik = useFormik({
      initialValues: {
         password: '',
         password2: '',
         email: '',
         role: 'USER'
      },

      validationSchema: validation,

      onSubmit: async (values) => {
         await dispatch(fetchRegistration(values))

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
            <MyInput
               onChange={formik.handleChange}
               value={formik.values.password2}
               name='password2'
               type='password'
               placeholder='Подтвердите пароль'
            />
            <select
               name="role"
               className={s.select} defaultValue={'USER'}
               onChange={formik.handleChange}
            >
               <option value="USER">
                  Пользователь
               </option>
               <option value="ADMIN">
                  Админитстратор
               </option>
            </select>
            <button
               disabled={!formik.dirty || formik.isSubmitting || !formik.isValid}
               type='submit'
               className={s.form_submit}
            >
               <span>Зарегистрироваться</span>
            </button>
            <div className={s.message}>
               <span>Есть аккаунт? </span>
               <span className={s.link} onClick={openSignin}>
                  Войти
               </span>
            </div>
         </form>
      </Modal>
   )
}

export default SignupModal
