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
          <Link to="/about-me">Sobre mim</Link>
        </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineTool />
            </ItemIcon>
            Experiências
          </MenuItem>
          <MenuItem>
            <ItemIcon>
              <AiOutlineMail />
            </ItemIcon>
            Contato
          </MenuItem>
        </MenuList>
      </Header>
)
}