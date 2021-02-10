import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { CheckboxWrapper } from './styles';

export const Checkbox = ({ checked }) => {
  return (
    <CheckboxWrapper checked={checked}>
      <div>
        <FaCheck color="white" />
      </div>
    </CheckboxWrapper>
  );
};
