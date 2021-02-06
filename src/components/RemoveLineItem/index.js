import React from 'react';
import CartContext from 'context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Icon } from './styles';

export const RemoveLineItem = ({ lineItemId }) => {
  const { removeLineItem } = React.useContext(CartContext);

  const handleClickhandler = () => {
    removeLineItem(lineItemId);
  };
  return (
    <Icon onClick={handleClickhandler}>
      <FaTrashAlt />
    </Icon>
  );
};
