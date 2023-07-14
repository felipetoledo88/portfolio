import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  padding: 16px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ItemIcon = styled.span`
  margin-right: 8px;
`;

export const Icon = styled(FaCode)`
  color: #49B6A6;
  font-size: 50px;
  margin-right: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: auto;

  a { 
    color: currentColor;
    text-decoration: none;
  } 

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const MenuItem = styled.li`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 17px;
  color: #fff;
  margin-right: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #49B6A6;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
    font-size: 17px;
  }
`;