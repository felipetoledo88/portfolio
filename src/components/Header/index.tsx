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
    </Header>
  )
}