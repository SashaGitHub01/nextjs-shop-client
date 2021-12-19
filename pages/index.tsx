import type { NextPage } from 'next'
import { useState } from 'react'
import { END } from 'redux-saga'
import { BrandsService } from '../API/brands'
import Layout from '../components/Layout/Layout'
import { SagaStore, wrapper } from '../store'
import s from '../styles/Home.module.scss'
import { IBrand } from '../types/IBrand'

interface IHome {
   brands: IBrand[],
}

const Home: NextPage<IHome> = ({ brands }) => {

   return (
      <Layout>
         <div className="h">
            <div className="h_c">
               <div className="br">
                  <div className="t">Главная</div>
                  <div className="b_c">
                     <div className="brow">
                        {/* {brands.map(({ id, name }) => (
                           <div className="bi">
                              <span>{name}</span>
                           </div>
                        ))} */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout >

   )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
   const brands = await BrandsService.fetchBrands();

   return {
      props: {
         brands: brands
      }
   }
});
export default Home
