import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.header`
  max-width: 100vw;
  width: 90%;
  height: 5rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeaderContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const MenuOption = styled(Link)`
  text-decoration: none;
  color: #777;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 1s;
  font-weight: 600;
`;
