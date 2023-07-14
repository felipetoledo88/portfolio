import { AiOutlineUser, AiOutlineTool, AiOutlineMail, AiTwotoneHome, AiOutlineContacts } from "react-icons/ai";
import { Header, Icon, ItemIcon, MenuItem, MenuList } from "./styles";
import { Link } from "react-router-dom";
import './../../reset.css';

export function HeaderPage() {
  return (
    <Header>
      <a href="/">
        <Icon />
      </a>
      <MenuList>
        <MenuItem>
          <ItemIcon>
            <AiTwotoneHome />
            <Link to="/">HOME</Link>
          </ItemIcon>
        </MenuItem>
        <MenuItem>
          <ItemIcon>
            <AiOutlineUser />
            <Link to="/about-me">SOBRE</Link>
          </ItemIcon>
        </MenuItem>
        <MenuItem>
          <ItemIcon>
            <AiOutlineTool />
            <Link to="/experiences">EXPERIÊNCIAS</Link>
          </ItemIcon>
        </MenuItem>
        <MenuItem>
          <ItemIcon>
            <AiOutlineContacts />
            <Link to="/contact">CONTATO</Link>
          </ItemIcon>
        </MenuItem>
      </MenuList>
    </Header>
  )
}