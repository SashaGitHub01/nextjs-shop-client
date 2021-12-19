import Link from "next/link";
import React from "react";
import Header from "../Header/Header";
import s from './Layout.module.scss';
import { TVIcon, LaptopIcon, PhoneIcon } from "../../assets/icons";

const types = [
   {
      "id": 1,
      "name": "Смартфоны",
      Icon: PhoneIcon
   },
   {
      "id": 2,
      "name": "Компьютеры",
      Icon: LaptopIcon
   },
   {
      "id": 3,
      "name": "Телевизоры",
      Icon: TVIcon
   }
]

const Layout: React.FC = ({ children }) => {
   return (
      <div className="wrapper">
         <Header />
         <div className={s.main}>
            <aside className={s.aside}>
               <nav className={s.nav}>
                  <ul className={s.nav_list}>
                     {types.map(({ id, name, Icon }) => (
                        <li className={s.nav_item} key={id}>
                           <Link href={'/'}>
                              <a className={s.nav_link}>
                                 <Icon className={s.nav_icon} />
                                 <span>{name}</span>
                              </a>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </aside>
            <div className={s.content}>
               {children}
            </div>
         </div>
      </div>
   )
}

export default Layout
