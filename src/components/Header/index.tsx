import { AiOutlineUser, AiOutlineTool, AiOutlineMail, AiTwotoneHome } from "react-icons/ai";
import { Header, Icon, ItemIcon, MenuItem, MenuList } from "./styles";
import { Link } from "react-router-dom";
import './../../reset.css';

export function HeaderPage() {
return(
<Header>
      <a href="/">
        <Icon />
      </a>
        <MenuList>
        <MenuItem>
          <ItemIcon>
            <AiTwotoneHome />
          </ItemIcon>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <ItemIcon>
            <AiOutlineUser />
          </ItemIcon>
          <Link to="/about-me">Sobre</Link>
        </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineTool />
            </ItemIcon>
            <Link to="/experiences">Experiências</Link>
          </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineTool />
            </ItemIcon>
            <Link to="/contact">Contato</Link>
          </MenuItem>
        </MenuList>
      </Header>
)
}