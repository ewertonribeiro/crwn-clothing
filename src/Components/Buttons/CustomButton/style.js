import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.payment ? 'green' : 'black')};
  padding: 1.2rem;
  border-radius: 0;
  border: none;
  color: #fff;
  cursor: pointer;
  width: ${(props) => (props.cart ? 'auto' : '13rem')};
  font-size: ${(props) => (props.cart ? '2rem' : '1.8rem')};
  margin-top: ${(props) => (props.cart ? 'auto' : '')};

  &:hover {
    background-color: #fff;
    color: black;
    border: 2px solid #000;
  }
`;
