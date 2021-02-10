import React from 'react';
import { Checkbox } from 'components';
import { CategoryFilterItemWrapper } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const CategoryFilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);

  const onClickHandler = e => {
    let navigateTo = '/all-products';

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length) {
      navigate(`${navigateTo}?c=${newIds.join(',')}`);
    } else {
      navigate(`${navigateTo}`);
    }
  };
  return (
    <CategoryFilterItemWrapper onClick={onClickHandler}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
};
