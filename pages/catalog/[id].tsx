import { NextPage } from "next";
import s from '../../styles/ProductPage.module.scss';
import head from '../../styles/head.module.scss';
import Link from "next/link";
import { ArrowIcon, PlusIcon, StarEmptyIcon, StarIcon } from "../../assets/icons";
import { useRouter } from "next/router";
import { SagaStore, wrapper } from "../../store";
import { fetchProduct } from "../../store/actions/productPageActions";
import { END } from "redux-saga";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../../UI/Loader/Loader";
import { PROXY } from "../../API/instanse";


const ProductPage: NextPage = () => {
   const router = useRouter();
   const { brand, type, product, isLoading } = useTypedSelector(state => state.productPage)

   return (
      <>
         {!isLoading
            ? <div className={s.prod_page}>
               <div className={head.head}>
                  <a onClick={router.back}>
                     <ArrowIcon className={head.back_icon} />
                     <span>Вернуться</span>
                  </a>
                  <h4>{product?.name}</h4>
               </div>
               <div className={s.prod_content}>
                  <div className={s.prod_info}>
                     <div className={s.prod_name}>
                        <h3>{product?.name}</h3>
                     </div>
                     <div className={s.prod_info_row}>
                        <div className={s.prod_info_left}>
                           <div className={s.prod_img}>
                              <img src={`${PROXY}/${product?.image}`} alt="product" />
                           </div>
                        </div>
                        <div className={s.prod_info_right}>
                           <div className={s.prod_window}>
                              <div className={s.window_content}>
                                 <div className={s.window_head}>
                                    <div className={s.prod_status}>
                                       Товар в наличии
                                    </div>
                                    <div className={s.prod_rating}>
                                       <StarIcon className={s.star_icon_e} />
                                       <span>
                                          {product?.rating}
                                       </span>
                                    </div>
                                 </div>
                                 <div className={s.prod_row_r}>
                                    <button className={s.add_btn}>
                                       <PlusIcon className={s.plus_icon} />
                                       <span>Добавить в корзину</span>
                                    </button>
                                    <div className={s.prod_price}>
                                       <span>{product?.price}</span>₽
                                    </div>
                                 </div>
                                 <div className={s.prod_about}>
                                    <div className={s.prod_about_item}>
                                       <div className={s.about_name}>
                                          <span>Производитель:</span>
                                       </div>
                                       <div className={s.prod_type}>
                                          <Link href={`/catalog?brand=${brand?.id}`}>
                                             <a>{brand?.name}</a>
                                          </Link>
                                       </div>
                                    </div>
                                    <div className={s.prod_about_item}>
                                       <div className={s.about_name}>
                                          <span>Категория:</span>
                                       </div>
                                       <div className={s.prod_type}>
                                          <Link href={`/catalog?type=${type?.id}`}>
                                             <a>{type?.name}</a>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={s.features}>
                  <div className={s.features_head}>
                     <span>Характеристики</span>
                  </div>
                  <div className={s.features_col}>
                     {product?.info.length
                        ? <ul className={s.features_list}>
                           {product?.info.map(({ title, description }) => (
                              <li className={s.features_item}>
                                 <div className={s.features_title}>
                                    {title}:
                                 </div>
                                 <div className={s.features_description}>
                                    {description}
                                 </div>
                              </li>
                           ))}
                        </ul>
                        : <div className={s.features_empty}>
                           Нет даннных о товаре
                        </div>}
                  </div>
               </div>
            </div>
            : <Loader />}
      </>
   )
}

export default ProductPage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
   try {
      const id = ctx.params?.id;
      console.log(id);
      if (id) {
         store.dispatch(fetchProduct(id as string));
         store.dispatch(END);
      }

      await (store as SagaStore).sagaTask?.toPromise();

   } catch (err) {
      console.log(err);
   }

   return { props: {} }
})
