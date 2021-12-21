import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import { ArrowIcon } from "../../assets/icons";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SagaStore, wrapper } from "../../store";
import { fetchItems } from "../../store/actions/catalogActions";
import s from '../../styles/Catalog.module.scss';
import head from '../../styles/head.module.scss';
import Loader from "../../UI/Loader/Loader";

const Catalog: NextPage = () => {
   const { items, isLoading, title } = useTypedSelector(state => state.catalog)

   return (
      <>
         {!isLoading
            ? <div className={s.catalog}>
               <div className={head.head}>
                  <Link href='/'>
                     <a>
                        <ArrowIcon className={head.back_icon} />
                        <span>На главную</span>
                     </a>
                  </Link>
                  {title
                     && <h4>
                        {title}
                     </h4>}
               </div>
               <ProductsList items={items} isLoading={isLoading} />
            </div>
            : <Loader />}
      </>
   )
}

export default Catalog;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
   try {
      store.dispatch(fetchItems({
         brand: ctx.query.brand as string,
         type: ctx.query.type as string,
         page: ctx.query.page as string
      }))

      store.dispatch(END);

      await (store as SagaStore).sagaTask?.toPromise();
   } catch (err) {
      console.log(err);
   }

   return { props: {} }
})
