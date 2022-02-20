import styled from 'styled-components';

export const StripeContainer = styled.div`
  position: relative;
`;

export const StripeBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 999px;
  background-color: #3f6cf2;
  color: #ffff;
  padding: 1.4rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-1.3rem);
  }
`;
