/* eslint-disable react/prop-types */
import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import wrapper from '../store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(App);
