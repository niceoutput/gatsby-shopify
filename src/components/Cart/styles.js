import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  color: black;
  text-decoration: none;
  padding-left: 16px;
  align-items: center;

  svg {
    margin: 0 auto;
  }

  div:last-child {
    padding-left: 8px;
    margin: 0 auto;
  }

  &:hover {
    text-decoration: underline;
  }
`;
