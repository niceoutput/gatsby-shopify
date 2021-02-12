import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Hats Fanatic" description="Store Homepage Cart" />
      <CartContents />
    </Layout>
  );
};

export default CartPage;
