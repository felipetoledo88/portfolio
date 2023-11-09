import { useState } from 'react';
import { AiOutlineUser, AiOutlineTool, AiOutlineMail, AiTwotoneHome, AiOutlineContacts } from "react-icons/ai";
import { Header, Icon, ItemIcon, MenuItem, MenuList, Hamburger, Sidebar } from "./styles";
import { Link } from "react-router-dom";
import './../../reset.css';

export function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Sidebar isOpen={isOpen}>
        <MenuList>
          <MenuItem>
            <ItemIcon>
              <AiTwotoneHome />
            </ItemIcon>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineUser />
            </ItemIcon>
            <Link to="/about-me">SOBRE</Link>
          </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineTool />
            </ItemIcon>
            <Link to="/experiences">EXPERIÊNCIAS</Link>
          </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineContacts />
            </ItemIcon>
            <Link to="/contact">CONTATO</Link>
          </MenuItem>
        </MenuList>
      </Sidebar>
    </Header>
  )
}
