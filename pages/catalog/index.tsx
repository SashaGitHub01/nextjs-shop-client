import { NextPage } from "next";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import Layout from "../../components/Layout/Layout";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SagaStore, wrapper } from "../../store";
import { fetchItems } from "../../store/actions/catalogActions";

const Catalog: NextPage = () => {
   const { items, isLoading } = useTypedSelector(state => state.catalog)

   return (
      <ProductsList items={items} isLoading={isLoading} />
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
