import type { NextPage } from 'next'
import { useState } from 'react'
import { END } from 'redux-saga';
import ProductsList from '../components/ProductsList/ProductsList'
import Layout from '../components/Layout/Layout'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { SagaStore, wrapper } from '../store'
import { fetchBrands } from '../store/actions/brandsActions'
import { fetchProducts, fetchTrands } from '../store/actions/productsActions'
import s from '../styles/Home.module.scss'
import { IBrand } from '../types/IBrand'
import Link from 'next/link';
import Loader from '../UI/Loader/Loader';

interface IHome {
   brands: IBrand[],
}

const Home: NextPage = () => {
   const { brands, isLoading } = useTypedSelector(state => state.brands)
   const { products, isLoading: isLoadingPr } = useTypedSelector(state => state.products)

   return (
      <>
         {!isLoading
            ? <div className={s.home}>
               <div className={s.home_col}>
                  <div className={s.home_header}>
                     <div className={s.home_title}>
                        Главная
                     </div>
                  </div>
                  <div className={s.brands_col}>
                     <div className={s.brands_row}>
                        {brands.map(({ id, name }) => (
                           <Link href={`/catalog?brand=${id}`} key={id}>
                              <a className={s.brands_item}>
                                 <h6>{name}</h6>
                              </a>
                           </Link>
                        ))}
                     </div>
                  </div>
                  <div className={s.products_col}>
                     <div className={s.products_title}>
                        <span>Популярные товары</span>
                     </div>
                     <ProductsList
                        items={products} isLoading={isLoadingPr}
                     />
                  </div>
               </div>
            </div>
            : <Loader />}
      </>

   )
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
   try {
      store.dispatch(fetchBrands());
      store.dispatch(fetchTrands());

      store.dispatch(END);

      await (store as SagaStore).sagaTask?.toPromise();

      return { props: {} }
   } catch (err) {
      console.log(err);
      return { props: {} }
   }
});

