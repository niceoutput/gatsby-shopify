import React from 'react';
import { QuantityAdjusterWrapper } from './styles';

export const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };

  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <button onClick={handleDecrementQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrementQuantity}>+</button>
    </QuantityAdjusterWrapper>
  );
};
