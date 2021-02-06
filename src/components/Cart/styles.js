import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  margin-left: auto;
  display: flex;
  color: black;
  text-decoration: none;

  div:last-child {
    padding-left: 8px;
    margin: 0 auto;
  }

  &:hover {
    text-decoration: underline;
  }
`;
