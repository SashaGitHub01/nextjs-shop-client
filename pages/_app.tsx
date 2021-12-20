import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '../store';
import { fetchAuth } from '../store/actions/authActions';
import Layout from '../components/Layout/Layout';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAuth());
   }, [])

   return <Layout>
      <Component {...pageProps} />
   </Layout>
};

export default wrapper.withRedux(WrappedApp);
