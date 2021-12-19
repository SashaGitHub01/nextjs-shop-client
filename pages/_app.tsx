import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '../store';
import { fetchAuth } from '../store/actions/authActions';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAuth());
   }, [])

   return <Component {...pageProps} />
};

export default wrapper.withRedux(WrappedApp);
