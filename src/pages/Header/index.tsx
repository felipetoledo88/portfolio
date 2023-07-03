import { AiOutlineUser, AiOutlineTool, AiOutlineMail } from "react-icons/ai";
import { Header, Icon, ItemIcon, MenuItem, MenuList } from "./styles";

export function HeaderPage() {
return(
<Header>
        <Icon />
        <MenuList>
          <MenuItem>
            <ItemIcon>
              <AiOutlineUser />
            </ItemIcon>
            Sobre mim
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