import Logo from "../../Logo";
import { Li, Menu, Nav, P, Ul } from "./styles";

const MenuAside = () => {
  return (
    <Menu>
      <Logo></Logo>
      <Nav>
        <P>Mi Libreria</P>
        <Ul>
          <Li active>Recientes</Li>
          <Li>Artistas</Li>
          <Li>Albums</Li>
          <Li>Canciones</Li>
          <Li>Estaciones</Li>
        </Ul>
      </Nav>
      <Nav>
        <P>Playlist</P>
        <Ul>
          <Li>Metal</Li>
          <Li>Para Bailar</Li>
          <Li>Rock 90s</Li>
          <Li>Baladas</Li>
        </Ul>
      </Nav>
    </Menu>
  );
};

export default MenuAside;
