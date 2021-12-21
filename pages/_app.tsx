import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '../store';
import { fetchAuth } from '../store/actions/authActions';
import Layout from '../components/Layout/Layout';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import { fetchCartItems } from '../store/actions/cartActions';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAuth());
      dispatch(fetchCartItems())
   }, [])

   const isLoading = useTypedSelector(state => state.auth.isLoading);

   if (isLoading) return (
      <div className="init">
         <Loader />
      </div>)

   return <Layout>
      <Component {...pageProps} />
   </Layout>
};

export default wrapper.withRedux(WrappedApp);
