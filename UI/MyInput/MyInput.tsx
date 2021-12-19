import React, { useState, useRef } from "react";
import s from './MyInput.module.scss';

interface IMyInput {
   placeholder: string,
   type: string,
   onChange: (e: React.ChangeEvent<any>) => void,
   name: string,
   value: string,
   [i: string]: any
}

const MyInput: React.FC<IMyInput> = ({ placeholder, type, onChange, name, value, ...other }) => {
   const [active, setActive] = useState<boolean>(false);
   const [isEmpty, setIsEmpty] = useState<boolean>(true);

   const ref = useRef<HTMLInputElement>(null);

   const handleFocus = () => {
      if (active) return;

      setActive(true);

      ref.current?.focus();
   }

   const handleBlur = () => {
      setActive(false);

      if (ref.current) {
         ref.current?.blur();

         if (ref.current.value.length > 0) {
            setIsEmpty(false)
         } else {
            setIsEmpty(true)
         }
      }
   }

   return (
      <div
         onClick={handleFocus}
         tabIndex={0}
         className={
            `${s.input_cont}  ${active || !isEmpty
               ? s.input_active
               : ''}`
         }
      >
         <div className={s.input_placeholder}>
            <span>
               {placeholder}
            </span>
         </div>
         <input
            onChange={onChange}
            name={name}
            value={value}
            onBlur={handleBlur}
            ref={ref}
            type={type}
            className={s.input}
            {...other}
         />
      </div>
   )
}

export default MyInput
