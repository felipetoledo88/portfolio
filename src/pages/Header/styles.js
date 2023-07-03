import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineTool, AiOutlineMail } from 'react-icons/ai';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  padding: 16px;
`;

export const ItemIcon = styled.span`
  margin-right: 8px;
`;


export const Icon = styled(FaCode)`
  color: #49B6A6;
  font-size: 50px;
  margin-right: 8px;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
`;
export const MenuItem = styled.li`
  font-family: 'Fira Code', monospace;
  font-size: 14px;
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
`