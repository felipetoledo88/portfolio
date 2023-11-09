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

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 30;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.isOpen ? '#fff' : '#333'};
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  background-color: #333;
  transition: transform 0.3s ease-in-out;
  padding: 10px 10px;
  z-index: 20;

  @media (min-width: 769px) {
    position: static;
    transform: none;
    flex-direction: row;
    background-color: transparent;
    height: auto;
    width: auto;
    align-items: center;
    padding-left: 0;
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
    font-size: 1.5rem;
    width: 100%;
    text-align: left;
  } 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 35px;
    margin-top: 70px;
  }
`;

