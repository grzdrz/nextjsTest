import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';

import { /* wrapper, */ store } from '../redux/store';

/* import '../components/button/button.css'; */
/* import './styles.css'; */
import './index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        TEST_123
        <Component {...pageProps} />
        TEST_345
      </Provider>
    )
  }
}

export default /* wrapper.withRedux(MyApp) */MyApp;