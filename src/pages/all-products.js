import React from 'react';
import { Layout, Filters, ProductsGrid } from 'components';
import ProductContext from 'context/ProductContext';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const AllProducts = () => {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterByCategory);
  return (
    <Layout>
      <h4>{filteredProducts.length} Products</h4>
      <Content>
        <Filters />
        <div>
          <ProductsGrid products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

export default AllProducts;
