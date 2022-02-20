import styled from 'styled-components';
import CustomButton from '../Buttons/CustomButton';

export const CartContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: #fff;
  top: 9rem;
  right: 4rem;
  z-index: 5;
`;

export const CartItens = styled.div`
  height: 28rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Text = styled.span`
  font-size: 1.8rem;
  margin: 7rem auto;
`;

export const Button = styled(CustomButton)`
  margin-top: auto;
  width: auto;
  font-size: 2rem;
`;
