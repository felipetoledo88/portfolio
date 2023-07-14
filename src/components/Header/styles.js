import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  padding: 16px;

  @media (max-width: 768px) {
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #202123;
    z-index: 999;
  }
`;

export const ItemIcon = styled.span`
  margin-right: 8px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-bottom: 4px;
    }
  }
`;

export const Icon = styled(FaCode)`
  color: #fff;
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
    color: #fff;
    text-decoration: none;
  } 

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 5%
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
    color: #fff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
    font-size: 20px;
  }
`;