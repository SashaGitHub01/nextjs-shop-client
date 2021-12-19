import React from "react";
import s from './Modal.module.scss';
import { CloseIcon } from "../../assets/icons";

interface IModal {
   onClose: () => void
}

const Modal: React.FC<IModal> = ({ children, onClose }) => {

   const handleClose = () => {
      onClose();
   }

   return (
      <div className={s.modal}>
         <div className={s.modal_window}>
            <CloseIcon className={s.close_icon} onClick={handleClose} />
            <div className={s.modal_col}>
               <div className={s.modal_head}>
                  <span>
                     Войти или<p>зарегистрироваться</p>
                  </span>
               </div>
               <div className={s.modal_main}>
                  {children}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal
