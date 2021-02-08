import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export const ProductsGrid = ({ products }) => {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          key={product.shopifyId}
          title={product.title}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          description={product.description}
          minPrice={product.priceRange.minVariantPrice.amount}
        />
      ))}
    </ProductsGridWrapper>
  );
};
