
import React from 'react';
import { connect } from 'react-redux';
import Products from './products/index';
import Head from 'next/head';

class Index extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Main page</title>
        </Head>

        <Products {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps)(Index);